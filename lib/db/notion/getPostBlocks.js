import {
  getDataFromCache,
  getOrSetDataWithCache

} from '@/lib/cache/cache_manager'
import { deepClone, delay } from '../../utils'
import notionAPI from '@/lib/db/notion/getNotionAPI'
import pLimit from 'p-limit'
import { normalizeNotionBlockType } from '@/lib/utils/notion.util'
import { normalizeExternalMediaBlock } from '@/lib/db/notion/normalizeExternalMediaBlock'

function readPositiveInt(name, fallback) {
  const value = Number.parseInt(process.env[name] || '', 10)
  return Number.isFinite(value) && value > 0 ? value : fallback
}

// 构建期请求 Notion 时宁愿慢一点，也不要被 Notion 429 后整站导出失败。
const PAGE_REQUEST_CONCURRENCY = readPositiveInt('NOTION_PAGE_REQUEST_CONCURRENCY', 1)
const BLOCK_BATCH_SIZE = readPositiveInt('NOTION_BLOCK_BATCH_SIZE', 10)
const REQUEST_INTERVAL = readPositiveInt(
  'NOTION_REQUEST_INTERVAL_MS',
  readPositiveInt('NOTION_BUILD_RATE_MIN_INTERVAL_MS', 1200)
)
const PAGE_RETRY_ATTEMPTS = readPositiveInt('NOTION_PAGE_RETRY_ATTEMPTS', 5)
const MAX_RETRY_DELAY_MS = readPositiveInt('NOTION_MAX_RETRY_DELAY_MS', 30_000)

// ⚠️ 进程内限流器。跨进程节奏由 RateLimiter 负责，这里再把同进程并发压低。
const limit = pLimit(PAGE_REQUEST_CONCURRENCY)

function isRateLimitError(error) {
  const message = String(error?.message || error || '')
  const status = error?.response?.status || error?.status || error?.statusCode
  return status === 429 || message.includes('429') || message.includes('Too Many Requests')
}

function getRetryDelayMs(error, retryAttemptsLeft) {
  const usedAttempts = Math.max(0, PAGE_RETRY_ATTEMPTS - retryAttemptsLeft)
  const baseDelay = isRateLimitError(error)
    ? Math.min(MAX_RETRY_DELAY_MS, 5_000 * 2 ** usedAttempts)
    : Math.min(MAX_RETRY_DELAY_MS, 1_000 * 2 ** usedAttempts)
  const jitter = Math.floor(Math.random() * 500)
  return baseDelay + jitter
}

/**
 * 获取文章内容块
 * @param {string} id
 * @param {*} from
 */
export function normalizePageBlockCacheVersion(cacheVersion) {
  if (cacheVersion == null || cacheVersion === '') {
    return ''
  }

  if (cacheVersion instanceof Date) {
    const time = cacheVersion.getTime()
    return Number.isFinite(time) ? String(time) : ''
  }

  if (typeof cacheVersion === 'number') {
    return Number.isFinite(cacheVersion) ? String(cacheVersion) : ''
  }

  const raw = String(cacheVersion).trim()
  if (!raw) {
    return ''
  }

  const parsed = Date.parse(raw)
  if (Number.isFinite(parsed)) {
    return String(parsed)
  }

  return raw.replace(/[^a-z0-9_.:-]/gi, '_')
}

export function getPageBlockCacheKey(id, cacheVersion) {
  const normalizedVersion = normalizePageBlockCacheVersion(cacheVersion)
  return normalizedVersion
    ? `page_block_${id}_${normalizedVersion}`
    : `page_block_${id}`
}

/**
 * @param {string} id
 * @param {string | undefined} from
 * @param {{ cacheVersion?: string | number | Date }} options
 */
export async function fetchNotionPageBlocks(id, from = undefined, options = {}) {
  const cacheKey = getPageBlockCacheKey(id, options?.cacheVersion)

  const pageBlock = await getOrSetDataWithCache(
    cacheKey,
    () => limit(() => getPageWithRetry(id, from, PAGE_RETRY_ATTEMPTS, cacheKey))
  )

  if (!pageBlock) {
    console.warn('[getPage] empty pageBlock:', id)
    return null
  }

  return pageBlock
}

/**
 * 调用接口，失败会重试
 * @param {*} id
 * @param {*} retryAttempts
 */
export async function getPageWithRetry(
  id,
  from,
  retryAttempts = PAGE_RETRY_ATTEMPTS,
  cacheKey = getPageBlockCacheKey(id)
) {
  if (!retryAttempts || retryAttempts <= 0) {
    const cached = await getDataFromCache(cacheKey, true)
    if (cached) return cached
    console.error('[请求失败]:', `from:${from}`, `id:${id}`)
    return null
  }

  console.log(
    '[API-->>请求]',
    `from:${from}`,
    `id:${id}`,
    retryAttempts < PAGE_RETRY_ATTEMPTS ? `剩余重试次数:${retryAttempts}` : ''
  )

  try {
    await delay(REQUEST_INTERVAL)
    const start = Date.now()
    const pageData = await notionAPI.getPage(id)
    const end = Date.now()
    console.log('[API<<--响应]', `耗时:${end - start}ms - from:${from}`)
    return pageData
  } catch (e) {
    console.warn('[API<<--异常]:', e)

    const pageBlock = await getDataFromCache(cacheKey, true)
    if (pageBlock) {
      console.warn('[API<<--缓存兜底]:', `from:${from}`, `id:${id}`)
      return pageBlock
    }

    const waitMs = getRetryDelayMs(e, retryAttempts)
    console.warn(
      '[API<<--等待重试]:',
      `from:${from}`,
      `id:${id}`,
      `wait:${waitMs}ms`,
      isRateLimitError(e) ? 'reason:429' : ''
    )
    await delay(waitMs)

    return getPageWithRetry(id, from, retryAttempts - 1, cacheKey)
  }
}

/**
 * Notion页面BLOCK格式化处理
 * 1.删除冗余字段
 * 2.比如文件、视频、音频、url格式化
 * 3.代码块等元素兼容
 * @param {*} id 页面ID
 * @param {*} blockMap 页面元素
 * @param {*} slice 截取数量
 * @returns
 */
export function formatNotionBlock(block) {
  const clonedBlock = deepClone(block)
  const blocksToProcess = Object.keys(clonedBlock || {})

  for (let i = 0; i < blocksToProcess.length;) {
    const blockId = blocksToProcess[i]
    let b = clonedBlock[blockId]

    // ✅ 【新增】统一结构：兼容新版双层嵌套格式
    // 新格式: { spaceId, value: { value: { id, type }, role } }
    // 次格式: { value: { id, type }, role }
    // 旧格式: { value: { id, type } }
    if (b?.value?.value?.id) {
      // 新格式，剥掉外层，只保留真实 block value
      clonedBlock[blockId] = { value: b.value.value }
      b = clonedBlock[blockId]
    } else if (!b?.value?.id && b?.value?.role !== undefined) {
      // role:none 等无权限 block，直接跳过
      i++
      continue
    }

    // ✅ 【新增】清理 crdt 字段，react-notion-x 不认识会报 Unsupported block type
    if (b?.value) {
      delete b.value.crdt_data
      delete b.value.crdt_format_version
      b.value.type = normalizeNotionBlockType(b.value.type)
    }

    // 原有逻辑不变 ↓↓↓

    sanitizeBlockUrls(b?.value)
    normalizeExternalMediaBlock(b?.value)

    if (b?.value?.type === 'sync_block') {
      const childBlockIds = []

      // Case 1: inline children (original format)
      if (Array.isArray(b.value.children) && b.value.children.length > 0) {
        delete clonedBlock[blockId]
        b.value.children.forEach((childBlock, index) => {
          const newBlockId = `${blockId}_child_${index}`
          clonedBlock[newBlockId] = childBlock
          childBlockIds.push(newBlockId)
        })
        blocksToProcess.splice(i, 1, ...childBlockIds)
        continue
      }

      // Case 2: content array with child block IDs (some Notion API responses)
      if (Array.isArray(b.value.content) && b.value.content.length > 0) {
        delete clonedBlock[blockId]
        b.value.content.forEach((childId, index) => {
          const childBlock = clonedBlock[childId]
          if (childBlock) {
            const newBlockId = `${blockId}_child_${index}`
            clonedBlock[newBlockId] = childBlock
            childBlockIds.push(newBlockId)
            delete clonedBlock[childId]
          }
        })
        if (childBlockIds.length > 0) {
          blocksToProcess.splice(i, 1, ...childBlockIds)
          continue
        }
      }

      // Case 3: no children or content — pass through to react-notion-x
    }

    if (b?.value?.type === 'code') {
      if (b?.value?.properties?.language?.[0][0] === 'C++') {
        b.value.properties.language[0][0] = 'cpp'
      }
      if (b?.value?.properties?.language?.[0][0] === 'C#') {
        b.value.properties.language[0][0] = 'csharp'
      }
      if (b?.value?.properties?.language?.[0][0] === 'Assembly') {
        b.value.properties.language[0][0] = 'asm6502'
      }
    }

    if (
      ['file', 'pdf', 'video', 'audio'].includes(b?.value?.type) &&
      b?.value?.properties?.source?.[0][0] &&
      (b?.value?.properties?.source?.[0][0]?.startsWith('attachment') ||
        b?.value?.properties?.source?.[0][0].indexOf('amazonaws.com') > 0)
    ) {
      const oldUrl = b?.value?.properties?.source?.[0][0]
      const newUrl = `https://notion.so/signed/${encodeURIComponent(oldUrl)}?table=block&id=${b?.value?.id}`
      b.value.properties.source[0][0] = newUrl
    }

    i++
  }

  return clonedBlock
}

async function fetchBlocksBatchWithRetry(batch, retryAttempts = PAGE_RETRY_ATTEMPTS) {
  if (!retryAttempts || retryAttempts <= 0) return {}

  try {
    await delay(REQUEST_INTERVAL)
    console.log('[API-->>批量请求]', batch.length)

    const start = Date.now()
    const pageChunk = await notionAPI.getBlocks(batch)
    const end = Date.now()
    const blocks = pageChunk?.recordMap?.block || {}

    console.log(
      `[API<<--批量响应] size:${batch.length} 耗时:${end - start}ms blocks:${Object.keys(blocks).length}`
    )

    return blocks
  } catch (err) {
    const waitMs = getRetryDelayMs(err, retryAttempts)
    console.warn('[Batch API异常]', err?.message || err, `wait:${waitMs}ms`)
    await delay(waitMs)
    return fetchBlocksBatchWithRetry(batch, retryAttempts - 1)
  }
}

/**
 * 根据[]ids，批量抓取blocks
 * 在获取数据库文章列表时，超过一定数量的block会被丢弃，因此根据pageId批量抓取block
 * @param {*} ids
 * @param {*} batchSize
 * @returns
 */
export const fetchInBatches = async (ids, batchSize = BLOCK_BATCH_SIZE) => {
  if (!Array.isArray(ids)) {
    ids = [ids]
  }

  let fetchedBlocks = {}

  if (ids.length === 0) {
    return fetchedBlocks
  }

  console.log('[Batch] START total ids:', ids.length)

  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize)

    console.log(`\n[Batch] processing ${i} ~ ${i + batch.length}`)

    const result = await limit(() => fetchBlocksBatchWithRetry(batch))

    // ✅ 合并结果
    fetchedBlocks = {
      ...fetchedBlocks,
      ...result
    }
  }

  return fetchedBlocks
}

/**
 * 强制修复 block 中所有可能的非法 URL 字段
 * @param {Object} blockValue - block.value
 */
function sanitizeBlockUrls(blockValue) {
  if (!blockValue || typeof blockValue !== 'object') return

  const fixUrl = (url) => {
    if (typeof url !== 'string') return url

    if (url.startsWith('/')) {
      return url
    }

    // 修复 http:xxx → http://xxx
    if (url.startsWith('http:') && !url.startsWith('http://')) {
      url = 'http://' + url.slice(5)
    } else if (url.startsWith('https:') && !url.startsWith('https://')) {
      url = 'https://' + url.slice(6)
    }

    // 再次验证是否合法，否则替换为占位图
    try {
      new URL(url)
      return url
    } catch {
      console.warn('[Sanitize URL] Invalid URL replaced:', url)
      return 'https://via.placeholder.com/1x1?text=Invalid+Image'
    }
  }

  // 1. 处理 properties.source（用于 image, embed, bookmark, file, pdf 等）
  if (
    blockValue.properties?.source?.[0]?.[0] &&
    typeof blockValue.properties.source[0][0] === 'string'
  ) {
    blockValue.properties.source[0][0] = fixUrl(blockValue.properties.source[0][0])
  }

  // 2. 处理 file.url（用于 file block）
  if (blockValue.file?.url && typeof blockValue.file.url === 'string') {
    blockValue.file.url = fixUrl(blockValue.file.url)
  }

  // 3. 处理 format.page_cover（页面封面）
  if (blockValue.format?.page_cover && typeof blockValue.format.page_cover === 'string') {
    blockValue.format.page_cover = fixUrl(blockValue.format.page_cover)
  }

  // 4. 处理其他可能的 URL 字段（可选扩展）
  // 例如：video、audio 的 source 可能也走 properties.source，已覆盖
}
