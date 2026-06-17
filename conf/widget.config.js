/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  // AI 聊天机器人相关配置已迁移至 conf/ai.config.js

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST:[
    {
      name: "LIFE TRAIN",
      artist: "辻詩音",
      url: "https://music.163.com/song/media/outer/url?id=3353867061.mp3",
      cover: "https://p1.music.126.net/SJjRCdBRt6rXXvBU505iaQ==/109951172730652477.jpg"
    },
    {
      name: "LIFE is too Chotto！",
      artist: "辻詩音",
      url: "https://music.163.com/song/media/outer/url?id=2733441077.mp3",
      cover: "https://p1.music.126.net/czYxeC9NFyeZOcvSq-KiWA==/109951171755858724.jpg"
    },
    {
      name: "提瓦特民谣 星空版",
      artist: "鹿喑kana / 多多poi / Mace / 陶典 / 孙晔 / 花玲",
      url: "https://music.163.com/song/media/outer/url?id=3313898351.mp3",
      cover: "https://p1.music.126.net/mue1tb8W9CYyZserLsOzAQ==/109951172232446997.jpg"
    },
    {
      name: "完美约会 feat.嘉然 & 乃琳",
      artist: "iKz / 嘉然Diana / 乃琳Eileen",
      url: "https://music.163.com/song/media/outer/url?id=3386401426.mp3",
      cover: "https://p2.music.126.net/iq4sXFHHhj591S4TYKWtag==/109951173282837365.jpg"
    },
    {
      name: "せかいのしくみ",
      artist: "Guiano",
      url: "https://music.163.com/song/media/outer/url?id=3336976372.mp3",
      cover: "https://p2.music.126.net/FeOw2Igb1KM9F4LFy28D1g==/109951172554671945.jpg"
    },
    {
      name: "PEAK",
      artist: "三Z-STUDIO / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=3336859490.mp3",
      cover: "https://p2.music.126.net/j80-bTT1GiSQoai8vBq8Cw==/109951172552640296.jpg"
    },
    {
      name: "普瑞赛斯狂热症候群",
      artist: "相星澪 / Magens",
      url: "https://music.163.com/song/media/outer/url?id=3374979293.mp3",
      cover: "https://p2.music.126.net/pV8OCDFf9UWgblwkFQQsqQ==/109951173127896728.jpg"
    },
    {
      name: "Pain Killer",
      artist: "Grabbitz",
      url: "https://music.163.com/song/media/outer/url?id=1887382479.mp3",
      cover: "https://p2.music.126.net/6UKBbG1T5C2id6k28mXFOg==/109951166523276829.jpg"
    },
    {
      name: "别忘记查收关心！",
      artist: "苏逸_Suyi / 爆裂菊是也 / 小N / 清源Kiyo / 徐翔 / XY大甘蔗",
      url: "https://music.163.com/song/media/outer/url?id=2712211796.mp3",
      cover: "https://p2.music.126.net/Dz1JE4FHxZIwmuM4IrbXFw==/109951171263601570.jpg"
    },
    {
      name: "Indigo Soda Pop",
      artist: "Sean Ven",
      url: "https://music.163.com/song/media/outer/url?id=3358030106.mp3",
      cover: "https://p2.music.126.net/9muhWFHl0PJvoQOlSyvKVg==/109951172868940585.jpg"
    },
    {
      name: "どーも、天才です！",
      artist: "P丸様。",
      url: "https://music.163.com/song/media/outer/url?id=3357316740.mp3",
      cover: "https://p2.music.126.net/TBGO7NyrWwSJyjmUaCyKkA==/109951172860905524.jpg"
    },
    {
      name: "游春",
      artist: "MOCKER44. / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=3357446891.mp3",
      cover: "https://p2.music.126.net/wTLImK4YEv7DwO7J7J8ZQg==/109951172862866612.jpg"
    },
    {
      name: "遥远小镇的我",
      artist: "洛天依 / flybanana",
      url: "https://music.163.com/song/media/outer/url?id=2705018667.mp3",
      cover: "https://p2.music.126.net/0oaljSQno1HLMn7o9pu-CQ==/109951172862213418.jpg"
    },
    {
      name: "退勤？",
      artist: "鸣潮先约电台 / EVO+",
      url: "https://music.163.com/song/media/outer/url?id=2709753311.mp3",
      cover: "https://p2.music.126.net/aoW4fG0cbwWiiGlFdMXEqg==/109951171122390784.jpg"
    },
    {
      name: "うそをついて",
      artist: "000",
      url: "https://music.163.com/song/media/outer/url?id=1348955245.mp3",
      cover: "https://p2.music.126.net/75yKKf5RFmQ0KYBvzVchJw==/109951163893812393.jpg"
    },
    {
      name: "ツバキちゃん24時間密着記録 (feat. 大瀬良あい)",
      artist: "篠崎あやと / ファル公 / 大瀬良あい",
      url: "https://music.163.com/song/media/outer/url?id=3340360285.mp3",
      cover: "https://p2.music.126.net/VeHjMdZLNY0g6tYOr6W1mw==/109951172608341895.jpg"
    },
    {
      name: "TURN UP",
      artist: "田中ヒメ(HIMEHINA)",
      url: "https://music.163.com/song/media/outer/url?id=3349221665.mp3",
      cover: "https://p2.music.126.net/1Zzy2Lour038kIpBIF_K6w==/109951172735580498.jpg"
    },
    {
      name: "言っちゃいけないことばっか浮かぶよな",
      artist: "Guiano / 理芽",
      url: "https://music.163.com/song/media/outer/url?id=2082330819.mp3",
      cover: "https://p2.music.126.net/k6sJsG30rdYmRkfN8Z6lZA==/109951168916555109.jpg"
    },
    {
      name: "失温症 (洛天依 ver.)",
      artist: "洛天依 / 路灯 / J_2C",
      url: "https://music.163.com/song/media/outer/url?id=3360389284.mp3",
      cover: "https://p2.music.126.net/7n5Dcd2ipcjeTDJiA3AP4A==/109951172903463206.jpg"
    },
    {
      name: "落子无声",
      artist: "墨老板 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=3380005096.mp3",
      cover: "https://p2.music.126.net/DCwI8iDalJFyA47aazr-6Q==/109951173285548884.jpg"
    },
    {
      name: "Never ending",
      artist: "HFHW",
      url: "https://music.163.com/song/media/outer/url?id=3354941747.mp3",
      cover: "https://p2.music.126.net/cRpPz7Qs-GpZ-DsiDBsZmQ==/109951172828066596.jpg"
    },
    {
      name: "Montagem Yuki",
      artist: "KPHK",
      url: "https://music.163.com/song/media/outer/url?id=3342306149.mp3",
      cover: "https://p1.music.126.net/AXrMggcQQAocMtW2HUr--w==/109951172631416219.jpg"
    },
    {
      name: "MONTAGEM KOE",
      artist: "Bellyjay / Eluvo",
      url: "https://music.163.com/song/media/outer/url?id=3345833603.mp3",
      cover: "https://p1.music.126.net/Ay-kq5f5UuTC9lvEYnoBWg==/109951172684134501.jpg"
    },
    {
      name: "C&C",
      artist: "森羅万象",
      url: "https://music.163.com/song/media/outer/url?id=2705024291.mp3",
      cover: "https://p1.music.126.net/rb3rE7zBACA47GICi_0DFQ==/109951170984292017.jpg"
    },
    {
      name: "L!!!!ght",
      artist: "鸣潮先约电台 / Meredith Bull",
      url: "https://music.163.com/song/media/outer/url?id=3360087255.mp3",
      cover: "https://p1.music.126.net/TX5HIirSTMgRQk0Kt6n6dg==/109951172899739399.jpg"
    },
    {
      name: "ベースラインやってる?笑",
      artist: "ななひら",
      url: "https://music.163.com/song/media/outer/url?id=526904525.mp3",
      cover: "https://p1.music.126.net/MtWOQCc_JLINjKgzZFoJXQ==/109951163098306222.jpg"
    },
    {
      name: "ウタオウヨ、ウタオウヨ",
      artist: "YuNi",
      url: "https://music.163.com/song/media/outer/url?id=1360965479.mp3",
      cover: "https://p1.music.126.net/RQ6yBeHPozT73vLLWtcoAw==/109951164021315639.jpg"
    },
    {
      name: "BITE! 咬合力",
      artist: "雷雨心 / 三Z-STUDIO / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2606329521.mp3",
      cover: "https://p1.music.126.net/aAU_B5ZXJvPLoFnUIYKcQw==/109951169764682272.jpg"
    },
    {
      name: "妄想色心跳",
      artist: "三Z-STUDIO / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=3362538431.mp3",
      cover: "https://p1.music.126.net/W5gLcZvHblk_s90K9bYiBQ==/109951172934379594.jpg"
    },
    {
      name: "溯 (Reverse)",
      artist: "CORSAK胡梦周 / 马吟吟",
      url: "https://music.163.com/song/media/outer/url?id=1294951288.mp3",
      cover: "https://p1.music.126.net/NTilljwKT_Hs9sLhBP1KKQ==/109951163416029067.jpg"
    },
    {
      name: "星降る海",
      artist: "Aqu3ra / 早見沙織",
      url: "https://music.163.com/song/media/outer/url?id=3340112782.mp3",
      cover: "https://p1.music.126.net/rwWOrSz65eAdnQsHy9Vghw==/109951172602675059.jpg"
    },
    {
      name: "歪歪",
      artist: "拂言",
      url: "https://music.163.com/song/media/outer/url?id=2100282715.mp3",
      cover: "https://p1.music.126.net/G0pr2aux9dzK9hT4-n2n5A==/109951169058424179.jpg"
    },
    {
      name: "Be The One (feat. 百足)",
      artist: "Nozomi Kitay / GAL D / 百足",
      url: "https://music.163.com/song/media/outer/url?id=2610243542.mp3",
      cover: "https://p1.music.126.net/Xa-zZsKyEu86-NrB5KoyIA==/109951169805683323.jpg"
    },
    {
      name: "夜来香 (feat. 兎乃りん)",
      artist: "Nyarons / 兎乃りん",
      url: "https://music.163.com/song/media/outer/url?id=2164433174.mp3",
      cover: "https://p1.music.126.net/q1nB7RRTot7zxKhDhtPKHA==/109951169665916972.jpg"
    },
    {
      name: "Chatter Chatter",
      artist: "宝鐘マリン / 星街すいせい",
      url: "https://music.163.com/song/media/outer/url?id=3358789096.mp3",
      cover: "https://p1.music.126.net/Oh1-sH4qmv9xNrTxTSZDDw==/109951172878388417.jpg"
    },
    {
      name: "MONTAGEM HIKARI JUMPSTYLE",
      artist: "TWXNY / Bellyjay / INNXCENCE",
      url: "https://music.163.com/song/media/outer/url?id=3345839886.mp3",
      cover: "https://p1.music.126.net/6Dh4LBYAmFvqtdZd_H2dHw==/109951172684146444.jpg"
    },
    {
      name: "快啖ノススメ",
      artist: "東京真中 / はしメロ / 9Lana",
      url: "https://music.163.com/song/media/outer/url?id=2728427776.mp3",
      cover: "https://p1.music.126.net/ThkpdCyVuCm6cN5AEu7nYQ==/109951171500316460.jpg"
    },
    {
      name: "チューイン・ディスコ",
      artist: "花譜 / ツミキ",
      url: "https://music.163.com/song/media/outer/url?id=2617284995.mp3",
      cover: "https://p1.music.126.net/d5zILnWI5h6_JV3b0RO-qg==/109951169871818571.jpg"
    },
    {
      name: "冬の魔法",
      artist: "Aogumo",
      url: "https://music.163.com/song/media/outer/url?id=2758170611.mp3",
      cover: "https://p1.music.126.net/Qz8o6naR6L4kvq7eIF_Zwg==/109951172184833191.jpg"
    },
    {
      name: "雨風空虹",
      artist: "家入レオ",
      url: "https://music.163.com/song/media/outer/url?id=2660086122.mp3",
      cover: "https://p1.music.126.net/s0oumvnXDmge_uNpjupHRg==/109951170311641819.jpg"
    },
    {
      name: "ワールドイズマイン (かぐや&月見ヤチヨ ver.) [CPK! Remix]",
      artist: "ryo (supercell) / かぐや(cv.夏吉ゆうこ) / 早見沙織",
      url: "https://music.163.com/song/media/outer/url?id=3340105621.mp3",
      cover: "https://p2.music.126.net/otpQWO3_SYzNe7F7wLwbdA==/109951172602512218.jpg"
    },
    {
      name: "コンコンきつね",
      artist: "karoi / 白上フブキ",
      url: "https://music.163.com/song/media/outer/url?id=1317003118.mp3",
      cover: "https://p2.music.126.net/6aDfBrTYM9ooRBdarN045A==/109951163597037880.jpg"
    },
    {
      name: "WILDCARD (feat. Kasane Teto)",
      artist: "KIRA / Asteroid / 重音テト",
      url: "https://music.163.com/song/media/outer/url?id=2092951152.mp3",
      cover: "https://p2.music.126.net/POMNhvTWG1k_KLfVDgR6GQ==/109951169000280399.jpg"
    },
    {
      name: "TIAN TIAN",
      artist: "Mili",
      url: "https://music.163.com/song/media/outer/url?id=2707332868.mp3",
      cover: "https://p2.music.126.net/3SREPNrEu561h_K2jLB8ww==/109951171011324261.jpg"
    },
    {
      name: "Aim Tech",
      artist: "Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=2755064450.mp3",
      cover: "https://p2.music.126.net/o8WJ7KFGP122rtM9bIIyhw==/109951172145184163.jpg"
    },
    {
      name: "サードアイや!",
      artist: "ココ",
      url: "https://music.163.com/song/media/outer/url?id=32166028.mp3",
      cover: "https://p2.music.126.net/ogLz_cruzKI80HOLBX9QZw==/109951166006778804.jpg"
    },
    {
      name: "Hero Pt. II",
      artist: "Grabbitz",
      url: "https://music.163.com/song/media/outer/url?id=2635099841.mp3",
      cover: "https://p2.music.126.net/Rbjj2NpAGaQgUV95k0OY9g==/109951170361560232.jpg"
    },
    {
      name: "すとり～ま～FIRE!?!?",
      artist: "F Rabbeat / マスタード",
      url: "https://music.163.com/song/media/outer/url?id=2112690599.mp3",
      cover: "https://p2.music.126.net/Q13BmvB3YyK2mH7NDGlf8g==/109951169219065613.jpg"
    },
    {
      name: "Tiny Giant 小巨星",
      artist: "三Z-STUDIO / HOYO-MiX / Ashley Alisha",
      url: "https://music.163.com/song/media/outer/url?id=3334421408.mp3",
      cover: "https://p2.music.126.net/je6r0FdStxxXMpCixgoCMg==/109951172517696025.jpg"
    },
    {
      name: "提瓦特民谣",
      artist: "宴宁 / XY大甘蔗 / 柳知萧 / 闫夜桥 / 陶典 / 孙晔",
      url: "https://music.163.com/song/media/outer/url?id=2750140001.mp3",
      cover: "https://p2.music.126.net/tY3kQom9zTUwux6PUZ6r0Q==/109951172068985822.jpg"
    },
    {
      name: "心焰 feat.洛天依",
      artist: "iKz",
      url: "https://music.163.com/song/media/outer/url?id=3335437040.mp3",
      cover: "https://p2.music.126.net/YE6OlUruBrLu-TDh2izVrA==/109951172535736662.jpg"
    },
    {
      name: "愛言葉IV",
      artist: "DECO*27 / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=1951952113.mp3",
      cover: "https://p2.music.126.net/1tBOiEJxwsz6sCFZmeCOPA==/109951167493481738.jpg"
    },
    {
      name: "Two Feet On The Ground (feat. Aviella) [Arknights Soundtrack]",
      artist: "Prince Fox / Aviella",
      url: "https://music.163.com/song/media/outer/url?id=1940330748.mp3",
      cover: "https://p2.music.126.net/l0jMxKt8SCv_A-hUrZVCMg==/109951167325384012.jpg"
    },
    {
      name: "かいか",
      artist: "廻花",
      url: "https://music.163.com/song/media/outer/url?id=2146779700.mp3",
      cover: "https://p2.music.126.net/TN-zHTALjkS_b5RplXInxw==/109951169505146864.jpg"
    },
    {
      name: "Pull Me Through The Fire",
      artist: "Matisse & Sadko / James French",
      url: "https://music.163.com/song/media/outer/url?id=2086056137.mp3",
      cover: "https://p2.music.126.net/CgD2Cmac1h3Mov5Ep4T7tA==/109951168969896469.jpg"
    },
    {
      name: "コノヨLoading...",
      artist: "REOL",
      url: "https://music.163.com/song/media/outer/url?id=436016472.mp3",
      cover: "https://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg"
    },
    {
      name: "速通满级攻略",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=3374295746.mp3",
      cover: "https://p2.music.126.net/J9WpynuJ1V6mZJ-HLrFWhQ==/109951173114833508.jpg"
    },
    {
      name: "人生列车 Life Train",
      artist: "哔哩哔哩拜年纪 / 秋葵AKIAOI",
      url: "https://music.163.com/song/media/outer/url?id=3348915458.mp3",
      cover: "https://p2.music.126.net/SJjRCdBRt6rXXvBU505iaQ==/109951172730652477.jpg"
    },
    {
      name: "宙でおやすみ",
      artist: "Aiobahn / 長瀬有花",
      url: "https://music.163.com/song/media/outer/url?id=2027310408.mp3",
      cover: "https://p2.music.126.net/_D61wTBjB2MOC8AK7pWigg==/109951170245088673.jpg"
    },
    {
      name: "告死鸟",
      artist: "ilem",
      url: "https://music.163.com/song/media/outer/url?id=3372975275.mp3",
      cover: "https://p2.music.126.net/C7g1zt0xrvumHSD4GQ1DCA==/109951173099062978.jpg"
    },
    {
      name: "Die For You",
      artist: "VALORANT / Grabbitz",
      url: "https://music.163.com/song/media/outer/url?id=1974630461.mp3",
      cover: "https://p2.music.126.net/7L4ROhfRFkJxroC3zbqPqw==/109951171796456806.jpg"
    },
    {
      name: "未完待续",
      artist: "云龙军惠 / 诗岸",
      url: "https://music.163.com/song/media/outer/url?id=1395512014.mp3",
      cover: "https://p2.music.126.net/PwBO_MExWk-klFZvtWCjQg==/109951164413606401.jpg"
    },
    {
      name: "推推推推推推推推金金金金金金金金",
      artist: "きくお / 神楽めあ",
      url: "https://music.163.com/song/media/outer/url?id=3370503068.mp3",
      cover: "https://p2.music.126.net/rOe9pOoAxqEBLrkupQFubQ==/109951173053322899.jpg"
    },
    {
      name: "アリア",
      artist: "ナナツカゼ",
      url: "https://music.163.com/song/media/outer/url?id=2714498721.mp3",
      cover: "https://p2.music.126.net/SPl7BfiMrNA9QJsElUlaIA==/109951171293589778.jpg"
    },
    {
      name: "だいあるのーと",
      artist: "七草くりむ",
      url: "https://music.163.com/song/media/outer/url?id=1924588428.mp3",
      cover: "https://p2.music.126.net/fos6_c3e_XSJ6PcOlngb5w==/109951167105718747.jpg"
    },
    {
      name: "永久に枯れぬ花",
      artist: "ヰ世界情緒",
      url: "https://music.163.com/song/media/outer/url?id=3369793647.mp3",
      cover: "https://p2.music.126.net/zaSSHybQR0orzisocxgGXQ==/109951173044139529.jpg"
    },
    {
      name: "愛言葉V -Hello ver.-",
      artist: "DECO*27",
      url: "https://music.163.com/song/media/outer/url?id=3360770650.mp3",
      cover: "https://p2.music.126.net/FAFsOl8kfaQVbnO2_nlbCw==/109951172907829257.jpg"
    },
    {
      name: "MONTAGEM YORU",
      artist: "DJ Portu / TRXVELER / KPHK",
      url: "https://music.163.com/song/media/outer/url?id=3348287221.mp3",
      cover: "https://p1.music.126.net/fYqbv6x6h231vF9WLw80oA==/109951172721351867.jpg"
    },
    {
      name: "萤梦",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1972728485.mp3",
      cover: "https://p1.music.126.net/5J_Q3qBFJAIUNxHYQRqO2Q==/109951167793284672.jpg"
    },
    {
      name: "蜃気楼",
      artist: "tayori",
      url: "https://music.163.com/song/media/outer/url?id=3374921372.mp3",
      cover: "https://p1.music.126.net/Vgrg65GQzJEs5rhYvSuVSg==/109951173126724065.jpg"
    },
    {
      name: "シャナ",
      artist: "Guiano / IA",
      url: "https://music.163.com/song/media/outer/url?id=1316562183.mp3",
      cover: "https://p1.music.126.net/8ESe3tD4bmqvOnGzp1wUag==/109951163594771173.jpg"
    },
    {
      name: "VISIONS （『仮面ライダーゼッツ』主題歌）",
      artist: "NAQT VANE",
      url: "https://music.163.com/song/media/outer/url?id=2750093263.mp3",
      cover: "https://p1.music.126.net/Hk4KcnIVCva_dOuD2dSI7w==/109951172068556397.jpg"
    },
    {
      name: "王冠",
      artist: "辻詩音",
      url: "https://music.163.com/song/media/outer/url?id=1320572967.mp3",
      cover: "https://p1.music.126.net/rZLuFW9lgSOq29ju-zO5cw==/109951163625935144.jpg"
    },
    {
      name: "失われしエインシャントピア",
      artist: "あやぽんず* / あよ",
      url: "https://music.163.com/song/media/outer/url?id=3312607598.mp3",
      cover: "https://p1.music.126.net/iXOepHAq88GhcGz4oeycZQ==/109951172321486673.jpg"
    },
    {
      name: "ダダダダ天使",
      artist: "七音阿卡莉",
      url: "https://music.163.com/song/media/outer/url?id=1311345114.mp3",
      cover: "https://p1.music.126.net/phOwvFnhPskpmZJMAN4mYA==/109951163559515626.jpg"
    },
    {
      name: "Phatom(Original Mix)",
      artist: "天姫神織 / 初音ミク / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1356795090.mp3",
      cover: "https://p1.music.126.net/eSg69b9Qw0g_hTIZY9HGHA==/109951163977313430.jpg"
    },
    {
      name: "MONTAGEM YUME",
      artist: "Bellyjay / KPHK",
      url: "https://music.163.com/song/media/outer/url?id=3351203472.mp3",
      cover: "https://p1.music.126.net/0kqip3h43Yl18QI4ieXT5A==/109951172766685519.jpg"
    },
    {
      name: "Offline Saga",
      artist: "Empty old City / 水槽",
      url: "https://music.163.com/song/media/outer/url?id=2708679679.mp3",
      cover: "https://p1.music.126.net/pw2-O--mpQR92SWnz88xEg==/109951171028049310.jpg"
    },
    {
      name: "等吧",
      artist: "心华",
      url: "https://music.163.com/song/media/outer/url?id=2708134778.mp3",
      cover: "https://p1.music.126.net/AyB-yOCex12taid8irqvZw==/109951171021258579.jpg"
    },
    {
      name: "绝体绝命",
      artist: "阿良良木健 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=550059604.mp3",
      cover: "https://p1.music.126.net/Csw9Gl-c5YDFLJggK-gpyw==/109951163696193010.jpg"
    },
    {
      name: "てきとうメイク (随心妆)",
      artist: "ゆーり",
      url: "https://music.163.com/song/media/outer/url?id=3359902643.mp3",
      cover: "https://p1.music.126.net/KeMsCDj8zyvD8aHAgyYR-A==/109951172898074474.jpg"
    },
    {
      name: "かくしぇーむ",
      artist: "CY8ER / Yunomi / 苺りなはむ",
      url: "https://music.163.com/song/media/outer/url?id=498286648.mp3",
      cover: "https://p1.music.126.net/ksIZa9V41Q1EuhBTmjWmyA==/109951168568786484.jpg"
    },
    {
      name: "原来神明也哭过",
      artist: "里里",
      url: "https://music.163.com/song/media/outer/url?id=2653883648.mp3",
      cover: "https://p1.music.126.net/wmGA7zv857KMmvMraB85Gw==/109951170229894629.jpg"
    },
    {
      name: "粗线条的雨",
      artist: "里里",
      url: "https://music.163.com/song/media/outer/url?id=1965198475.mp3",
      cover: "https://p1.music.126.net/wscKoUwOrpxKRTIYmDWgTQ==/109951167691622429.jpg"
    },
    {
      name: "爱.沉醉",
      artist: "里里",
      url: "https://music.163.com/song/media/outer/url?id=3355983396.mp3",
      cover: "https://p1.music.126.net/GWCI6vYFb8mUZMsY0lP2Jg==/109951172841283286.jpg"
    },
    {
      name: "夏の真夜中",
      artist: "Aiobahn / アンテナガール",
      url: "https://music.163.com/song/media/outer/url?id=500684235.mp3",
      cover: "https://p1.music.126.net/_9Fds8Z4X-SyFj6lIp-7jA==/109951163008620979.jpg"
    },
    {
      name: "銀河鉄道のペンギン",
      artist: "Yunomi / Aiobahn",
      url: "https://music.163.com/song/media/outer/url?id=403012075.mp3",
      cover: "https://p2.music.126.net/pN83RvbTleOURewDS-2d0w==/109951169246822345.jpg"
    },
    {
      name: "曖昧トリップ",
      artist: "Yunomi / 桃箱 / miko",
      url: "https://music.163.com/song/media/outer/url?id=515452664.mp3",
      cover: "https://p2.music.126.net/vzDVHuwJWUMdwGnNOnDBKQ==/109951163051176440.jpg"
    },
    {
      name: "我以灵魂注视你的心",
      artist: "贝拉Bella",
      url: "https://music.163.com/song/media/outer/url?id=2644233883.mp3",
      cover: "https://p2.music.126.net/_YYjbnsfskcNHzqNAhdgPA==/109951170141225814.jpg"
    },
    {
      name: "锁",
      artist: "黄龄",
      url: "https://music.163.com/song/media/outer/url?id=3361244871.mp3",
      cover: "https://p2.music.126.net/PNxwqDEgS43_awSTKJLQRA==/109951172935624321.jpg"
    },
    {
      name: "鼓動のリズム（把心跳变成节奏）",
      artist: "音街ウナ / 夢ノ結唱 HALO / 新星-shinsei / GUMI SV",
      url: "https://music.163.com/song/media/outer/url?id=3356681690.mp3",
      cover: "https://p2.music.126.net/UhvwBMFmiNyt0lp9VU1tuw==/109951172850906560.jpg"
    },
    {
      name: "铁花飞",
      artist: "Mili / 塞壬唱片-MSR",
      url: "https://music.163.com/song/media/outer/url?id=3342981041.mp3",
      cover: "https://p2.music.126.net/rs9Ym-GZsrLXh1WgPpMPDw==/109951172642955222.jpg"
    },
    {
      name: "无名策",
      artist: "塞壬唱片-MSR / 拾贰 12 / 黎明鑫（阿火） / Mi / 骅翎",
      url: "https://music.163.com/song/media/outer/url?id=3348083045.mp3",
      cover: "https://p2.music.126.net/9esQjYoU9mvbS0SsfBzUVA==/109951172717943358.jpg"
    },
    {
      name: "Under Tides",
      artist: "塞壬唱片-MSR",
      url: "https://music.163.com/song/media/outer/url?id=1891941284.mp3",
      cover: "https://p2.music.126.net/JUW2i-TUocGhdP9QeiNPVQ==/109951166583673403.jpg"
    },
    {
      name: "溯而复始",
      artist: "鸣潮先约电台 / Weijun Chen",
      url: "https://music.163.com/song/media/outer/url?id=2656833088.mp3",
      cover: "https://p2.music.126.net/Y8EQQmxUXKwpoZu12TAK-g==/109951170265286732.jpg"
    },
    {
      name: "洄游的帆",
      artist: "The 1999",
      url: "https://music.163.com/song/media/outer/url?id=2657785495.mp3",
      cover: "https://p2.music.126.net/olNLlo_CKH_K2vfdgoV31Q==/109951170278427234.jpg"
    },
    {
      name: "相别",
      artist: "The 1999",
      url: "https://music.163.com/song/media/outer/url?id=2629122902.mp3",
      cover: "https://p2.music.126.net/0k-L9pd2GDG_4bDwf1BopA==/109951169976967511.jpg"
    },
    {
      name: "赴大荒",
      artist: "塞壬唱片-MSR / Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=2124415181.mp3",
      cover: "https://p2.music.126.net/ryCmscVNLU0y4BEEQPhTyg==/109951169316167603.jpg"
    },
    {
      name: "浸春芜",
      artist: "塞壬唱片-MSR / 宋柏 / 十音 / 解伟苓",
      url: "https://music.163.com/song/media/outer/url?id=2122534120.mp3",
      cover: "https://p1.music.126.net/C7f7h50l9-bjqRx9sRsrQw==/109951169299656333.jpg"
    },
    {
      name: "乐园游梦记",
      artist: "三Z-STUDIO / HOYO-MiX / 于梓贝",
      url: "https://music.163.com/song/media/outer/url?id=2666660478.mp3",
      cover: "https://p1.music.126.net/5cqBvZaAFyb7lLWbicmyWA==/109951170383379551.jpg"
    },
    {
      name: "祀日歌",
      artist: "无期迷途",
      url: "https://music.163.com/song/media/outer/url?id=2128204373.mp3",
      cover: "https://p1.music.126.net/S5OOqE61uC8hHJsCi4JVZg==/109951169352412345.jpg"
    },
    {
      name: "共生",
      artist: "The 1999",
      url: "https://music.163.com/song/media/outer/url?id=2118754864.mp3",
      cover: "https://p1.music.126.net/JNTGmcdpeH71CglSKcXP8Q==/109951169266481595.jpg"
    },
    {
      name: "Redreaming Angel",
      artist: "熊子",
      url: "https://music.163.com/song/media/outer/url?id=3344425473.mp3",
      cover: "https://p1.music.126.net/4Iqaeem4DK5hfy6DcOwrSA==/109951172660779005.jpg"
    },
    {
      name: "ReDreaming Angel",
      artist: "三Z-STUDIO / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=3343287821.mp3",
      cover: "https://p1.music.126.net/TKe1FYdCt7qrQOsm8kVMjQ==/109951172646589896.jpg"
    },
    {
      name: "把心跳变成节奏",
      artist: "三Z-STUDIO / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=3344795940.mp3",
      cover: "https://p1.music.126.net/Hg7lGbQcYi4d_1joz8txcw==/109951172666553372.jpg"
    },
    {
      name: "あなたのチンコは何センチ？",
      artist: "Adult family",
      url: "https://music.163.com/song/media/outer/url?id=2615116162.mp3",
      cover: "https://p1.music.126.net/Lg0LH7DWiT6Yvsht-Wnacg==/109951169852010823.jpg"
    },
    {
      name: "乐鸣东方",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=3344327687.mp3",
      cover: "https://p1.music.126.net/swCoORAV0DMx_MJWDvcpjg==/109951172659790054.jpg"
    },
    {
      name: "MONEY ON THE DASH",
      artist: "Elley Duhé / Whethan",
      url: "https://music.163.com/song/media/outer/url?id=2000993445.mp3",
      cover: "https://p1.music.126.net/68JslX87rrHyxzERqL1gyA==/109951172035177823.jpg"
    },
    {
      name: "歌",
      artist: "洛天依 / 张卡斯",
      url: "https://music.163.com/song/media/outer/url?id=3340343419.mp3",
      cover: "https://p1.music.126.net/hXTJZSBO5bt1m1I6-X9pxw==/109951172607844328.jpg"
    },
    {
      name: "Operation Wild Scales",
      artist: "塞壬唱片-MSR / Gabe Reali / Kayraa",
      url: "https://music.163.com/song/media/outer/url?id=1893260973.mp3",
      cover: "https://p1.music.126.net/UasCbZdRSllAJEFdM1MXlg==/109951166599849338.jpg"
    },
    {
      name: "トリックハート (feat. 重音テト)",
      artist: "MIMI / 重音テト",
      url: "https://music.163.com/song/media/outer/url?id=3335544260.mp3",
      cover: "https://p1.music.126.net/NUubIjedOw3J071Fwjg_Wg==/109951172536903953.jpg"
    },
    {
      name: "I Can't Wait (feat. GUMI)",
      artist: "d0tc0mmie / GUMI",
      url: "https://music.163.com/song/media/outer/url?id=3326907142.mp3",
      cover: "https://p1.music.126.net/0GEf5ziQ8mG0HfRY8djyvg==/109951172408103691.jpg"
    },
    {
      name: "玉兰开花三月三",
      artist: "洛天依 / 乌龟Sui / 亚小琨",
      url: "https://music.163.com/song/media/outer/url?id=3325266889.mp3",
      cover: "https://p2.music.126.net/VKyykN7jSgTDVyY33HOaHA==/109951172388353900.jpg"
    },
    {
      name: "Wanna Know Me? (Too Bad)",
      artist: "塞壬唱片-MSR / Lyra Blue / Luke Shrestha / Simon Jay / Brooke Williams",
      url: "https://music.163.com/song/media/outer/url?id=3336875557.mp3",
      cover: "https://p2.music.126.net/6jWRB4-sI-hhvDmrd9Oivw==/109951172552688149.jpg"
    },
    {
      name: "生活倒影",
      artist: "纪知南",
      url: "https://music.163.com/song/media/outer/url?id=2049079516.mp3",
      cover: "https://p2.music.126.net/2_sFdkm-7D_FqSjxNuVr3g==/109951168626313818.jpg"
    },
    {
      name: "不想睡",
      artist: "周深",
      url: "https://music.163.com/song/media/outer/url?id=1453342107.mp3",
      cover: "https://p2.music.126.net/5ps6sZV7wq0OG1V2JjnuDA==/109951165040573781.jpg"
    },
    {
      name: "Shiny",
      artist: "明透",
      url: "https://music.163.com/song/media/outer/url?id=2626143591.mp3",
      cover: "https://p2.music.126.net/IF9dlQa_uNQ4EDgQ74BgqQ==/109951169952101171.jpg"
    },
    {
      name: "ドリームイーター (nakotanmaru ver.)",
      artist: "なこたんまる / PIKASONIC",
      url: "https://music.163.com/song/media/outer/url?id=2003904108.mp3",
      cover: "https://p2.music.126.net/6wIU0mH6s6Pg3tLm0yU-pg==/109951168114426991.jpg"
    },
    {
      name: "ダーリンダーリン (feat. 夏色花梨)",
      artist: "めろくる / 夏色花梨",
      url: "https://music.163.com/song/media/outer/url?id=2651143671.mp3",
      cover: "https://p2.music.126.net/qj3-F9LxbUrTBw54nVPl5Q==/109951170197213126.jpg"
    },
    {
      name: "中華料理屋の酢豚が食べたい",
      artist: "琳子",
      url: "https://music.163.com/song/media/outer/url?id=2645200678.mp3",
      cover: "https://p2.music.126.net/AfFx_DLuAnV8ctvw_ILqLw==/109951170138595918.jpg"
    },
    {
      name: "しるし",
      artist: "存流",
      url: "https://music.163.com/song/media/outer/url?id=2056111916.mp3",
      cover: "https://p2.music.126.net/I_Qd3DsH2ae_Fo99SUz6ww==/109951168680689998.jpg"
    },
    {
      name: "空中散歩",
      artist: "CIEL",
      url: "https://music.163.com/song/media/outer/url?id=2106445969.mp3",
      cover: "https://p2.music.126.net/IW85ZLxcqCL8pwrZ1a6Yag==/109951169143881986.jpg"
    },
    {
      name: "Binary Star",
      artist: "Uru / SawanoHiroyuki[nZk]",
      url: "https://music.163.com/song/media/outer/url?id=550137109.mp3",
      cover: "https://p2.music.126.net/ZB_2DgfcdOTEToISzacg0Q==/109951163265619424.jpg"
    },
    {
      name: "Ever be my love",
      artist: "山田タマル",
      url: "https://music.163.com/song/media/outer/url?id=489970554.mp3",
      cover: "https://p2.music.126.net/YGBBTaAlQnF1_k4savM8GA==/109951172350703267.jpg"
    },
    {
      name: "Everything's Alright",
      artist: "塞壬唱片-MSR / DJ Okawari / 澤田かおり",
      url: "https://music.163.com/song/media/outer/url?id=1460626792.mp3",
      cover: "https://p2.music.126.net/C_dc-WuRU4YKJREo4A2Wbw==/109951165115215198.jpg"
    },
    {
      name: "Your Star",
      artist: "塞壬唱片-MSR / DJ Okawari / Stephanie",
      url: "https://music.163.com/song/media/outer/url?id=1953860839.mp3",
      cover: "https://p2.music.126.net/4mq0-ILxPXkD9EyxLAP89Q==/109951167519653817.jpg"
    },
    {
      name: "Grown-up's Paradise",
      artist: "Mili / 塞壬唱片-MSR",
      url: "https://music.163.com/song/media/outer/url?id=2148397627.mp3",
      cover: "https://p2.music.126.net/Yzn8EXOs7HHBx-wlLOis8g==/109951169522142608.jpg"
    },
    {
      name: "Somniomancer [null set]",
      artist: "塞壬唱片-MSR / Crywolf",
      url: "https://music.163.com/song/media/outer/url?id=2700386313.mp3",
      cover: "https://p2.music.126.net/ggCZGLbtzSBr2SL2QS1opw==/109951170928386693.jpg"
    },
    {
      name: "月がない街 (feat. 初音ミク)",
      artist: "Guiano / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=1456654061.mp3",
      cover: "https://p1.music.126.net/L7bhBHhgJM0dcnjV11peUg==/109951168245013398.jpg"
    },
    {
      name: "アイラ",
      artist: "n-buna / GUMI",
      url: "https://music.163.com/song/media/outer/url?id=1825882588.mp3",
      cover: "https://p1.music.126.net/KZ5BuPdM6PBDH5kuVcuBeQ==/109951170026758166.jpg"
    },
    {
      name: "刹那、夏が終わっていく",
      artist: "こはならむ",
      url: "https://music.163.com/song/media/outer/url?id=2733685504.mp3",
      cover: "https://p1.music.126.net/08TU2041XzxVu3deem5KtA==/109951171783651557.jpg"
    },
    {
      name: "スピカ",
      artist: "ロクデナシ",
      url: "https://music.163.com/song/media/outer/url?id=2053002545.mp3",
      cover: "https://p1.music.126.net/iJgF27jpNs2WsqjOtZz4wg==/109951168658186614.jpg"
    },
    {
      name: "DAMIDAMI",
      artist: "Sihan / 三Z-STUDIO / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2755332551.mp3",
      cover: "https://p1.music.126.net/I3mbGo_JRv_dTIWK8S-mNQ==/109951172148710780.jpg"
    },
    {
      name: "逐光筑昼",
      artist: "鸣潮先约电台 / YUE.STEVEN / Mars Atlas",
      url: "https://music.163.com/song/media/outer/url?id=2754304984.mp3",
      cover: "https://p1.music.126.net/by1F-_BE9og-5Kl05nthBg==/109951172134008190.jpg"
    },
    {
      name: "nekomeshi-nachoneko(甘城なつき)",
      artist: "Nachoneko",
      url: "https://music.163.com/song/media/outer/url?id=2156237299.mp3",
      cover: "https://p1.music.126.net/518oszybrot65w2UvVkaZw==/109951169592310974.jpg"
    },
    {
      name: "Danse macabre, Op. 40",
      artist: "Concertgebouworkest / Charles Münch",
      url: "https://music.163.com/song/media/outer/url?id=27567113.mp3",
      cover: "https://p1.music.126.net/wDOC74UvQlGtl3X2Yx0VyA==/109951166095698843.jpg"
    },
    {
      name: "あいがたりない",
      artist: "バーチャルリアル / 中田ヤスタカ",
      url: "https://music.163.com/song/media/outer/url?id=1353387082.mp3",
      cover: "https://p1.music.126.net/YvK_lHu3dax2ptx-qycoWQ==/109951163942618614.jpg"
    },
    {
      name: "Give Me Something (for Arknights Endfield)",
      artist: "OneRepublic",
      url: "https://music.163.com/song/media/outer/url?id=3325884349.mp3",
      cover: "https://p1.music.126.net/8LoLitlzwtYMOskhFSA9mA==/109951172396624490.jpg"
    },
    {
      name: "WATER(Feat.Miku)",
      artist: "A-39 / 沙包P / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=1404469236.mp3",
      cover: "https://p1.music.126.net/PSAXSOdCwFL8WLjG4o3XKg==/109951164496021221.jpg"
    },
    {
      name: "Prover",
      artist: "milet",
      url: "https://music.163.com/song/media/outer/url?id=1417453306.mp3",
      cover: "https://p1.music.126.net/LQIsP04Rb1Y2nsL9wSIb1Q==/109951166202201852.jpg"
    },
    {
      name: "Drown",
      artist: "milet",
      url: "https://music.163.com/song/media/outer/url?id=1401456829.mp3",
      cover: "https://p1.music.126.net/BVeZjZer-pYBA26cayBffQ==/109951166203340907.jpg"
    },
    {
      name: "超度我",
      artist: "星粥Kayuu",
      url: "https://music.163.com/song/media/outer/url?id=2738000826.mp3",
      cover: "https://p1.music.126.net/mPh_2PpBoX95VGrp5VTQSA==/109951171899641588.jpg"
    },
    {
      name: "PR1NCESS (Explicit)",
      artist: "星粥Kayuu",
      url: "https://music.163.com/song/media/outer/url?id=2088967300.mp3",
      cover: "https://p1.music.126.net/vSimu9-zoDV7Boj1XWf2-A==/109951168971250143.jpg"
    },
    {
      name: "坠入霜星（中文版）",
      artist: "Ci茜 / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=2751265804.mp3",
      cover: "https://p1.music.126.net/UgplnBMIXcjJjCneKhR65w==/109951172084648582.jpg"
    },
    {
      name: "东京不太热(2024重调版)",
      artist: "鬼面P / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2657106104.mp3",
      cover: "https://p2.music.126.net/uccVkm6DN_WZXxACcPNR7A==/109951170268133935.jpg"
    },
    {
      name: "Need A Favor",
      artist: "Jelly Roll",
      url: "https://music.163.com/song/media/outer/url?id=2049537289.mp3",
      cover: "https://p2.music.126.net/BGRksxpnwa1f3N7HWKdwqw==/109951168631106565.jpg"
    },
    {
      name: "你的颜色",
      artist: "阳花 / 七禾",
      url: "https://music.163.com/song/media/outer/url?id=2663188019.mp3",
      cover: "https://p2.music.126.net/tt2DyI7OJklBtmxXprlFMw==/109951171398968620.jpg"
    },
    {
      name: "青涩稚气",
      artist: "阳花 / 甲鸟饼",
      url: "https://music.163.com/song/media/outer/url?id=2018745837.mp3",
      cover: "https://p2.music.126.net/xyie9Ov_G2HNSKwgkXCwJg==/109951168940088381.jpg"
    },
    {
      name: "东京不太热",
      artist: "Z新豪 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1478965386.mp3",
      cover: "https://p2.music.126.net/8Sk3EpucLC9e8KheMe_GcQ==/109951165315088091.jpg"
    },
    {
      name: "春风来",
      artist: "洛天依Official / 阿良良木健",
      url: "https://music.163.com/song/media/outer/url?id=480243094.mp3",
      cover: "https://p2.music.126.net/skhGLWHYKL3jGDOtGckEVA==/109951163696172355.jpg"
    },
    {
      name: "这样很好 (Isha's Song)",
      artist: "陈奕迅 / 双城之战 / 英雄联盟",
      url: "https://music.163.com/song/media/outer/url?id=2643800682.mp3",
      cover: "https://p2.music.126.net/grNgnyv_vi_cuHAj-LoMuA==/109951170123941948.jpg"
    },
    {
      name: "SnowMix♪ (feat. 初音ミク)",
      artist: "まらしぃ / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=2022368495.mp3",
      cover: "https://p2.music.126.net/RxYjQtYME2f5MJeeIbhzPg==/109951168636515798.jpg"
    },
    {
      name: "アイノシズク",
      artist: "KARAKURI 2039",
      url: "https://music.163.com/song/media/outer/url?id=1833317225.mp3",
      cover: "https://p2.music.126.net/LYt9HzVnudpjqRkctT7mrA==/109951165844643017.jpg"
    },
    {
      name: "太空漫步Space Walk(哈基米)",
      artist: "还给我神ID",
      url: "https://music.163.com/song/media/outer/url?id=2691668154.mp3",
      cover: "https://p2.music.126.net/k2jpujWOMUNDMHhO9esCFQ==/109951170694660959.jpg"
    },
    {
      name: "DROPS (feat. Such)",
      artist: "Such",
      url: "https://music.163.com/song/media/outer/url?id=1490109035.mp3",
      cover: "https://p2.music.126.net/9bYefScLsMai36D0pzQ7wg==/109951167107550389.jpg"
    },
    {
      name: "虚构义",
      artist: "MOCKER44. / 诗岸",
      url: "https://music.163.com/song/media/outer/url?id=2680109503.mp3",
      cover: "https://p2.music.126.net/YypSmQ2vrcGitNMwuEddYg==/109951170564383846.jpg"
    },
    {
      name: "花草野",
      artist: "MOCKER44. / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2722875094.mp3",
      cover: "https://p1.music.126.net/lnZfASKdBXsIep4XorG8_A==/109951171408616909.jpg"
    },
    {
      name: "心印 (Step on your heart)",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=29163136.mp3",
      cover: "https://p1.music.126.net/onGVqtThriNhvTjh_3xs8A==/3241360281420768.jpg"
    },
    {
      name: "水煮包子 (feat.洛天依)",
      artist: "QGRay / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2723148876.mp3",
      cover: "https://p1.music.126.net/t4lHbHC1Cywews8RH3tfBg==/109951171412587336.jpg"
    },
    {
      name: "喧哗上等 (feat. LuoTianyi)",
      artist: "硝酸生菜Synzak / LuoTianyi",
      url: "https://music.163.com/song/media/outer/url?id=2736124635.mp3",
      cover: "https://p1.music.126.net/o-ulsTIpwKQGe2mg8zyAPQ==/109951171863021903.jpg"
    },
    {
      name: "[主页有补档] 大展鸿图(初音ミク 重音テト ver.)",
      artist: "可愛いももP / 高梓华",
      url: "https://music.163.com/song/media/outer/url?id=2727758856.mp3",
      cover: "https://p1.music.126.net/Y6KRa5QIhPB7yvM5_wBxPA==/109951171491084391.jpg"
    },
    {
      name: "ヒロイン (nakotanmaru ver.)",
      artist: "なこたんまる / PIKASONIC",
      url: "https://music.163.com/song/media/outer/url?id=1979210461.mp3",
      cover: "https://p1.music.126.net/j05yQr1xC2KrKQtfkdpUxg==/109951167852490941.jpg"
    },
    {
      name: "无畏(洛天依版)",
      artist: "IRiS七叶 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2735249931.mp3",
      cover: "https://p1.music.126.net/PK5SX3Rv4jFVAjsAAfi64Q==/109951171837142156.jpg"
    },
    {
      name: "云底船（Feat.洛天依）",
      artist: "洛天依 / Atsuko / 林墨白citrum",
      url: "https://music.163.com/song/media/outer/url?id=2734680748.mp3",
      cover: "https://p1.music.126.net/DSQPayufnUFeUgB33FJ70Q==/109951171827100042.jpg"
    },
    {
      name: "夏感交响",
      artist: "阿良良木健 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2725071558.mp3",
      cover: "https://p1.music.126.net/yTyv5qzf2AlmOHyc7VTzdQ==/109951171448931273.jpg"
    },
    {
      name: "正传颂的未来",
      artist: "闹闹丶 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2726658009.mp3",
      cover: "https://p1.music.126.net/Cum1YXV2gJHhNMshNoRQrg==/109951171473097804.jpg"
    },
    {
      name: "弱虫モンブラン (Reloaded)",
      artist: "DECO*27 / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=2690153653.mp3",
      cover: "https://p1.music.126.net/pyGTcAixmOan8P_QTYMKJw==/109951170676296656.jpg"
    },
    {
      name: "moremoremore",
      artist: "中村さんそ",
      url: "https://music.163.com/song/media/outer/url?id=1840237913.mp3",
      cover: "https://p1.music.126.net/NmQw4g1fbkt91EJFLXNTsg==/109951165924052279.jpg"
    },
    {
      name: "if Love==True",
      artist: "心脏扭蛋",
      url: "https://music.163.com/song/media/outer/url?id=2628500541.mp3",
      cover: "https://p1.music.126.net/cznGtCOlhdH88KnfrBBJ2A==/109951169972778919.jpg"
    },
    {
      name: "NEVER (feat. Evil Neuro)",
      artist: "Neuro-sama / Evil Neuro",
      url: "https://music.163.com/song/media/outer/url?id=2741820314.mp3",
      cover: "https://p1.music.126.net/ONmG4O1D09-_k5OOna20ug==/109951171956425982.jpg"
    },
    {
      name: "桜色プリズム",
      artist: "Endorfin.",
      url: "https://music.163.com/song/media/outer/url?id=477992316.mp3",
      cover: "https://p1.music.126.net/eHZ6sQ6EGWKvZI2Kk2t_cQ==/18571850906674182.jpg"
    },
    {
      name: "CALL",
      artist: "ヰ世界情緒 / 春猿火",
      url: "https://music.163.com/song/media/outer/url?id=2106445921.mp3",
      cover: "https://p1.music.126.net/yTvbtyKLzCyctb-eJXMgiw==/109951169143882967.jpg"
    },
    {
      name: "ラストラス (feat. 初音ミク)",
      artist: "*Luna / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=2722447378.mp3",
      cover: "https://p1.music.126.net/e5Og5Cb2rxH3mz5tsiimvQ==/109951171402429439.jpg"
    },
    {
      name: "冻夏",
      artist: "Soda纯白 / 心华",
      url: "https://music.163.com/song/media/outer/url?id=1877233190.mp3",
      cover: "https://p1.music.126.net/Wo_UG_1S6AP7eggN22EKpQ==/109951166374041287.jpg"
    },
    {
      name: "追憶",
      artist: "V.W.P",
      url: "https://music.163.com/song/media/outer/url?id=2722023883.mp3",
      cover: "https://p1.music.126.net/MNsf49hZt6ztQzLCtOBLwQ==/109951171396676463.jpg"
    },
    {
      name: "零嘴玩具店与放学路",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=33682738.mp3",
      cover: "https://p1.music.126.net/2Rcimduy6Oj5Xz6beJDSIg==/3364505581118558.jpg"
    },
    {
      name: "Sunny Rain (feat. Shion)",
      artist: "Kirara Magic / Elvin Shen",
      url: "https://music.163.com/song/media/outer/url?id=2655014681.mp3",
      cover: "https://p1.music.126.net/GLm2M5HANutjFvsJb89s2w==/109951170241807963.jpg"
    },
    {
      name: "一人行者",
      artist: "心华",
      url: "https://music.163.com/song/media/outer/url?id=526116050.mp3",
      cover: "https://p1.music.126.net/oXrr2kdIzbnSvRZ4yhZjpg==/109951163299928556.jpg"
    },
    {
      name: "春日纪行",
      artist: "星葵77 / 溱绫西陌 / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=1440115777.mp3",
      cover: "https://p1.music.126.net/pDdQoL5BkbtgIhp6Um7R5w==/109951164900780118.jpg"
    },
    {
      name: "天天天国地獄国 (feat. ななひら & P丸様。) Extended Mix",
      artist: "Aiobahn +81 / ななひら / P丸様。",
      url: "https://music.163.com/song/media/outer/url?id=2668056314.mp3",
      cover: "https://p1.music.126.net/8d6xvUjjtTKmoiQhbyYDrw==/109951170410073756.jpg"
    },
    {
      name: "极光尽头",
      artist: "WOVOP / ZClear / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2715181994.mp3",
      cover: "https://p1.music.126.net/00jS82BJ0wfiPrjvOOuzzA==/109951171301848969.jpg"
    },
    {
      name: "廉价",
      artist: "海鲜面 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2725535684.mp3",
      cover: "https://p1.music.126.net/2x7mue_zhEZ9QAPERv36fw==/109951171456772402.jpg"
    },
    {
      name: "● ◖☾众 生 的☽◗ ●",
      artist: "こいずみ桃黎 / 诗岸",
      url: "https://music.163.com/song/media/outer/url?id=2720619553.mp3",
      cover: "https://p1.music.126.net/VAouzCYencuBlrXRxBJU2w==/109951171374889833.jpg"
    },
    {
      name: "オレンジ",
      artist: "seven oops",
      url: "https://music.163.com/song/media/outer/url?id=30496836.mp3",
      cover: "https://p1.music.126.net/HD3_u-G87OLIgXjGlHE9gA==/2537672839932536.jpg"
    },
    {
      name: "脑壳疼",
      artist: "洛天依 / ilem",
      url: "https://music.163.com/song/media/outer/url?id=2716916349.mp3",
      cover: "https://p1.music.126.net/S3bFYANojV2xVwPDx-Qb0g==/109951171328148594.jpg"
    },
    {
      name: "革命道中 - On The Way",
      artist: "アイナ・ジ・エンド",
      url: "https://music.163.com/song/media/outer/url?id=2719303315.mp3",
      cover: "https://p1.music.126.net/O678zp7D_41I3Zf9wkaK_A==/109951171358109061.jpg"
    },
    {
      name: "歌行四方 (Live)",
      artist: "龚琳娜 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2647567583.mp3",
      cover: "https://p1.music.126.net/0ju8ET1ApZSXfWacc4w49w==/109951169484091680.jpg"
    },
    {
      name: "石头歌",
      artist: "三无Marblue",
      url: "https://music.163.com/song/media/outer/url?id=1869411855.mp3",
      cover: "https://p1.music.126.net/p7gcA3P_iGfq-yaG8NAHyQ==/109951167420757780.jpg"
    },
    {
      name: "阴阳·先生",
      artist: "洛天依Official / 四爺 / 鸾音鹤信",
      url: "https://music.163.com/song/media/outer/url?id=2599491809.mp3",
      cover: "https://p1.music.126.net/N_JnwW1EAKraRevigibYuw==/109951169694441427.jpg"
    },
    {
      name: "情绪未响应",
      artist: "夜踊Yoodori / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2661119343.mp3",
      cover: "https://p1.music.126.net/wOZSYhz0fjzk0rNuJjU3Dw==/109951171416801479.jpg"
    },
    {
      name: "Zipper",
      artist: "高野健一 / 牧野由依",
      url: "https://music.163.com/song/media/outer/url?id=22679280.mp3",
      cover: "https://p2.music.126.net/GYCmU6yTvXSzEyUbMcv_nA==/109951169299076834.jpg"
    },
    {
      name: "哥。",
      artist: "黒猫 / 天使盐",
      url: "https://music.163.com/song/media/outer/url?id=2676058496.mp3",
      cover: "https://p2.music.126.net/WJ5iOzTATHkscMYIWyLkKQ==/109951170493501142.jpg"
    },
    {
      name: "只筝朝夕",
      artist: "洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2150895252.mp3",
      cover: "https://p2.music.126.net/seJgnwyHnWRSGP7Ij_0cKw==/109951169542047517.jpg"
    },
    {
      name: "下等马",
      artist: "ChiliChill乐团",
      url: "https://music.163.com/song/media/outer/url?id=2709782062.mp3",
      cover: "https://p2.music.126.net/TPJ5f1o6WaWzKwHD1hJ19Q==/109951171126463467.jpg"
    },
    {
      name: "バスタイムプラネタリウム",
      artist: "HACHI",
      url: "https://music.163.com/song/media/outer/url?id=1958148483.mp3",
      cover: "https://p2.music.126.net/GiVWNrvby_7BM0LEvs9jRw==/109951167578552129.jpg"
    },
    {
      name: "抽空恋爱",
      artist: "小野道ono / 泠鸢yousa / LLABB",
      url: "https://music.163.com/song/media/outer/url?id=2674832671.mp3",
      cover: "https://p2.music.126.net/XvLmrYdm80JVYZbM_ILOLA==/109951170480459515.jpg"
    },
    {
      name: "Lulala! Lululala!  ",
      artist: "鸣潮先约电台 / 辻詩音",
      url: "https://music.163.com/song/media/outer/url?id=2708107202.mp3",
      cover: "https://p2.music.126.net/80jmHbWEyCFQkeT2L34BLg==/109951171020818744.jpg"
    },
    {
      name: "都市不丽人",
      artist: "ChiliChill乐团",
      url: "https://music.163.com/song/media/outer/url?id=2706298516.mp3",
      cover: "https://p2.music.126.net/hqVI9yC3u5FOnYBvnQzijw==/109951170999747113.jpg"
    },
    {
      name: "下等马",
      artist: "洛天依Official / ChiliChill乐团",
      url: "https://music.163.com/song/media/outer/url?id=2709782550.mp3",
      cover: "https://p2.music.126.net/cVnYnnHwjXj9xN5ymz6dsw==/109951172051500248.jpg"
    },
    {
      name: "莫愁乡",
      artist: "亞細亞曠世奇才",
      url: "https://music.163.com/song/media/outer/url?id=2711834126.mp3",
      cover: "https://p2.music.126.net/DVi9B70oYVFtDxVqZf_56g==/109951171264259694.jpg"
    },
    {
      name: "SHINY DAYS",
      artist: "亜咲花",
      url: "https://music.163.com/song/media/outer/url?id=530995169.mp3",
      cover: "https://p2.music.126.net/xEjmbNpUDNRzdJx5ZwFnlQ==/109951173099002008.jpg"
    },
    {
      name: "星くずのうた",
      artist: "Guiano",
      url: "https://music.163.com/song/media/outer/url?id=2639634957.mp3",
      cover: "https://p2.music.126.net/y2IzgXRk2avCkt5hPQ3Hcg==/109951170070194322.jpg"
    },
    {
      name: "Oi",
      artist: "阿良良木健 / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2693474798.mp3",
      cover: "https://p2.music.126.net/CQ8REIPFGi9iSfX4Xs7gtQ==/109951170712163082.jpg"
    },
    {
      name: "Secret of my heart",
      artist: "棗いつき",
      url: "https://music.163.com/song/media/outer/url?id=2096117360.mp3",
      cover: "https://p1.music.126.net/P5qpLMOFPAeCt2XR1PRBgQ==/109951169026528314.jpg"
    },
    {
      name: "夏の日の午後",
      artist: "岡村孝子",
      url: "https://music.163.com/song/media/outer/url?id=636851.mp3",
      cover: "https://p1.music.126.net/-l7DTBT5ks2lij_tIsseww==/826832744087764.jpg"
    },
    {
      name: "帝江",
      artist: "嘉然Diana",
      url: "https://music.163.com/song/media/outer/url?id=2611216404.mp3",
      cover: "https://p1.music.126.net/YXa1EW45sBbiYOOyiweLFw==/109951169815042550.jpg"
    },
    {
      name: "又一遍的歌 (feat.永雏塔菲)",
      artist: "电音联盟 / 音波狂潮 / TSAR / 永雏塔菲",
      url: "https://music.163.com/song/media/outer/url?id=2140308797.mp3",
      cover: "https://p1.music.126.net/8gpfEoo1H1N-Zoxu5rYSpg==/109951169450652137.jpg"
    },
    {
      name: "赤く染まる",
      artist: "ヒバナ",
      url: "https://music.163.com/song/media/outer/url?id=2049215899.mp3",
      cover: "https://p1.music.126.net/gO8k2QzDnuLxw1y9ukweRA==/109951168627900724.jpg"
    },
    {
      name: "听见WO!",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2705381280.mp3",
      cover: "https://p1.music.126.net/GO6ICgAzHEJFGl4_Tw2_Gw==/109951170987540411.jpg"
    },
    {
      name: "Arsonist",
      artist: "塞壬唱片-MSR / David Lin / X. ARI / Substantial",
      url: "https://music.163.com/song/media/outer/url?id=2151202025.mp3",
      cover: "https://p1.music.126.net/_P0IyDicInS8zf6IUgH8Ag==/109951169546293232.jpg"
    },
    {
      name: "starlight",
      artist: "Tsuyoshi A. / ねんね",
      url: "https://music.163.com/song/media/outer/url?id=2026053134.mp3",
      cover: "https://p1.music.126.net/5G6oj4EoE7WHwxfWxzLhvQ==/109951168430137013.jpg"
    },
    {
      name: "Isekai Phonk",
      artist: "Gaiyu",
      url: "https://music.163.com/song/media/outer/url?id=2093751787.mp3",
      cover: "https://p1.music.126.net/r0Aq9-5PfVWmDYZzPCdJDA==/109951169006947651.jpg"
    },
    {
      name: "愛の賞味期限 - Love Expiration Date",
      artist: "tuki.",
      url: "https://music.163.com/song/media/outer/url?id=2159026484.mp3",
      cover: "https://p1.music.126.net/vw6MnFd8_Uejb01dNPJmJQ==/109951169617876414.jpg"
    },
    {
      name: "Water Baby",
      artist: "CROONERZ",
      url: "https://music.163.com/song/media/outer/url?id=1939451322.mp3",
      cover: "https://p1.music.126.net/YPN8wG0Yp7X4Dmkz79Twxg==/109951167312535768.jpg"
    },
    {
      name: "いつもシミュレーション",
      artist: "Guiano / 理芽",
      url: "https://music.163.com/song/media/outer/url?id=2082330821.mp3",
      cover: "https://p1.music.126.net/k6sJsG30rdYmRkfN8Z6lZA==/109951168916555109.jpg"
    },
    {
      name: "FOCUS",
      artist: "KIRA",
      url: "https://music.163.com/song/media/outer/url?id=2667169196.mp3",
      cover: "https://p1.music.126.net/iHXjF_OIKdpz956xne1fKA==/109951170391181006.jpg"
    },
    {
      name: "Heiwa Sanka",
      artist: "Autodidactic Studios / Lappy / Diana Garnet",
      url: "https://music.163.com/song/media/outer/url?id=2067567223.mp3",
      cover: "https://p1.music.126.net/m7rbqbnh85iy9BS1aoyxUQ==/109951168826978514.jpg"
    },
    {
      name: "Ash Again",
      artist: "Gawr Gura / Casey Edwards",
      url: "https://music.163.com/song/media/outer/url?id=2699311438.mp3",
      cover: "https://p1.music.126.net/Zegf9i4d2ojWuM9WjVfRiQ==/109951171353542941.jpg"
    },
    {
      name: "Target for Love(gura)",
      artist: "歌舞伎町 / Gawr Gura",
      url: "https://music.163.com/song/media/outer/url?id=2109150730.mp3",
      cover: "https://p1.music.126.net/jFMaU7GrCk5ItSqbISAaAg==/109951169167065292.jpg"
    },
    {
      name: "Twilight Line",
      artist: "HACHI",
      url: "https://music.163.com/song/media/outer/url?id=1968285421.mp3",
      cover: "https://p1.music.126.net/4FYYiIFw34ecRxEJ0IaCxQ==/109951167730618576.jpg"
    },
    {
      name: "I can't stop loving you (feat. 野田愛実)",
      artist: "高瀬統也 / 野田愛実",
      url: "https://music.163.com/song/media/outer/url?id=2001188685.mp3",
      cover: "https://p1.music.126.net/YNQ9iJ7nMkaN9NPU2U3uWA==/109951168086044614.jpg"
    },
    {
      name: "Goodbyes",
      artist: "Celeina Ann / Foux",
      url: "https://music.163.com/song/media/outer/url?id=2117411377.mp3",
      cover: "https://p1.music.126.net/HNolMGRqBJaes4w70H53mA==/109951169260122359.jpg"
    },
    {
      name: "Oopsie Daisy",
      artist: "JubyPhonic",
      url: "https://music.163.com/song/media/outer/url?id=2154800192.mp3",
      cover: "https://p1.music.126.net/PV1aU6w6X7rPBNnJvsLatQ==/109951169580594005.jpg"
    },
    {
      name: "Heavenly Me",
      artist: "AIYUE / 理名 / 塞壬唱片-MSR",
      url: "https://music.163.com/song/media/outer/url?id=2699629221.mp3",
      cover: "https://p1.music.126.net/EYHIR90JuXJNL6Vq3qDrGA==/109951170918941392.jpg"
    },
    {
      name: "エンドレスライン",
      artist: "REOL",
      url: "https://music.163.com/song/media/outer/url?id=511921874.mp3",
      cover: "https://p1.music.126.net/sg-FYNI0D3Z3U1G4zOfJ0g==/109951163041207861.jpg"
    },
    {
      name: "戏游九州【泠鸢】",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2666021256.mp3",
      cover: "https://p2.music.126.net/Socvp1OjvoEUfK2eNtFRzw==/109951169294327359.jpg"
    },
    {
      name: "隙",
      artist: "ゆーり",
      url: "https://music.163.com/song/media/outer/url?id=2683983843.mp3",
      cover: "https://p2.music.126.net/vTwlLKvx0PP-NDu6FSXZMg==/109951170606083718.jpg"
    },
    {
      name: "さらば春",
      artist: "朱彦安 / 夏野Natsuno",
      url: "https://music.163.com/song/media/outer/url?id=2689592505.mp3",
      cover: "https://p2.music.126.net/jnCFxHcbHAF9jiDagk6I7A==/109951170669139295.jpg"
    },
    {
      name: "はぐ (feat. 初音ミク & 可不)",
      artist: "MIMI / 初音ミク / 可不",
      url: "https://music.163.com/song/media/outer/url?id=2097828677.mp3",
      cover: "https://p2.music.126.net/qGHVqCaUIouwCae5Err_rA==/109951169040658053.jpg"
    },
    {
      name: "ギジコイ",
      artist: "浜野はるき",
      url: "https://music.163.com/song/media/outer/url?id=2166454666.mp3",
      cover: "https://p2.music.126.net/sVE3f6MVfOv7q13GMb8Xgg==/109951169685744535.jpg"
    },
    {
      name: "Unbreakable",
      artist: "PIKASONIC",
      url: "https://music.163.com/song/media/outer/url?id=2651711771.mp3",
      cover: "https://p2.music.126.net/L0KudI8d2TTKVeR9RPG6sA==/109951170203889285.jpg"
    },
    {
      name: "あの光だってきっと",
      artist: "*Luna",
      url: "https://music.163.com/song/media/outer/url?id=2098473419.mp3",
      cover: "https://p2.music.126.net/kqhHyHvG0ZpHcq1_YdjBVQ==/109951172414730999.jpg"
    },
    {
      name: "ハローセカイ",
      artist: "DECO*27 / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=2671547198.mp3",
      cover: "https://p2.music.126.net/jfE-yGmHZ4_a5iXY07uC1A==/109951170447726775.jpg"
    },
    {
      name: "Goodbye To The Sunset",
      artist: "JEReka",
      url: "https://music.163.com/song/media/outer/url?id=2160259235.mp3",
      cover: "https://p2.music.126.net/hCArm00E2obEF-SvRDRLcg==/109951169985834089.jpg"
    },
    {
      name: "Don't stop me lyrics",
      artist: "高瀬統也",
      url: "https://music.163.com/song/media/outer/url?id=2001187830.mp3",
      cover: "https://p2.music.126.net/YNQ9iJ7nMkaN9NPU2U3uWA==/109951168086044614.jpg"
    },
    {
      name: "NIGHTINGALE",
      artist: "NAQT VANE",
      url: "https://music.163.com/song/media/outer/url?id=2093235155.mp3",
      cover: "https://p1.music.126.net/yj-OWmA4A0OqasIsTaqwWg==/109951169003257273.jpg"
    },
    {
      name: "Happier Now",
      artist: "SadBois / Gabriel Eli",
      url: "https://music.163.com/song/media/outer/url?id=2630404038.mp3",
      cover: "https://p1.music.126.net/jPm2e22wsqd7FadPKN__Sg==/109951169988466752.jpg"
    },
    {
      name: "ひとりじゃないんだ",
      artist: "こはならむ",
      url: "https://music.163.com/song/media/outer/url?id=2147142321.mp3",
      cover: "https://p1.music.126.net/Ys5mpaQ0oQfcBYQ7pyPk8g==/109951169507960828.jpg"
    },
    {
      name: "Sincerely",
      artist: "TRUE",
      url: "https://music.163.com/song/media/outer/url?id=534065323.mp3",
      cover: "https://p1.music.126.net/hG0w6oJIf-ybewGk3wcuOg==/109951168980496900.jpg"
    },
    {
      name: "死にたいと言ってくれ。",
      artist: "十五少女",
      url: "https://music.163.com/song/media/outer/url?id=1872369793.mp3",
      cover: "https://p1.music.126.net/6H6zb_Zv3Ysz34BMM5g5Mw==/109951166317145924.jpg"
    },
    {
      name: "もしも",
      artist: "ナナツカゼ / PIKASONIC / Dankidz",
      url: "https://music.163.com/song/media/outer/url?id=2102257032.mp3",
      cover: "https://p1.music.126.net/zIOQn5JMaaDGICkfF9v_xQ==/109951169073575230.jpg"
    },
    {
      name: "Evanescent (feat. SOLARIA)",
      artist: "AIKA / SOLARIA",
      url: "https://music.163.com/song/media/outer/url?id=2646850280.mp3",
      cover: "https://p1.music.126.net/ujxepFzylIzatClW9-Vu6g==/109951170154683189.jpg"
    },
    {
      name: "caramel ribbon cursetard",
      artist: "花澤香菜 / 早見沙織",
      url: "https://music.163.com/song/media/outer/url?id=2673185318.mp3",
      cover: "https://p1.music.126.net/eJfzgaDjHrzaBEYWqp8zFw==/109951170464359836.jpg"
    },
    {
      name: "Beautiful Mess",
      artist: "NAQT VANE",
      url: "https://music.163.com/song/media/outer/url?id=2069000028.mp3",
      cover: "https://p2.music.126.net/J0IacPohR1qbp7Q6YenV2g==/109951168789058207.jpg"
    },
    {
      name: "連翹の花弁に綴る (feat. Mikade)",
      artist: "缶缶 / Mikade",
      url: "https://music.163.com/song/media/outer/url?id=2613461014.mp3",
      cover: "https://p2.music.126.net/fRafnmRnozeM7EaaCR3MSQ==/109951169836364524.jpg"
    },
    {
      name: "Horizon Dreamer",
      artist: "三浦大知",
      url: "https://music.163.com/song/media/outer/url?id=2630258193.mp3",
      cover: "https://p2.music.126.net/s-0meY9Kpvu_aRwYEfguBg==/109951169987220789.jpg"
    },
    {
      name: "mumei",
      artist: "七詩ムメイ / TKN",
      url: "https://music.163.com/song/media/outer/url?id=2122584352.mp3",
      cover: "https://p2.music.126.net/UBhF6KInqTjv1q_lZJny5w==/109951169300038405.jpg"
    },
    {
      name: "衝動 (feat. 棗いつき)",
      artist: "Room97 / 棗いつき",
      url: "https://music.163.com/song/media/outer/url?id=1490383431.mp3",
      cover: "https://p2.music.126.net/y06egeF4s24J5_BroqiBAQ==/109951172685438010.jpg"
    },
    {
      name: "愛♡スクリ～ム！",
      artist: "AiScReam",
      url: "https://music.163.com/song/media/outer/url?id=2657083161.mp3",
      cover: "https://p2.music.126.net/mDVeyX3-HV9EWykDBVrgNw==/109951170267896376.jpg"
    },
    {
      name: "ONE",
      artist: "Aimer",
      url: "https://music.163.com/song/media/outer/url?id=512100106.mp3",
      cover: "https://p2.music.126.net/MBkoU3iPeJXCXGCwsfvgJg==/109951163040580465.jpg"
    },
    {
      name: "猛独が襲う - STUDY WITH MIKU ver. -",
      artist: "STUDY WITH MIKU",
      url: "https://music.163.com/song/media/outer/url?id=2053344480.mp3",
      cover: "https://p2.music.126.net/hHyOhOXV1PsqW_1NyBHddg==/109951168661087817.jpg"
    },
    {
      name: "Daisy Crown",
      artist: "Empty old City / Wuthering Waves",
      url: "https://music.163.com/song/media/outer/url?id=2676687608.mp3",
      cover: "https://p2.music.126.net/J0ZfqWmqX3zGJLzTubJ7vg==/109951170498554226.jpg"
    },
    {
      name: "あの夏のいつかは (2023 Ver.)",
      artist: "*Luna / ねんね",
      url: "https://music.163.com/song/media/outer/url?id=2601920258.mp3",
      cover: "https://p2.music.126.net/HHtn1KtN2iHdXKOWKayRbw==/109951172414680579.jpg"
    },
    {
      name: "色彩",
      artist: "りりあ。",
      url: "https://music.163.com/song/media/outer/url?id=1946489557.mp3",
      cover: "https://p2.music.126.net/WzxXR4Hau13_VMOUayUcTA==/109951167402185804.jpg"
    },
    {
      name: "サンダーソニア",
      artist: "PIKASONIC / iMeiden / 小花依ある",
      url: "https://music.163.com/song/media/outer/url?id=2667221984.mp3",
      cover: "https://p1.music.126.net/yMz_y7AzHSmIuBYE_e_eZA==/109951170392812762.jpg"
    },
    {
      name: "アメリ",
      artist: "ヒバナ",
      url: "https://music.163.com/song/media/outer/url?id=2663777715.mp3",
      cover: "https://p1.music.126.net/BVv0jT7fCodbMl9q0xup-g==/109951170356640269.jpg"
    },
    {
      name: "Energy",
      artist: "Zach Sorgen",
      url: "https://music.163.com/song/media/outer/url?id=2126105366.mp3",
      cover: "https://p1.music.126.net/nukrcGAYX83Zn4v7bxI3yw==/109951169333451486.jpg"
    },
    {
      name: "去时枝",
      artist: "沉林川 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2643108503.mp3",
      cover: "https://p1.music.126.net/NFBjxPOIPCGBv1O10icIiQ==/109951170117639434.jpg"
    },
    {
      name: "一片",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=2133876885.mp3",
      cover: "https://p1.music.126.net/S4Hq72ix9YnPN3BG2NJAiQ==/109951169397306474.jpg"
    },
    {
      name: "ダイダイダイダイダイキライ（超级超级超级讨厌）",
      artist: "酒酒井Anri",
      url: "https://music.163.com/song/media/outer/url?id=2691016033.mp3",
      cover: "https://p1.music.126.net/aFT3_UgzssLPCjM_MzyW8A==/109951170475695707.jpg"
    },
    {
      name: "落日余歌-启程之诗",
      artist: "泠鸢yousa / 祈Inory / 括号君 / 司夏 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=32922593.mp3",
      cover: "https://p1.music.126.net/4M5tfCq6vtvo5gTn2XpQUw==/6052811511358611.jpg"
    },
    {
      name: "落日余歌",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1804552407.mp3",
      cover: "https://p1.music.126.net/vZQ6fdcFVjhUJB96BaEnwg==/109951165543194247.jpg"
    },
    {
      name: "ユリイカ",
      artist: "ロクデナシ",
      url: "https://music.163.com/song/media/outer/url?id=2141328400.mp3",
      cover: "https://p1.music.126.net/ItM5-DoFP8ONl-0ZC1i95Q==/109951169459830197.jpg"
    },
    {
      name: "ハナタバ",
      artist: "MIMI / 可不",
      url: "https://music.163.com/song/media/outer/url?id=1999253939.mp3",
      cover: "https://p1.music.126.net/rGRfS1wSBcQcrN2F7bY4tw==/109951168067420441.jpg"
    },
    {
      name: "TOUCH",
      artist: "NAQT VANE",
      url: "https://music.163.com/song/media/outer/url?id=2002392556.mp3",
      cover: "https://p1.music.126.net/Y_tQBwiNBscG9Tk-Vx-6HA==/109951168099454507.jpg"
    },
    {
      name: "PARKOUR",
      artist: "りりあ。 / 澤野弘之",
      url: "https://music.163.com/song/media/outer/url?id=1946489529.mp3",
      cover: "https://p1.music.126.net/WzxXR4Hau13_VMOUayUcTA==/109951167402185804.jpg"
    },
    {
      name: "さよーならまたいつか！",
      artist: "明透",
      url: "https://music.163.com/song/media/outer/url?id=2615049429.mp3",
      cover: "https://p1.music.126.net/OAKE2bmSfTgUhqhYM3F-xw==/109951169851446959.jpg"
    },
    {
      name: "Miracle",
      artist: "RENO / picco / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=1338149836.mp3",
      cover: "https://p1.music.126.net/MuNhJgnOH8Q_FcmaWtYOdg==/109951171362482863.jpg"
    },
    {
      name: "ビー玉",
      artist: "HACHI",
      url: "https://music.163.com/song/media/outer/url?id=2067064660.mp3",
      cover: "https://p1.music.126.net/gV3GNl_4wk4GfzgxrLEAFA==/109951168763893211.jpg"
    },
    {
      name: "游春",
      artist: "MOCKER44. / CTY2P / 洛天依 / SADRECORDS",
      url: "https://music.163.com/song/media/outer/url?id=2674713915.mp3",
      cover: "https://p1.music.126.net/L7sAyPgD9cq-rHQYFjTU-Q==/109951170479423875.jpg"
    },
    {
      name: "この世界は美しい",
      artist: "花譜",
      url: "https://music.163.com/song/media/outer/url?id=2657782739.mp3",
      cover: "https://p1.music.126.net/j7yHPgb1eulEtwXsgjwr7A==/109951170278403888.jpg"
    },
    {
      name: "Henceforth",
      artist: "高松燈",
      url: "https://music.163.com/song/media/outer/url?id=2139049988.mp3",
      cover: "https://p1.music.126.net/3DmcOS6eA6yXFS3HxLprJA==/109951169441137472.jpg"
    },
    {
      name: "八月の蛍",
      artist: "HACHI",
      url: "https://music.163.com/song/media/outer/url?id=1871484393.mp3",
      cover: "https://p1.music.126.net/e7ndQuNnuu0cssOgt9rO9A==/109951166306613036.jpg"
    },
    {
      name: "想風",
      artist: "大原ゆい子",
      url: "https://music.163.com/song/media/outer/url?id=2096104620.mp3",
      cover: "https://p1.music.126.net/YvEQpibT0oElT2tOdHuRxw==/109951169026437776.jpg"
    },
    {
      name: "ツノ",
      artist: "うじたまい / 40mP",
      url: "https://music.163.com/song/media/outer/url?id=1880275338.mp3",
      cover: "https://p1.music.126.net/b6SFrc6Mfp_MaUdEK-JwyQ==/109951166445226788.jpg"
    },
    {
      name: "白夢の繭 ~Ricordando il passato~",
      artist: "志方あきこ",
      url: "https://music.163.com/song/media/outer/url?id=642618.mp3",
      cover: "https://p1.music.126.net/pHpWveeHFVNmLCyRcoC_bA==/816937139437779.jpg"
    },
    {
      name: "青鸟衔风",
      artist: "三无Marblue / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1409838411.mp3",
      cover: "https://p1.music.126.net/q99ycKptuHR4bRsiLAcjSQ==/109951163947231620.jpg"
    },
    {
      name: "青鸟衔风",
      artist: "忘川风华录 / 海伊 / 诗岸",
      url: "https://music.163.com/song/media/outer/url?id=1409603530.mp3",
      cover: "https://p1.music.126.net/6RTJ-_vz940nEdAkiyVhkQ==/109951164549136938.jpg"
    },
    {
      name: "平成レトロ",
      artist: "平葵",
      url: "https://music.163.com/song/media/outer/url?id=1834794252.mp3",
      cover: "https://p1.music.126.net/uLvcicANkBQB2vGkJxjBCQ==/109951165861131115.jpg"
    },
    {
      name: "Rewrite",
      artist: "milet",
      url: "https://music.163.com/song/media/outer/url?id=1388137930.mp3",
      cover: "https://p1.music.126.net/MburAdHMbmY2T9Ve7K8wdA==/109951168161558843.jpg"
    },
    {
      name: "すすすす、すき、だあいすき",
      artist: "山根万理奈",
      url: "https://music.163.com/song/media/outer/url?id=676204.mp3",
      cover: "https://p2.music.126.net/DBsUGFu6SysE2HUtDKYZDQ==/797145930137888.jpg"
    },
    {
      name: "花束",
      artist: "ヒバナ",
      url: "https://music.163.com/song/media/outer/url?id=2119296625.mp3",
      cover: "https://p2.music.126.net/8QxM7N3ENI6KQDScjiEQyA==/109951169274350997.jpg"
    },
    {
      name: "箱庭のコラル (feat. 草薙寧々)",
      artist: "草薙寧々",
      url: "https://music.163.com/song/media/outer/url?id=2641881847.mp3",
      cover: "https://p2.music.126.net/e8VC5hbv6QaD7P-VG6sI6w==/109951170099937999.jpg"
    },
    {
      name: "Rainy proof",
      artist: "HACHI",
      url: "https://music.163.com/song/media/outer/url?id=1829811265.mp3",
      cover: "https://p2.music.126.net/IgEk93D5NgesQbxl3Zlo9g==/109951165808911480.jpg"
    },
    {
      name: "Ghost feat.ねんね(Dotnoi Remix)",
      artist: "*Luna / ねんね / Dotnoi",
      url: "https://music.163.com/song/media/outer/url?id=2156452103.mp3",
      cover: "https://p2.music.126.net/endoqnjVdh8VGI3AkkAA7g==/109951172414753106.jpg"
    },
    {
      name: "ワタシノミカタ (feat. Hanon & Kotoha)",
      artist: "HoneyWorks / Kotoha / Hanon",
      url: "https://music.163.com/song/media/outer/url?id=1501478613.mp3",
      cover: "https://p2.music.126.net/YKFRJGQs4E555K0kpj5y5Q==/109951167066176298.jpg"
    },
    {
      name: "ginger snaps",
      artist: "鎖那",
      url: "https://music.163.com/song/media/outer/url?id=509098948.mp3",
      cover: "https://p2.music.126.net/McwYbq8c2e9uugG51Rm-Jg==/109951166222733663.jpg"
    },
    {
      name: "僕らのアイデンティティ",
      artist: "ナナツカゼ",
      url: "https://music.163.com/song/media/outer/url?id=2668305074.mp3",
      cover: "https://p1.music.126.net/NmxPpbAgVJ5pZWy0E3piUg==/109951170412647515.jpg"
    },
    {
      name: "アンノウン・マザーグース -in the case of Lezel-",
      artist: "Lezel",
      url: "https://music.163.com/song/media/outer/url?id=2141196482.mp3",
      cover: "https://p1.music.126.net/PKV7S305oYEWD6FV_y_4Mg==/109951169458645098.jpg"
    },
    {
      name: "Tell me",
      artist: "milet",
      url: "https://music.163.com/song/media/outer/url?id=1420533652.mp3",
      cover: "https://p1.music.126.net/LQIsP04Rb1Y2nsL9wSIb1Q==/109951166202201852.jpg"
    },
    {
      name: "いつも二人がいいね（TVサイズ）",
      artist: "小野友樹 / 中原麻衣",
      url: "https://music.163.com/song/media/outer/url?id=2604586573.mp3",
      cover: "https://p1.music.126.net/tQ5zCIfyEJj0LTrJGE6Zww==/109951169746403239.jpg"
    },
    {
      name: "Duality (feat. Hatsune Miku)",
      artist: "Mwk / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=1924750435.mp3",
      cover: "https://p1.music.126.net/gPUHIizbbauL5SsINbWWKw==/109951172007097820.jpg"
    },
    {
      name: "ねぇねぇねぇ。",
      artist: "ピノキオピー / 鏡音リン / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=1859603835.mp3",
      cover: "https://p1.music.126.net/ScwYuq88dnahampgDQ9Hxw==/109951166158713797.jpg"
    },
    {
      name: "アイモライモ - Aimoraimo",
      artist: "tuki.",
      url: "https://music.163.com/song/media/outer/url?id=2637321719.mp3",
      cover: "https://p1.music.126.net/H9KzRcsR3Vhdnr3pJmMMGQ==/109951170050234913.jpg"
    },
    {
      name: "ロンリーユニバース",
      artist: "Aqu3ra / 初音ミク / v flower",
      url: "https://music.163.com/song/media/outer/url?id=1994784185.mp3",
      cover: "https://p1.music.126.net/1-_audJIUAV6ikNrG2KUYA==/109951168023755173.jpg"
    },
    {
      name: "Shizuku (feat. NEONA)",
      artist: "PIKASONIC / Tatsunoshin / KOTONOHOUSE / NEONA",
      url: "https://music.163.com/song/media/outer/url?id=2004906465.mp3",
      cover: "https://p1.music.126.net/hjPkNJYA9TxlSZVhxEjViA==/109951168125264860.jpg"
    },
    {
      name: "Have a Good Game!!",
      artist: "こはならむ",
      url: "https://music.163.com/song/media/outer/url?id=2644582337.mp3",
      cover: "https://p1.music.126.net/JLpomKpPJn7PmCDURWkJQA==/109951170130980118.jpg"
    },
    {
      name: "冒険の書",
      artist: "*Luna / ゆある",
      url: "https://music.163.com/song/media/outer/url?id=2061683527.mp3",
      cover: "https://p1.music.126.net/AU81d7FyUp1ji1yi82Nw5g==/109951172414651911.jpg"
    },
    {
      name: "夢重力",
      artist: "ナナツカゼ / PIKASONIC / なこたんまる",
      url: "https://music.163.com/song/media/outer/url?id=2155399298.mp3",
      cover: "https://p1.music.126.net/z8yM4QUr0x94SMVUgnDXUg==/109951169586224664.jpg"
    },
    {
      name: "在処",
      artist: "FROZEN QUALIA",
      url: "https://music.163.com/song/media/outer/url?id=1399646400.mp3",
      cover: "https://p1.music.126.net/F9ksgXNSai_qFfoFCvM8vg==/109951168300247557.jpg"
    },
    {
      name: "Fighting My Way",
      artist: "初星学園 / Giga / 花海咲季",
      url: "https://music.163.com/song/media/outer/url?id=2156579528.mp3",
      cover: "https://p1.music.126.net/5N72Q6e4sc05F6Zjn8ISDQ==/109951169614490793.jpg"
    },
    {
      name: "アンノウン・マザーグース",
      artist: "wowaka / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=502455381.mp3",
      cover: "https://p1.music.126.net/Wgi0eBdLS0m5910SuAeqkg==/109951163014923061.jpg"
    },
    {
      name: "アイコトバ",
      artist: "アイナ・ジ・エンド",
      url: "https://music.163.com/song/media/outer/url?id=2093235898.mp3",
      cover: "https://p1.music.126.net/P68LFi02YZoLXlfN2QecLg==/109951169003257270.jpg"
    },
    {
      name: "萤萤微光",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2601618915.mp3",
      cover: "https://p1.music.126.net/OUdxMtOD9h50GFqv8f-G0A==/109951169717957358.jpg"
    },
    {
      name: "Wonderful World",
      artist: "&TEAM",
      url: "https://music.163.com/song/media/outer/url?id=2673166775.mp3",
      cover: "https://p1.music.126.net/sOKR2991cjL5kS36VRab3g==/109951170464211562.jpg"
    },
    {
      name: "我道行真",
      artist: "三无Marblue",
      url: "https://music.163.com/song/media/outer/url?id=2655105163.mp3",
      cover: "https://p1.music.126.net/1GiqncQZSLK7Paq59whw2Q==/109951170242701235.jpg"
    },
    {
      name: "再生",
      artist: "ナナツカゼ / PIKASONIC / なこたんまる",
      url: "https://music.163.com/song/media/outer/url?id=2133659925.mp3",
      cover: "https://p1.music.126.net/Pk8ghDSjckhAsv35Vy5yMA==/109951169395524776.jpg"
    },
    {
      name: "七日seven days",
      artist: "小野道ono / 真栗",
      url: "https://music.163.com/song/media/outer/url?id=1418788252.mp3",
      cover: "https://p2.music.126.net/LL_xNe6Q6Q9P04iOj6jC7A==/109951164651977024.jpg"
    },
    {
      name: "待我回返",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2664420476.mp3",
      cover: "https://p2.music.126.net/cTB1RdQEw1d5G3MxiHNrSA==/109951170362931481.jpg"
    },
    {
      name: "几分造作",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2664420449.mp3",
      cover: "https://p2.music.126.net/cTB1RdQEw1d5G3MxiHNrSA==/109951170362931481.jpg"
    },
    {
      name: "ないばいたりてぃ",
      artist: "P丸様。 / 真島ゆろ",
      url: "https://music.163.com/song/media/outer/url?id=1985009143.mp3",
      cover: "https://p2.music.126.net/El9_PCejmBcfO5RLz8qlmg==/109951167914233841.jpg"
    },
    {
      name: "ないばいたりてぃ",
      artist: "千早爱音 / 立石凛",
      url: "https://music.163.com/song/media/outer/url?id=2141090029.mp3",
      cover: "https://p2.music.126.net/GN-mv_w7vtErOSrBF7jc9w==/109951169457498651.jpg"
    },
    {
      name: "大海带不走",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2664420463.mp3",
      cover: "https://p2.music.126.net/cTB1RdQEw1d5G3MxiHNrSA==/109951170362931481.jpg"
    },
    {
      name: "嗵嗵 （神明神明张开嘴）",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=2675989771.mp3",
      cover: "https://p2.music.126.net/vThQIcAhTNK1dg27d9O6rA==/109951170492754935.jpg"
    },
    {
      name: "嗵嗵",
      artist: "折原露露",
      url: "https://music.163.com/song/media/outer/url?id=2678672516.mp3",
      cover: "https://p2.music.126.net/jA0jQ9DREvAJ1PfYVL3zFw==/109951170517198413.jpg"
    },
    {
      name: "ただ君に晴れ",
      artist: "ヨルシカ",
      url: "https://music.163.com/song/media/outer/url?id=557579321.mp3",
      cover: "https://p2.music.126.net/FHi1cWVObsNewrw-Jf2w3g==/109951163289889776.jpg"
    },
    {
      name: "嗵嗵",
      artist: "DOUDOU",
      url: "https://music.163.com/song/media/outer/url?id=2668317465.mp3",
      cover: "https://p2.music.126.net/tmrcS5favz7v9gcl3Gs0JA==/109951170610574751.jpg"
    },
    {
      name: "参考答案：略",
      artist: "wukino / 诗岸",
      url: "https://music.163.com/song/media/outer/url?id=2161164938.mp3",
      cover: "https://p2.music.126.net/NbxEBL4M8tXa9RhLhhbgCA==/109951169679274549.jpg"
    },
    {
      name: "Ebbing Love Flowing Tears (Sad Fall Tianyi Version)",
      artist: "洛天依Official / Eden Ro Swift",
      url: "https://music.163.com/song/media/outer/url?id=2642033678.mp3",
      cover: "https://p2.music.126.net/PxSGbpMiUNNYf0Gm65HDiA==/109951170133041466.jpg"
    },
    {
      name: "You're The Light I Seek",
      artist: "洛天依Official / Eden Ro Swift",
      url: "https://music.163.com/song/media/outer/url?id=2675551466.mp3",
      cover: "https://p2.music.126.net/s8Cb98cGBjfV_rbo1UH5GQ==/109951170492497656.jpg"
    },
    {
      name: "只有春天，禁止入内",
      artist: "wukino / 星尘infinity",
      url: "https://music.163.com/song/media/outer/url?id=2161506239.mp3",
      cover: "https://p2.music.126.net/5A97qEhHFUybFFhSCnD60w==/109951169637914452.jpg"
    },
    {
      name: "ヴァンパイア",
      artist: "DECO*27",
      url: "https://music.163.com/song/media/outer/url?id=1925407376.mp3",
      cover: "https://p2.music.126.net/lz94MnDehoMFTPfN3F0PKA==/109951167114984581.jpg"
    },
    {
      name: "怪獣",
      artist: "サカナクション",
      url: "https://music.163.com/song/media/outer/url?id=2676706396.mp3",
      cover: "https://p2.music.126.net/_H5OPbK603_cLYbN0ZKHCg==/109951170498691535.jpg"
    },
    {
      name: "幻境中",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=2668931099.mp3",
      cover: "https://p2.music.126.net/4GQbVHqPgEbQJHlK9sGj4w==/109951170419201557.jpg"
    },
    {
      name: "Citrus Love",
      artist: "Bao The Whale / Overspace",
      url: "https://music.163.com/song/media/outer/url?id=2038363237.mp3",
      cover: "https://p2.music.126.net/HuNxnlZ80oJ6zm0hjq6bWg==/109951168539340698.jpg"
    },
    {
      name: "晩餐歌 - Bansanka",
      artist: "tuki.",
      url: "https://music.163.com/song/media/outer/url?id=2120442088.mp3",
      cover: "https://p2.music.126.net/NH_ZgHtf8JrwDtOKOKCGRQ==/109951170655374041.jpg"
    },
    {
      name: "山遥路远 (本家)",
      artist: "ChiliChill乐团",
      url: "https://music.163.com/song/media/outer/url?id=1450504202.mp3",
      cover: "https://p1.music.126.net/0sLhb1IHv7TRzdhVwzCCJw==/109951170679528872.jpg"
    },
    {
      name: "Target for Love",
      artist: "星海辰starsea",
      url: "https://music.163.com/song/media/outer/url?id=2636155187.mp3",
      cover: "https://p1.music.126.net/mILDT88pP0hHNh4z83svIw==/109951170040800238.jpg"
    },
    {
      name: "NICE TYPE",
      artist: "KIRA / Monii / JOHNNY R",
      url: "https://music.163.com/song/media/outer/url?id=2110277321.mp3",
      cover: "https://p1.music.126.net/q1wsJde6rJAh2IhqI4IaiA==/109951169179094737.jpg"
    },
    {
      name: "何者",
      artist: "谭晶 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2658660685.mp3",
      cover: "https://p1.music.126.net/gtunmoxObQyoH01HzURNUw==/109951170292455448.jpg"
    },
    {
      name: "戏游九州",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2657393088.mp3",
      cover: "https://p1.music.126.net/izEChar3el_XSAOZOCF2Uw==/109951170277855748.jpg"
    },
    {
      name: "ヒットメーカー (feat. 重音テト)",
      artist: "夜未アガリ / 重音テト",
      url: "https://music.163.com/song/media/outer/url?id=2135490449.mp3",
      cover: "https://p1.music.126.net/GPlsonsHSwtG8GSDTMfeuA==/109951169410333542.jpg"
    },
    {
      name: "機械の声",
      artist: "香椎モイミ / V.I.P",
      url: "https://music.163.com/song/media/outer/url?id=2146778996.mp3",
      cover: "https://p1.music.126.net/z2TkHAcd_DxOJrJMqh1Ufg==/109951169505153201.jpg"
    },
    {
      name: "テラ",
      artist: "春猿火",
      url: "https://music.163.com/song/media/outer/url?id=2042621665.mp3",
      cover: "https://p2.music.126.net/-A6LEAr_yKCIdbvIadgvbQ==/109951168571747848.jpg"
    },
    {
      name: "アイシテ",
      artist: "nameless",
      url: "https://music.163.com/song/media/outer/url?id=38689097.mp3",
      cover: "https://p2.music.126.net/Q7o5JZusviFWxfIZxPfc5g==/109951163338335039.jpg"
    },
    {
      name: "Under",
      artist: "花鋏キョウ",
      url: "https://music.163.com/song/media/outer/url?id=2080185857.mp3",
      cover: "https://p2.music.126.net/4mxLFtRKtab1A6c544jh8w==/109951168899060216.jpg"
    },
    {
      name: "Spiral",
      artist: "明透",
      url: "https://music.163.com/song/media/outer/url?id=2146779694.mp3",
      cover: "https://p2.music.126.net/Fa9iOaTyWAq1XNcsbiJj0Q==/109951169505156066.jpg"
    },
    {
      name: "夜间出租车",
      artist: "洛天依Official / ilem",
      url: "https://music.163.com/song/media/outer/url?id=1347673545.mp3",
      cover: "https://p2.music.126.net/ZKVM7N458RJtG_EO6EB62w==/109951171391306381.jpg"
    },
    {
      name: "Ours (feat. 初音ミク)",
      artist: "*Luna / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=1976813348.mp3",
      cover: "https://p2.music.126.net/6c6RXmN2ZOchtBKdG3JJNQ==/109951167830558625.jpg"
    },
    {
      name: "漪涟依旧",
      artist: "Padi / 洛天依 / 言和 / 初繁言 / 亚小琨 / 二虫w / 被遗忘者的哀伤",
      url: "https://music.163.com/song/media/outer/url?id=2618689576.mp3",
      cover: "https://p2.music.126.net/aQM_S1ANT23ey4ZGHCNYjA==/109951169885296520.jpg"
    },
    {
      name: "Come Alive Stripped.",
      artist: "三Z-STUDIO / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2658039041.mp3",
      cover: "https://p2.music.126.net/LG92Y-ZMYZnFzWynq5jeWw==/109951170278788820.jpg"
    },
    {
      name: "Rise up (feat. 初音ミク)",
      artist: "*Luna / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=2132512955.mp3",
      cover: "https://p2.music.126.net/OpyDleLc9v0fTRpwv1rzrw==/109951169387197653.jpg"
    },
    {
      name: "はいよろこんで",
      artist: "こっちのけんと",
      url: "https://music.163.com/song/media/outer/url?id=2154219378.mp3",
      cover: "https://p2.music.126.net/_cqLAaqEBJnR_stKbnuE5g==/109951169575235469.jpg"
    },
    {
      name: "一首简单的歌",
      artist: "王力宏",
      url: "https://music.163.com/song/media/outer/url?id=400581047.mp3",
      cover: "https://p2.music.126.net/iUWb3s-Q-rGNQGhfDoWwYg==/109951165994895269.jpg"
    },
    {
      name: "Holding Court",
      artist: "Audiomachine",
      url: "https://music.163.com/song/media/outer/url?id=2024811562.mp3",
      cover: "https://p1.music.126.net/nceHVs_Mf5F9355TJaw0-g==/109951168381259539.jpg"
    },
    {
      name: "Side By Side",
      artist: "言和",
      url: "https://music.163.com/song/media/outer/url?id=2636416385.mp3",
      cover: "https://p1.music.126.net/M17SV0KxCfpLAHQkSdZetw==/109951170043433146.jpg"
    },
    {
      name: "劣等哀歌 (feat. 初音ミク & 重音テト)",
      artist: "MIMI / 初音ミク / 重音テト",
      url: "https://music.163.com/song/media/outer/url?id=2644623438.mp3",
      cover: "https://p1.music.126.net/FeCtPwsogrivYchUcZldAw==/109951170131470677.jpg"
    },
    {
      name: "青染 (feat. ナツノセ)",
      artist: "缶缶 / ナツノセ",
      url: "https://music.163.com/song/media/outer/url?id=2632142879.mp3",
      cover: "https://p1.music.126.net/yaVaPtAz1U-LFfui0GAr1A==/109951170002456450.jpg"
    },
    {
      name: "Zenith",
      artist: "KARAKURI",
      url: "https://music.163.com/song/media/outer/url?id=2019092913.mp3",
      cover: "https://p1.music.126.net/wGqRIS6kYizTDXIn3tWsAA==/109951168277970190.jpg"
    },
    {
      name: "还",
      artist: "闹闹丶 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1474209379.mp3",
      cover: "https://p1.music.126.net/XNgqMsVSTQEZjRCVYyw9ig==/109951165271779155.jpg"
    },
    {
      name: "空泣",
      artist: "MOCKER44. / Ari鸦不齐 / BEYOND THE GALAXY",
      url: "https://music.163.com/song/media/outer/url?id=2631039020.mp3",
      cover: "https://p1.music.126.net/nszabutRUTydMNRyqiJ_9g==/109951169992887953.jpg"
    },
    {
      name: "モニタリング",
      artist: "DECO*27 / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=2639291583.mp3",
      cover: "https://p1.music.126.net/AyOZCkH55VboMessdJnXGg==/109951170067309376.jpg"
    },
    {
      name: "Buffer",
      artist: "Empty old City",
      url: "https://music.163.com/song/media/outer/url?id=2139647859.mp3",
      cover: "https://p1.music.126.net/ar8Uli5IVgwNsyIJVbLSSg==/109951169445427472.jpg"
    },
    {
      name: "By My Side",
      artist: "Synthion / Yuuna Nini",
      url: "https://music.163.com/song/media/outer/url?id=2014406819.mp3",
      cover: "https://p1.music.126.net/-8YI4jH9WC4BjUCAQ_8T1g==/109951168233398874.jpg"
    },
    {
      name: "又一个夜晚",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2636645163.mp3",
      cover: "https://p1.music.126.net/MK7EiTOc16itTLFcb6nRwA==/109951170045405348.jpg"
    },
    {
      name: "By the Seaside (feat. Kitsui Akira)",
      artist: "Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=2613950506.mp3",
      cover: "https://p1.music.126.net/AJaCmp8sTBvAoWtPFqtCaQ==/109951169840669390.jpg"
    },
    {
      name: "イキたいの。",
      artist: "初音ミク / ぼいじゃあ",
      url: "https://music.163.com/song/media/outer/url?id=2015705276.mp3",
      cover: "https://p1.music.126.net/mCxinsMNGtNmxow3Sn3kQQ==/109951168245836015.jpg"
    },
    {
      name: "ビビデバ",
      artist: "星街すいせい",
      url: "https://music.163.com/song/media/outer/url?id=2141621284.mp3",
      cover: "https://p1.music.126.net/gbHTRBfX4c3S33cgAOomUQ==/109951170492494478.jpg"
    },
    {
      name: "上上签",
      artist: "言和",
      url: "https://music.163.com/song/media/outer/url?id=2075907843.mp3",
      cover: "https://p2.music.126.net/xV8yTjWqjnbJVJ5uS2idRA==/109951168862730701.jpg"
    },
    {
      name: "アイノ最適解",
      artist: "理芽 / 明透",
      url: "https://music.163.com/song/media/outer/url?id=2648828637.mp3",
      cover: "https://p2.music.126.net/vI103m9TgHPRqEqd8Z5HfQ==/109951170174875955.jpg"
    },
    {
      name: "手を握っていて",
      artist: "ヒバナ",
      url: "https://music.163.com/song/media/outer/url?id=2605929320.mp3",
      cover: "https://p2.music.126.net/Y0B7ikf8WItubnmtvO2orA==/109951169761260663.jpg"
    },
    {
      name: "Kirari Kirameku",
      artist: "ra'z / ZENI / 9maBear",
      url: "https://music.163.com/song/media/outer/url?id=1965420762.mp3",
      cover: "https://p2.music.126.net/9SMB-cp4z2n4qn6j91MiWA==/109951167694247763.jpg"
    },
    {
      name: "さよならfrequency",
      artist: "HACHI",
      url: "https://music.163.com/song/media/outer/url?id=2067063986.mp3",
      cover: "https://p2.music.126.net/gV3GNl_4wk4GfzgxrLEAFA==/109951168763893211.jpg"
    },
    {
      name: "シニカル・シニカル (feat. Such)",
      artist: "Such / 吐息",
      url: "https://music.163.com/song/media/outer/url?id=2129633484.mp3",
      cover: "https://p2.music.126.net/S0oKoMGH4ykuVDJExNqUWg==/109951169364196282.jpg"
    },
    {
      name: "トワイライト・セレナーデ",
      artist: "Empty old City",
      url: "https://music.163.com/song/media/outer/url?id=1965679727.mp3",
      cover: "https://p2.music.126.net/tiSQy_WR8z_WSKBx3hqtfA==/109951169235333443.jpg"
    },
    {
      name: "未完成ランデヴー",
      artist: "Lezel",
      url: "https://music.163.com/song/media/outer/url?id=2604586574.mp3",
      cover: "https://p2.music.126.net/8OBa5hHVAiZsGGMR3l-ZsA==/109951169746402751.jpg"
    },
    {
      name: "【洛天依】小孩的歌",
      artist: "清风疾行_",
      url: "https://music.163.com/song/media/outer/url?id=2622936588.mp3",
      cover: "https://p2.music.126.net/8lRBrZhuAyGKqOHHQDjgYQ==/109951169922883724.jpg"
    },
    {
      name: "Flicker",
      artist: "Andora / RANASOL",
      url: "https://music.163.com/song/media/outer/url?id=1920716027.mp3",
      cover: "https://p2.music.126.net/9EL3xvDdwPhTufo5xJlw8w==/109951167055190621.jpg"
    },
    {
      name: "ハート111",
      artist: "ゆーり",
      url: "https://music.163.com/song/media/outer/url?id=2141770031.mp3",
      cover: "https://p2.music.126.net/djQ6z-r849_eFQ3IyzUzUw==/109951169463241639.jpg"
    },
    {
      name: "山妖",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2122510073.mp3",
      cover: "https://p2.music.126.net/AecJ7VLsYWvc75b9yYHyXw==/109951169299494909.jpg"
    },
    {
      name: "自分後回し",
      artist: "P丸様。",
      url: "https://music.163.com/song/media/outer/url?id=2629090578.mp3",
      cover: "https://p2.music.126.net/GaZVqvGb7zqspwEIQDoe-w==/109951169976970559.jpg"
    },
    {
      name: "沐雨",
      artist: "_Kussen_ / 洛天依 / 言和",
      url: "https://music.163.com/song/media/outer/url?id=2138674818.mp3",
      cover: "https://p2.music.126.net/GzuXIX8sHL9F7dbYh-Nryg==/109951169437741431.jpg"
    },
    {
      name: "迷航在最熟悉的世界",
      artist: "洛天依Official / Terminal_P",
      url: "https://music.163.com/song/media/outer/url?id=2155330093.mp3",
      cover: "https://p2.music.126.net/reQQv2wDgyLjoL677-nq-g==/109951169585640945.jpg"
    },
    {
      name: "依晴圆缺",
      artist: "洛天依 / ColdWarmKite",
      url: "https://music.163.com/song/media/outer/url?id=2623011373.mp3",
      cover: "https://p2.music.126.net/zve3Z6PzurCt887fy3-ScQ==/109951169923433801.jpg"
    },
    {
      name: "棠梨煎雪",
      artist: "银临",
      url: "https://music.163.com/song/media/outer/url?id=28188427.mp3",
      cover: "https://p2.music.126.net/LBnYDAUED2mD1veBvBnC8g==/5859297464524710.jpg"
    },
    {
      name: "棠梨煎雪（Cover 银临）",
      artist: "双笙（陈元汐）",
      url: "https://music.163.com/song/media/outer/url?id=468469640.mp3",
      cover: "https://p2.music.126.net/73Sxgy165TJk_xNSQ6UYEQ==/109951162895416217.jpg"
    },
    {
      name: "人マニア",
      artist: "原口沙輔 / 重音テト",
      url: "https://music.163.com/song/media/outer/url?id=2074759832.mp3",
      cover: "https://p2.music.126.net/lCwiQaHx7p8djIMZ0wVxQg==/109951168853076574.jpg"
    },
    {
      name: "潮声回响",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2642068746.mp3",
      cover: "https://p2.music.126.net/fHt6FTWiCGrndd9HpTLywg==/109951170102809946.jpg"
    },
    {
      name: "空山幽谷",
      artist: "Anemone",
      url: "https://music.163.com/song/media/outer/url?id=2023968621.mp3",
      cover: "https://p2.music.126.net/MbiRwDdv4eNff6cnQlJ7uQ==/109951168324107641.jpg"
    },
    {
      name: "Astronomy",
      artist: "Empty old City",
      url: "https://music.163.com/song/media/outer/url?id=2637083550.mp3",
      cover: "https://p2.music.126.net/Ef_HPfDnPt_iWYbINMeSEQ==/109951170048527422.jpg"
    },
    {
      name: "AREA 52",
      artist: "かめりあ",
      url: "https://music.163.com/song/media/outer/url?id=1853203675.mp3",
      cover: "https://p2.music.126.net/Vyh4pVaQm14FQrD7d4lndg==/109951166086329459.jpg"
    },
    {
      name: "The 90's Decision",
      artist: "MYUKKE.",
      url: "https://music.163.com/song/media/outer/url?id=1874120860.mp3",
      cover: "https://p2.music.126.net/2w230J_iS1hcLOWwlQB5uw==/109951166337984666.jpg"
    },
    {
      name: "夏日イタズラ",
      artist: "早稻叽",
      url: "https://music.163.com/song/media/outer/url?id=1869818929.mp3",
      cover: "https://p2.music.126.net/2mDCEaYgDoPzM7BKCWvoZA==/109951166287725553.jpg"
    },
    {
      name: "Aurora (feat. Shion)",
      artist: "Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=1388770902.mp3",
      cover: "https://p2.music.126.net/oErHMKLK12jQbr7k6xrlMA==/109951164344700503.jpg"
    },
    {
      name: "Colors (feat. Shion)",
      artist: "Kirara Magic / Shion",
      url: "https://music.163.com/song/media/outer/url?id=1419449691.mp3",
      cover: "https://p2.music.126.net/JW6mh2PEI9cvybFq3XxJHw==/109951164659656245.jpg"
    },
    {
      name: "Floating Star",
      artist: "Kirara Magic / Shion Lee",
      url: "https://music.163.com/song/media/outer/url?id=1830190033.mp3",
      cover: "https://p2.music.126.net/E0BDTR7BomvzrYu_4ixzuA==/109951165811598413.jpg"
    },
    {
      name: "Lockdown (Tatsunoshin VIP)",
      artist: "Tatsunoshin / PIKASONIC / Tsugumi Nagahara",
      url: "https://music.163.com/song/media/outer/url?id=1937255781.mp3",
      cover: "https://p2.music.126.net/JII4C4a4ie7W_uv2VHhMWw==/109951167279826036.jpg"
    },
    {
      name: "黑凤梨",
      artist: "绫裕天歆 / 东方栀子 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1913628423.mp3",
      cover: "https://p2.music.126.net/ULwFneLVut9vMkQRSdjmlg==/109951166693314368.jpg"
    },
    {
      name: "弱虫だって",
      artist: "咩栗 / 呜米",
      url: "https://music.163.com/song/media/outer/url?id=1868838401.mp3",
      cover: "https://p2.music.126.net/iChY2B-EULoYB_kh4WUa2Q==/109951166274885399.jpg"
    },
    {
      name: "蜀月行歌",
      artist: "咩栗 / 呜米",
      url: "https://music.163.com/song/media/outer/url?id=1950908231.mp3",
      cover: "https://p2.music.126.net/SHbhbl0LE-HC77h03KeCuw==/109951167126137785.jpg"
    },
    {
      name: "POP IN 2（TV SIZE）",
      artist: "猫ちゃん / 櫻羽 / 凜菓",
      url: "https://music.163.com/song/media/outer/url?id=2634670014.mp3",
      cover: "https://p2.music.126.net/rweOyKLzT6UV7C4nFxNtXg==/109951168759658683.jpg"
    },
    {
      name: "仇",
      artist: "GoldenFree / CEM Records",
      url: "https://music.163.com/song/media/outer/url?id=1923219694.mp3",
      cover: "https://p2.music.126.net/Ofd3z9fz7cIVKxkcQgFcLQ==/109951167087527411.jpg"
    },
    {
      name: "哈索尔",
      artist: "咩栗 / 呜米",
      url: "https://music.163.com/song/media/outer/url?id=1923463723.mp3",
      cover: "https://p1.music.126.net/SHbhbl0LE-HC77h03KeCuw==/109951167126137785.jpg"
    },
    {
      name: "Irreplaceable",
      artist: "茶理理 / 三无Marblue / 小缘 / Hanser / 勺Shaun",
      url: "https://music.163.com/song/media/outer/url?id=2124106667.mp3",
      cover: "https://p1.music.126.net/47wyXxvzSqDutgPLEPHCBQ==/109951169313593238.jpg"
    },
    {
      name: "Mensonges",
      artist: "Anemone",
      url: "https://music.163.com/song/media/outer/url?id=2115777003.mp3",
      cover: "https://p1.music.126.net/DuYoi0gUTcEE0vg184JO7A==/109951169246494103.jpg"
    },
    {
      name: "Melt",
      artist: "Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=2110346686.mp3",
      cover: "https://p1.music.126.net/SOkWuMiABf3190NnPqzPAg==/109951169186981203.jpg"
    },
    {
      name: "中华铄金娘",
      artist: "洛天依Official / Soda纯白",
      url: "https://music.163.com/song/media/outer/url?id=420401134.mp3",
      cover: "https://p1.music.126.net/naihNDWAJXSxy7UE3XVKEg==/17692241602844445.jpg"
    },
    {
      name: "歌行四方【泠鸢】",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2079283562.mp3",
      cover: "https://p1.music.126.net/KKT74Ra-SRsdAladzyOE6Q==/109951168225885314.jpg"
    },
    {
      name: "苏幕遮【泠鸢】",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2618672265.mp3",
      cover: "https://p1.music.126.net/Socvp1OjvoEUfK2eNtFRzw==/109951169294327359.jpg"
    },
    {
      name: "身体は正直だって言ってんの",
      artist: "式浦躁吾",
      url: "https://music.163.com/song/media/outer/url?id=1943925961.mp3",
      cover: "https://p1.music.126.net/zDSYSv2XGUZuuVbJAal7tw==/109951167370534583.jpg"
    },
    {
      name: "身体は正直だって言ってんの",
      artist: "酒酒井Anri",
      url: "https://music.163.com/song/media/outer/url?id=2007614402.mp3",
      cover: "https://p1.music.126.net/WMp82Mc2i7frtQA1dXqSuw==/109951167582246502.jpg"
    },
    {
      name: "蝶变",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2092504999.mp3",
      cover: "https://p1.music.126.net/AecJ7VLsYWvc75b9yYHyXw==/109951169299494909.jpg"
    },
    {
      name: "登陆宇宙",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2085425279.mp3",
      cover: "https://p1.music.126.net/AecJ7VLsYWvc75b9yYHyXw==/109951169299494909.jpg"
    },
    {
      name: "粛清マーチ",
      artist: "MILGRAM / DECO*27 / 田中美海",
      url: "https://music.163.com/song/media/outer/url?id=2081767758.mp3",
      cover: "https://p2.music.126.net/zkb-yYwvS4sUmdAIr7kUJA==/109951168911980815.jpg"
    },
    {
      name: "HIT ME UP (feat. Monii & Johnny R)",
      artist: "星粥Kayuu",
      url: "https://music.163.com/song/media/outer/url?id=2618532125.mp3",
      cover: "https://p2.music.126.net/_R8Umnro1m4QUhfN1pF5Uw==/109951169883517552.jpg"
    },
    {
      name: "尘梦吟",
      artist: "洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2618525860.mp3",
      cover: "https://p2.music.126.net/YzVWA4R2O5PCt5pHeyFREA==/109951169883462512.jpg"
    },
    {
      name: "I I I",
      artist: "宝鐘マリン / Kobo Kanaeru",
      url: "https://music.163.com/song/media/outer/url?id=2156449786.mp3",
      cover: "https://p2.music.126.net/wt9-GBmOxRyO7DuAufbsHQ==/109951170986879723.jpg"
    },
    {
      name: "comic cosmic (M@STER VERSION|BONUS TRACK)",
      artist: "牧野由依 / 長江里加 / 下地紫野 / 今井麻夏 / 鈴木絵理",
      url: "https://music.163.com/song/media/outer/url?id=1404869688.mp3",
      cover: "https://p2.music.126.net/F1jNWNTpklRnt-rII2Lu-g==/109951164499669125.jpg"
    },
    {
      name: "ココロノカラ",
      artist: "Team.ねこかん[猫] / 天乙准花",
      url: "https://music.163.com/song/media/outer/url?id=854393.mp3",
      cover: "https://p2.music.126.net/qXt8mxbMLIIuyakhHEN67w==/941181953376477.jpg"
    },
    {
      name: "Fine Day",
      artist: "平葵",
      url: "https://music.163.com/song/media/outer/url?id=2112974332.mp3",
      cover: "https://p2.music.126.net/uxnhejSYlkUEIJRqMwg6CA==/109951169221528765.jpg"
    },
    {
      name: "Letter",
      artist: "Azure Lag",
      url: "https://music.163.com/song/media/outer/url?id=2602068762.mp3",
      cover: "https://p2.music.126.net/YDLvbYjfh0Rt0vPsbYaMIA==/109951169721870785.jpg"
    },
    {
      name: "Astral Sunset",
      artist: "Azure Lag",
      url: "https://music.163.com/song/media/outer/url?id=2602072790.mp3",
      cover: "https://p2.music.126.net/YDLvbYjfh0Rt0vPsbYaMIA==/109951169721870785.jpg"
    },
    {
      name: "SUPER SEX DELIVERY 2 - ENTER THE CUM ZONE",
      artist: "ReeK",
      url: "https://music.163.com/song/media/outer/url?id=1947089032.mp3",
      cover: "https://p2.music.126.net/eo7BNYbLWepV15lgyKVvgA==/109951167410876553.jpg"
    },
    {
      name: "【洛天依】等风来",
      artist: "清风疾行_",
      url: "https://music.163.com/song/media/outer/url?id=2030738043.mp3",
      cover: "https://p2.music.126.net/aFk1b4h2uhI6Y-tbokp1_Q==/109951168473198699.jpg"
    },
    {
      name: "星座になれたら-Anime Ver.-",
      artist: "結束バンド",
      url: "https://music.163.com/song/media/outer/url?id=2053707223.mp3",
      cover: "https://p2.music.126.net/HrlPEWMvu0-KJGUx6U39Mw==/109951168663637537.jpg"
    },
    {
      name: "雨ほうし",
      artist: "平葵",
      url: "https://music.163.com/song/media/outer/url?id=1889988412.mp3",
      cover: "https://p2.music.126.net/rxSPvAjm26I4f4QbE18UMQ==/109951166557859791.jpg"
    },
    {
      name: "Daisy",
      artist: "花鋏キョウ",
      url: "https://music.163.com/song/media/outer/url?id=1872432764.mp3",
      cover: "https://p2.music.126.net/N2byjXKeSi1vvIdRQt2Mbw==/109951166317775107.jpg"
    },
    {
      name: "Deity Mode",
      artist: "ReeK / Asatsumei / L4hee",
      url: "https://music.163.com/song/media/outer/url?id=2044160370.mp3",
      cover: "https://p2.music.126.net/dXioAF35k7tDGkMwC4VLmQ==/109951168585563219.jpg"
    },
    {
      name: "星が泳ぐ",
      artist: "夏野Natsuno",
      url: "https://music.163.com/song/media/outer/url?id=1955764557.mp3",
      cover: "https://p2.music.126.net/vTWvAh7mr0hrCpnRT1PLxw==/109951167548632750.jpg"
    },
    {
      name: "回夏",
      artist: "cadode",
      url: "https://music.163.com/song/media/outer/url?id=1939401645.mp3",
      cover: "https://p2.music.126.net/pGkPhmnTYGcGFb6QYQTq5A==/109951167311600499.jpg"
    },
    {
      name: "Factory",
      artist: "PIKASONIC",
      url: "https://music.163.com/song/media/outer/url?id=2607970502.mp3",
      cover: "https://p2.music.126.net/T5maNzr7sajQDTN0DhLq9A==/109951169781765992.jpg"
    },
    {
      name: "最上級にかわいいの！",
      artist: "超ときめき♡宣伝部",
      url: "https://music.163.com/song/media/outer/url?id=2118485348.mp3",
      cover: "https://p2.music.126.net/HOQjw7z81_ixYAHyo0fyvA==/109951169251371207.jpg"
    },
    {
      name: "花咲み",
      artist: "茅野愛衣",
      url: "https://music.163.com/song/media/outer/url?id=2085770029.mp3",
      cover: "https://p2.music.126.net/G7S1AIxia88KP50GWvjXuw==/109951168944530141.jpg"
    },
    {
      name: "夏日无尽蓝",
      artist: "洛天依Official / 爆音常安 / 莱依拉_Elia",
      url: "https://music.163.com/song/media/outer/url?id=2166914869.mp3",
      cover: "https://p2.music.126.net/wrHGBhZjLRo9_WrkzDV8hQ==/109951169690669052.jpg"
    },
    {
      name: "海边城（Feat.洛天依）",
      artist: "Atsuko / 林墨白citrum / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2613962838.mp3",
      cover: "https://p2.music.126.net/hWHK8-oXoq8bl8zN4JVClA==/109951169840891864.jpg"
    },
    {
      name: "まっすぐ",
      artist: "大原ゆい子",
      url: "https://music.163.com/song/media/outer/url?id=1906977699.mp3",
      cover: "https://p2.music.126.net/Wr-8-gVXJIhzxmOWHvRpWw==/109951166833441864.jpg"
    },
    {
      name: "旅人の唄",
      artist: "大原ゆい子",
      url: "https://music.163.com/song/media/outer/url?id=1811209786.mp3",
      cover: "https://p2.music.126.net/sZ4UeHbAFT03geDWJXshGw==/109951165621996058.jpg"
    },
    {
      name: "Goodbye Goodnight",
      artist: "rejection / Shully",
      url: "https://music.163.com/song/media/outer/url?id=1430188320.mp3",
      cover: "https://p2.music.126.net/G0Y3LmcP8hCABuI6tc7g9w==/109951165777443384.jpg"
    },
    {
      name: "REFLECTION (Batsu Remix)",
      artist: "Batsu / Rekanan",
      url: "https://music.163.com/song/media/outer/url?id=411214035.mp3",
      cover: "https://p2.music.126.net/H0qtZBAEEDo3O4AJREfzlg==/1390882217063993.jpg"
    },
    {
      name: "巫山云",
      artist: "旅行的蜗牛 / 诗岸",
      url: "https://music.163.com/song/media/outer/url?id=1463239438.mp3",
      cover: "https://p2.music.126.net/lfIprruJY9UzV8gpDDfgUw==/109951165143135087.jpg"
    },
    {
      name: "まどろみの約束",
      artist: "佐藤聡美 / 茅野愛衣",
      url: "https://music.163.com/song/media/outer/url?id=27552690.mp3",
      cover: "https://p2.music.126.net/Rga1eDFICLsyvGqiVDp-oA==/109951163363908304.jpg"
    },
    {
      name: "やさしい気持ち (TVアニメ「月がきれい」EDIT ver.)",
      artist: "東山奈央",
      url: "https://music.163.com/song/media/outer/url?id=488388728.mp3",
      cover: "https://p2.music.126.net/1RayakD6i3zzI3ZC8RTirA==/109951170423443784.jpg"
    },
    {
      name: "夏日未应答",
      artist: "Soda纯白 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2608553980.mp3",
      cover: "https://p1.music.126.net/ZOJYm8ErapSg8-gEAaiLHg==/109951169787821560.jpg"
    },
    {
      name: "いつか",
      artist: "あれくん",
      url: "https://music.163.com/song/media/outer/url?id=1957811390.mp3",
      cover: "https://p1.music.126.net/pzUtidloanXMkZsRjUv2zg==/109951167575065523.jpg"
    },
    {
      name: "断捨離 (feat. りりあ。)",
      artist: "SG / りりあ。",
      url: "https://music.163.com/song/media/outer/url?id=1999301299.mp3",
      cover: "https://p1.music.126.net/svDyJBq_VquhWln9ThY54A==/109951168067820303.jpg"
    },
    {
      name: "Blu (Original Mix)",
      artist: "MitiS / MaHi",
      url: "https://music.163.com/song/media/outer/url?id=26278745.mp3",
      cover: "https://p1.music.126.net/cGnpQh5S9ng1gKp3EQ7cgQ==/109951163171610197.jpg"
    },
    {
      name: "余晖",
      artist: "里里",
      url: "https://music.163.com/song/media/outer/url?id=2145853736.mp3",
      cover: "https://p1.music.126.net/Paljzu8GLH1dhqCLzTv9hw==/109951169497097524.jpg"
    },
    {
      name: "再生",
      artist: "阿良良木健 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2165563687.mp3",
      cover: "https://p1.music.126.net/2O576RWaBhwBB8l-4VLyOA==/109951169677472972.jpg"
    },
    {
      name: "酔いどれ知らず",
      artist: "kanaria / GUMI",
      url: "https://music.163.com/song/media/outer/url?id=1943883908.mp3",
      cover: "https://p1.music.126.net/bbYCLSitZbeNymu-E9HO2g==/109951167369974792.jpg"
    },
    {
      name: "洛水天依(洛天依)南亭阙 洛天依角色曲",
      artist: "恩雅NYA / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1379325093.mp3",
      cover: "https://p1.music.126.net/Oj3qjDboyQquUmxLke-_DQ==/109951164229658971.jpg"
    },
    {
      name: "芙蕖说",
      artist: "三无Marblue",
      url: "https://music.163.com/song/media/outer/url?id=1970095407.mp3",
      cover: "https://p1.music.126.net/6qajpcm3FJBZSfWPIUAxGg==/109951167753225587.jpg"
    },
    {
      name: "Connect (连接)",
      artist: "1-Zero / Kevinz / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2609175011.mp3",
      cover: "https://p1.music.126.net/j_zHqhqjSLQ7cS_UBIjz6Q==/109951169794022650.jpg"
    },
    {
      name: "蔚蓝深海 (feat.洛天依)",
      artist: "QGRay / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2165763719.mp3",
      cover: "https://p1.music.126.net/8haSOTRr5jLbTaPA24Toxg==/109951169569107434.jpg"
    },
    {
      name: "群伞在雨幕中盛开",
      artist: "洛天依 / Mara",
      url: "https://music.163.com/song/media/outer/url?id=2612174963.mp3",
      cover: "https://p1.music.126.net/dQ3n6xlxB4ugvnOUhJToEQ==/109951169824545084.jpg"
    },
    {
      name: "Sweet Dream (feat. taobien)",
      artist: "Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=2604927489.mp3",
      cover: "https://p1.music.126.net/Y2WXD2jw93FM8F9SKG_59w==/109951169746738768.jpg"
    },
    {
      name: "可否将你比作夏日",
      artist: "Dizzy.TC3 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2009348165.mp3",
      cover: "https://p1.music.126.net/ExS0eTVhoCB-W9TcTfguUw==/109951168175945483.jpg"
    },
    {
      name: "605",
      artist: "小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=2163764537.mp3",
      cover: "https://p1.music.126.net/363978rEX6vgKNQITwxqQw==/109951169658789896.jpg"
    },
    {
      name: "Morning Coffee",
      artist: "Chevy / Nalba",
      url: "https://music.163.com/song/media/outer/url?id=1480769848.mp3",
      cover: "https://p2.music.126.net/IJv8FTkeMxAIzguJ_sP5dw==/109951165329879983.jpg"
    },
    {
      name: "泼墨漓江【茜色诗集】",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=457750941.mp3",
      cover: "https://p2.music.126.net/RP4KH82QI6rdytJ8maXJCg==/109951163069921832.jpg"
    },
    {
      name: "星球卑",
      artist: "闹闹丶 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2616731014.mp3",
      cover: "https://p2.music.126.net/Sy7CE-3GsHGuRvGTNnBaeg==/109951169867211555.jpg"
    },
    {
      name: "Morning Coffee (bubble ver.)",
      artist: "Chevy / Nalba / Luxid",
      url: "https://music.163.com/song/media/outer/url?id=1806052941.mp3",
      cover: "https://p2.music.126.net/CwhB-nGp0EK7j_FW5_kiTg==/109951165556871043.jpg"
    },
    {
      name: "GOLDEN GOOSE",
      artist: "Connor Price",
      url: "https://music.163.com/song/media/outer/url?id=2600862917.mp3",
      cover: "https://p2.music.126.net/hhxerD5ZU6LYZw5xw7dXyw==/109951169708215731.jpg"
    },
    {
      name: "Mystic Light Quest",
      artist: "塞壬唱片-MSR / RANASOL / KOTONOHOUSE / Machico",
      url: "https://music.163.com/song/media/outer/url?id=2612747239.mp3",
      cover: "https://p2.music.126.net/zwXixPmpnRYLY03P_xnxig==/109951169830039862.jpg"
    },
    {
      name: "Loveit? (feat. LOLUET)",
      artist: "biz / ZERA / LOLUET",
      url: "https://music.163.com/song/media/outer/url?id=2032501701.mp3",
      cover: "https://p2.music.126.net/4KaEkF2S8xaBK-oaSgHeJA==/109951168488092236.jpg"
    },
    {
      name: "Tcans.",
      artist: "Herzog、",
      url: "https://music.163.com/song/media/outer/url?id=2605532918.mp3",
      cover: "https://p2.music.126.net/IZ_JIopEbk5sJMY7-Zlnog==/109951169755965275.jpg"
    },
    {
      name: "提灯游",
      artist: "瞳荧 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2126233211.mp3",
      cover: "https://p2.music.126.net/NX5zl7qSYhKkxo3a2ODnAg==/109951169334591118.jpg"
    },
    {
      name: "千囍与手抄卷",
      artist: "闫东炜 / 双笙（陈元汐）",
      url: "https://music.163.com/song/media/outer/url?id=1417793440.mp3",
      cover: "https://p2.music.126.net/Ho_V8nRVIHzwsCnMUggi7Q==/109951164640262232.jpg"
    },
    {
      name: "覆灭重生 Come Alive",
      artist: "三Z-STUDIO / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2604937294.mp3",
      cover: "https://p2.music.126.net/_pRMNHCxTY8frkjrG9FpfA==/109951169749523544.jpg"
    },
    {
      name: "the MIRACLE",
      artist: "Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=1442818973.mp3",
      cover: "https://p2.music.126.net/MqKT1dqSSOMOzjWMBfPqAw==/109951164931650199.jpg"
    },
    {
      name: "若我不曾见过太阳",
      artist: "知更鸟 / HOYO-MiX / Chevy",
      url: "https://music.163.com/song/media/outer/url?id=2155423469.mp3",
      cover: "https://p2.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg"
    },
    {
      name: "偏科战神",
      artist: "司墨尧smile",
      url: "https://music.163.com/song/media/outer/url?id=2041004815.mp3",
      cover: "https://p2.music.126.net/9zSJefTRr1T3ikTKVNTO6w==/109951168557938093.jpg"
    },
    {
      name: "虚无",
      artist: "飞不快的MIG25 / 星尘",
      url: "https://music.163.com/song/media/outer/url?id=2029645312.mp3",
      cover: "https://p2.music.126.net/gr5tDX9hDA0BNArtGl7ueQ==/109951168463737792.jpg"
    },
    {
      name: "纸上江山",
      artist: "Moderian / 白露·Selina / 临渊",
      url: "https://music.163.com/song/media/outer/url?id=1983706055.mp3",
      cover: "https://p2.music.126.net/tha_iDDRMtdZM_pHJfoAFg==/109951167900651181.jpg"
    },
    {
      name: "流年如歌2022",
      artist: "说说Crystal",
      url: "https://music.163.com/song/media/outer/url?id=1924062187.mp3",
      cover: "https://p2.music.126.net/TZ4F6BIs8noHLylA2RP6cg==/109951167098961921.jpg"
    },
    {
      name: "フローリア",
      artist: "ヒバナ",
      url: "https://music.163.com/song/media/outer/url?id=2040876720.mp3",
      cover: "https://p2.music.126.net/jYarj31y1IWQvw_Ggud7Fw==/109951168556904429.jpg"
    },
    {
      name: "星回",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2063487855.mp3",
      cover: "https://p2.music.126.net/u283QqTD2qzkkix6QMR01A==/109951169586382818.jpg"
    },
    {
      name: "秋江枫月夜·殿堂版(洛天依AI乐正绫V5·鬼面P)",
      artist: "青天纤云·纳兰清婧 / 洛天依 / 末离 / 鬼面P / 莫逆",
      url: "https://music.163.com/song/media/outer/url?id=2014820794.mp3",
      cover: "https://p2.music.126.net/xG5ATOoaVhtBuwQRiaL3qg==/109951168237597024.jpg"
    },
    {
      name: "山塘恋雨（X Studio洛天依AI）",
      artist: "青天纤云·纳兰清婧 / 洛天依 / 灰儿白 / 砖厂浪人 / 洛翼党",
      url: "https://music.163.com/song/media/outer/url?id=2125941632.mp3",
      cover: "https://p2.music.126.net/-nn-Lf7TEnJPaHvBwrSLEQ==/109951169331864093.jpg"
    },
    {
      name: "平江午茶（ACE Studio AI）",
      artist: "青天纤云·纳兰清婧 / 洛天依 / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2094903121.mp3",
      cover: "https://p2.music.126.net/Mm55nr7zWzZuXy59BkmIKQ==/109951169016599316.jpg"
    },
    {
      name: "积雪",
      artist: "Soda纯白 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1821065178.mp3",
      cover: "https://p2.music.126.net/Dg494cmMNR64DJpTidlOtw==/109951173206591828.jpg"
    },
    {
      name: "在银河中孤独摇摆",
      artist: "知更鸟 / HOYO-MiX / Chevy",
      url: "https://music.163.com/song/media/outer/url?id=2155423467.mp3",
      cover: "https://p2.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg"
    },
    {
      name: "Cloud Sky (云空)",
      artist: "嘉永灿",
      url: "https://music.163.com/song/media/outer/url?id=1490004443.mp3",
      cover: "https://p2.music.126.net/yAtlHKxyI87T6VY45aROZg==/109951165416117554.jpg"
    },
    {
      name: "T.A.O.",
      artist: "じん / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1392033735.mp3",
      cover: "https://p2.music.126.net/S92ZPrgxBcIYN8Dwm3H9wg==/109951164375151193.jpg"
    },
    {
      name: "使一颗心免于哀伤",
      artist: "知更鸟 / HOYO-MiX / Chevy",
      url: "https://music.163.com/song/media/outer/url?id=2155422573.mp3",
      cover: "https://p1.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg"
    },
    {
      name: "羡人间",
      artist: "乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2160414447.mp3",
      cover: "https://p1.music.126.net/GvprKPA6j4cLm6njsz8d2A==/109951169632321357.jpg"
    },
    {
      name: "瑟小姐",
      artist: "小缘",
      url: "https://music.163.com/song/media/outer/url?id=2150425511.mp3",
      cover: "https://p1.music.126.net/TTNmo6g2jUh4JPsfWJz88g==/109951169482249296.jpg"
    },
    {
      name: "请拨打春日热线",
      artist: "闹闹丶 / 洛天依 / 鬼面P",
      url: "https://music.163.com/song/media/outer/url?id=2136494887.mp3",
      cover: "https://p2.music.126.net/sy2Oh3NkdKqhaKcO4ERvDw==/109951169419054171.jpg"
    },
    {
      name: "千金胧梦",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2158192232.mp3",
      cover: "https://p2.music.126.net/pJuOPnQqKmAuFPzE0uGHDQ==/109951169611256504.jpg"
    },
    {
      name: "天知河",
      artist: "说说Crystal",
      url: "https://music.163.com/song/media/outer/url?id=2135238753.mp3",
      cover: "https://p2.music.126.net/8_3Ojj8RQvHov28ZFCM39w==/109951169407963813.jpg"
    },
    {
      name: "灯如明月在中天 Moonlit Lanterns",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2140118345.mp3",
      cover: "https://p2.music.126.net/MlajrhHqU-33qDnu41p11w==/109951169447872203.jpg"
    },
    {
      name: "烁光回流",
      artist: "乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2042928579.mp3",
      cover: "https://p2.music.126.net/CJky3uKRVzMOTIHX4OdBTg==/109951168573863496.jpg"
    },
    {
      name: "姑苏画舫录-KOOSO Pleasure-Boat Travel-Notes",
      artist: "青天纤云·纳兰清婧 / 砖厂浪人 / 洛天依 / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2094903334.mp3",
      cover: "https://p2.music.126.net/ol-ttJ89HUn4KHTTYrLdBA==/109951169016643967.jpg"
    },
    {
      name: "溯游从之",
      artist: "闹闹丶 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1999582361.mp3",
      cover: "https://p2.music.126.net/HKM6Ee_mlsw006Tn-GMD3w==/109951168070311966.jpg"
    },
    {
      name: "Spring Has Come",
      artist: "春野",
      url: "https://music.163.com/song/media/outer/url?id=2145308211.mp3",
      cover: "https://p2.music.126.net/xNsReKc4ZSIn9_P2HuvzTA==/109951169491978281.jpg"
    },
    {
      name: "夏日的第三次结束",
      artist: "Orange Soda / 洛天依 / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2069729894.mp3",
      cover: "https://p2.music.126.net/81A-14Hw1GIbAOqSXHf3Rg==/109951168802366279.jpg"
    },
    {
      name: "HANNARI",
      artist: "BPM15Q / Yunomi / 苺りなはむ",
      url: "https://music.163.com/song/media/outer/url?id=443292321.mp3",
      cover: "https://p2.music.126.net/t3sUZ8YvP04WAzFrOzO__g==/109951168568792278.jpg"
    },
    {
      name: "秋鶄岚夜曲",
      artist: "末离 / 青天纤云·纳兰清婧 / 洛天依 / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2020204377.mp3",
      cover: "https://p2.music.126.net/5WjLGf-Mzh_3i3hO77Wmmg==/109951168289223031.jpg"
    },
    {
      name: "灯火元夕",
      artist: "闹闹丶 / 洛天依 / 鬼面P",
      url: "https://music.163.com/song/media/outer/url?id=2136029833.mp3",
      cover: "https://p2.music.126.net/IZmQsWQcSB22sMv1iVKweQ==/109951169414870913.jpg"
    },
    {
      name: "人生摆态",
      artist: "里里",
      url: "https://music.163.com/song/media/outer/url?id=2036965945.mp3",
      cover: "https://p2.music.126.net/qHQTbAYeqZ3akrWv5qsKnQ==/109951168528302040.jpg"
    },
    {
      name: "凌晨的鸟",
      artist: "里里",
      url: "https://music.163.com/song/media/outer/url?id=2077510309.mp3",
      cover: "https://p2.music.126.net/T192FsUQGz5E0l9DzD2SPg==/109951168877250441.jpg"
    },
    {
      name: "天灵灵地灵灵",
      artist: "天赐不了墨Q",
      url: "https://music.163.com/song/media/outer/url?id=2080802112.mp3",
      cover: "https://p2.music.126.net/gC9akvK2ZNptX8gkl_2WpQ==/109951169375367364.jpg"
    },
    {
      name: "希望有羽毛和翅膀",
      artist: "知更鸟 / HOYO-MiX / Chevy",
      url: "https://music.163.com/song/media/outer/url?id=2155423468.mp3",
      cover: "https://p2.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg"
    },
    {
      name: "洞若观心",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2085627658.mp3",
      cover: "https://p2.music.126.net/tjeThL9LkbFDWgZraV2V2g==/109951168943663349.jpg"
    },
    {
      name: "待我回返",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2090787798.mp3",
      cover: "https://p2.music.126.net/-OmiC72DAvoShuJn-cpT5w==/109951168981623526.jpg"
    },
    {
      name: "爷爷的故乡",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1804552397.mp3",
      cover: "https://p2.music.126.net/vZQ6fdcFVjhUJB96BaEnwg==/109951165543194247.jpg"
    },
    {
      name: "观星者 Stargazer",
      artist: "Akie秋绘",
      url: "https://music.163.com/song/media/outer/url?id=2081306013.mp3",
      cover: "https://p2.music.126.net/0fT9GQPxu0Kt0hYHmixA_g==/109951168908725060.jpg"
    },
    {
      name: "雪山之眼",
      artist: "洛天依Official / 旦增益西",
      url: "https://music.163.com/song/media/outer/url?id=2141645940.mp3",
      cover: "https://p2.music.126.net/VPgSNRg7Lma1WIl7W6UVvg==/109951169462100800.jpg"
    },
    {
      name: "天山之外",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2145230796.mp3",
      cover: "https://p1.music.126.net/VPgSNRg7Lma1WIl7W6UVvg==/109951169462100800.jpg"
    },
    {
      name: "黔歌行",
      artist: "洛天依Official / 春冬蝶",
      url: "https://music.163.com/song/media/outer/url?id=2144608373.mp3",
      cover: "https://p1.music.126.net/VPgSNRg7Lma1WIl7W6UVvg==/109951169462100800.jpg"
    },
    {
      name: "告白（Acoustic）",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1335706080.mp3",
      cover: "https://p1.music.126.net/hXmwSj5eR3vRt6Z3GqS4MA==/109951163749704064.jpg"
    },
    {
      name: "又活了一天",
      artist: "庄东茹（豆芽鱼）",
      url: "https://music.163.com/song/media/outer/url?id=2117545694.mp3",
      cover: "https://p1.music.126.net/rUhPdqdUNNLBtNnqph7Ulw==/109951170175556614.jpg"
    },
    {
      name: "SHEESH",
      artist: "子酱酱酱酱",
      url: "https://music.163.com/song/media/outer/url?id=2141140071.mp3",
      cover: "https://p1.music.126.net/jTcwIhS0SthIqTmRDOohbw==/109951169458267714.jpg"
    },
    {
      name: "Space Walker",
      artist: "Kirara Magic Radio",
      url: "https://music.163.com/song/media/outer/url?id=2057753073.mp3",
      cover: "https://p1.music.126.net/dRY_GgyX8BlHdvVi1QmqGA==/109951168692140603.jpg"
    },
    {
      name: "2024·面朝大海，举起约定的花束",
      artist: "Akie秋绘 / 夏璃夜 / 祈Inory / 诺言Jason / 熊子 / 林簌 / 朵芊 / 冷玄星 / 漆柚 / 萧忆情Alex",
      url: "https://music.163.com/song/media/outer/url?id=2113358616.mp3",
      cover: "https://p1.music.126.net/QqZ9jeewcFO9UsIRn_wY2A==/109951169225768603.jpg"
    },
    {
      name: "今晚派对",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=2068962008.mp3",
      cover: "https://p1.music.126.net/_lFgZ18iRz-UxBUE5mTIWw==/109951168788407154.jpg"
    },
    {
      name: "不怕",
      artist: "铁铁元",
      url: "https://music.163.com/song/media/outer/url?id=2042932972.mp3",
      cover: "https://p1.music.126.net/cjZVtC1pxtLNlAvcHmFXXQ==/109951168574555163.jpg"
    },
    {
      name: "可以摆烂咯",
      artist: "庄东茹（豆芽鱼）",
      url: "https://music.163.com/song/media/outer/url?id=2042895890.mp3",
      cover: "https://p1.music.126.net/lZ7PF1PxAI9mvf1goLwOMw==/109951168573608677.jpg"
    },
    {
      name: "浮生若有归 Journeying Towards Belonging",
      artist: "苏逸_Suyi / 洛萱 / 茉末酱momo / HoYoFair",
      url: "https://music.163.com/song/media/outer/url?id=2093298048.mp3",
      cover: "https://p2.music.126.net/buIxG_syZSn4fmr0DRg9qQ==/109951169003774335.jpg"
    },
    {
      name: "亲爱的少年(翠花不太脆 X 影视飓风)",
      artist: "玩儿 / 逐梦",
      url: "https://music.163.com/song/media/outer/url?id=2105195656.mp3",
      cover: "https://p2.music.126.net/_yQmVNDyLdTvhRC3wnh9Mg==/109951169132379300.jpg"
    },
    {
      name: "懒人",
      artist: "空气凝 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1427404085.mp3",
      cover: "https://p2.music.126.net/0eETgs3LwDE-IipCN94sig==/109951164758601656.jpg"
    },
    {
      name: "眉间不点砂",
      artist: "KyuRu☆ / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1306320711.mp3",
      cover: "https://p2.music.126.net/_ld8rQSaIAyFCKsRQs5pDQ==/109951163516175886.jpg"
    },
    {
      name: "无聊世界改造计划",
      artist: "Grid格子 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1969791664.mp3",
      cover: "https://p2.music.126.net/_Tj4r8WT-8qPUw5K6J4_Ug==/109951167749343363.jpg"
    },
    {
      name: "暗恋人类日记",
      artist: "Bo Peep / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1962946869.mp3",
      cover: "https://p2.music.126.net/7lmNUCceXOW0aP_7EpwtKQ==/109951167653673138.jpg"
    },
    {
      name: "独",
      artist: "闹闹丶 / 洛天依 / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=1879526493.mp3",
      cover: "https://p2.music.126.net/6QDW4k8kEp4jftmBQLA8iw==/109951166434900115.jpg"
    },
    {
      name: "花月成双",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=1902474985.mp3",
      cover: "https://p2.music.126.net/En0YUV4btXp8MWqygz5a9A==/109951166715724405.jpg"
    },
    {
      name: "毕业通知",
      artist: "WOVOP / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2062383170.mp3",
      cover: "https://p2.music.126.net/D9gwojlQb3_gDXObT4PpMQ==/109951168725977276.jpg"
    },
    {
      name: "超远距链接【茜色诗集】",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=444803276.mp3",
      cover: "https://p2.music.126.net/GULe52JbCtVW0vjXZ1o2yw==/109951162817808719.jpg"
    },
    {
      name: "星电感应",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=477683799.mp3",
      cover: "https://p2.music.126.net/-L5wQog_t0EtIvtqa27XNA==/109951162925835328.jpg"
    },
    {
      name: "别让我担心 (Acoustic Ver.)",
      artist: "ChiliChill乐团",
      url: "https://music.163.com/song/media/outer/url?id=2099318071.mp3",
      cover: "https://p2.music.126.net/35VZ2sH_YjocnO4w3eh4pg==/109951169052426208.jpg"
    },
    {
      name: "沉鱼 (Live)",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1812257790.mp3",
      cover: "https://p2.music.126.net/M5caPr61KBnVyhvsWDpWIw==/109951165631381631.jpg"
    },
    {
      name: "相对时间",
      artist: "冰兔",
      url: "https://music.163.com/song/media/outer/url?id=2029416215.mp3",
      cover: "https://p2.music.126.net/xvhfhOMYAkay4bG4SyqLJQ==/109951168460947110.jpg"
    },
    {
      name: "死兆将至 Death Approaches",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2095949731.mp3",
      cover: "https://p2.music.126.net/2OyyivDKfscFi1cpcYW_MQ==/109951169025204258.jpg"
    },
    {
      name: "未完结旅程",
      artist: "苏逸_Suyi / 喵☆酱",
      url: "https://music.163.com/song/media/outer/url?id=2111974830.mp3",
      cover: "https://p2.music.126.net/5ddABvulPZ6n-KW4H4yWMQ==/109951169212784372.jpg"
    },
    {
      name: "Science&Dreamer",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1351603859.mp3",
      cover: "https://p2.music.126.net/gAs-VGorwakon5pizX8YQQ==/109951163922974480.jpg"
    },
    {
      name: "Oracle",
      artist: "黄霄雲 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1882642256.mp3",
      cover: "https://p2.music.126.net/kXbv0KSaLcoaCvtMqxezGA==/109951166468775827.jpg"
    },
    {
      name: "泛泛人类不会祈祷 人声本家",
      artist: "warma",
      url: "https://music.163.com/song/media/outer/url?id=2089729261.mp3",
      cover: "https://p2.music.126.net/MzjFyjhJ9TbqEnAm6EISLg==/109951168974367046.jpg"
    },
    {
      name: "糖果色恋爱学",
      artist: "熊子 / ANK",
      url: "https://music.163.com/song/media/outer/url?id=465807622.mp3",
      cover: "https://p2.music.126.net/SrXjTwef2nMNo1PmERm9AQ==/109951162877158539.jpg"
    },
    {
      name: "溜达谣",
      artist: "iKz / 小可学妹 / 阿扣叩叩 / 漆柚",
      url: "https://music.163.com/song/media/outer/url?id=2123382185.mp3",
      cover: "https://p1.music.126.net/W1oHqGpCrasHhzjoUv5BZg==/109951169306101301.jpg"
    },
    {
      name: "在出发之前",
      artist: "陶典 / Hanser / 爆裂菊是也 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2124643510.mp3",
      cover: "https://p1.music.126.net/MnkRf9yo3GUUP2Gy-umBSw==/109951169318103151.jpg"
    },
    {
      name: "幹物女(WeiWei)",
      artist: "封茗囧菌",
      url: "https://music.163.com/song/media/outer/url?id=35345243.mp3",
      cover: "https://p1.music.126.net/yTWvgmSXFkC0rKJO2nJHhw==/109951168638546975.jpg"
    },
    {
      name: "留星",
      artist: "因你而在的梦",
      url: "https://music.163.com/song/media/outer/url?id=1969338088.mp3",
      cover: "https://p1.music.126.net/l_TTPvn9K_9GQ6-FtS6VdA==/109951167743648202.jpg"
    },
    {
      name: "雨过天晴时",
      artist: "街憬 / 抹茶茶子cha",
      url: "https://music.163.com/song/media/outer/url?id=2123307979.mp3",
      cover: "https://p1.music.126.net/9DJPJUPUG2RwZBnAaA9YDA==/109951168264949359.jpg"
    },
    {
      name: "彩虹节拍",
      artist: "易言 / 肥皂菌丨珉珉的猫咪丨 / 赵方婧 / 音阙诗听 / 西瓜Kune",
      url: "https://music.163.com/song/media/outer/url?id=1420621179.mp3",
      cover: "https://p1.music.126.net/1hsuXfDT6RwgToxx_SvuiQ==/109951164673629376.jpg"
    },
    {
      name: "A Story ~Chapter 1~",
      artist: "Shiroi-Ice",
      url: "https://music.163.com/song/media/outer/url?id=1477158302.mp3",
      cover: "https://p1.music.126.net/nmS-ZUxf1x99_X_mOAhBnQ==/109951165300179686.jpg"
    },
    {
      name: "与你同行B~with~U",
      artist: "幽舞越山",
      url: "https://music.163.com/song/media/outer/url?id=1946207162.mp3",
      cover: "https://p1.music.126.net/DexWhf0jeekS-VldX8lN7A==/109951167398569505.jpg"
    },
    {
      name: "光",
      artist: "茶理理",
      url: "https://music.163.com/song/media/outer/url?id=1885205681.mp3",
      cover: "https://p1.music.126.net/v1qBRzgnfaAwdzU-UP14wA==/109951166502061116.jpg"
    },
    {
      name: "月巷",
      artist: "星葵77 / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2123816639.mp3",
      cover: "https://p1.music.126.net/gGlxMNxHKkCwJeD--vKvNQ==/109951169310962799.jpg"
    },
    {
      name: "PARANOIA",
      artist: "HEARTSTEEL / League of Legends / BAEKHYUN / tobi lou / ØZI / Cal Scruby",
      url: "https://music.163.com/song/media/outer/url?id=2093535303.mp3",
      cover: "https://p1.music.126.net/sCc6dGylOglPmDx5A64o6A==/109951169506446406.jpg"
    },
    {
      name: "不如逃吧",
      artist: "呜米 / 咩栗",
      url: "https://music.163.com/song/media/outer/url?id=2098487491.mp3",
      cover: "https://p1.music.126.net/5OxuklzYtDEPSWptBOfi7A==/109951169045364083.jpg"
    },
    {
      name: "快乐手帐",
      artist: "说说Crystal",
      url: "https://music.163.com/song/media/outer/url?id=1970344021.mp3",
      cover: "https://p1.music.126.net/vGaXIdOa5R6pLa1RXCsSXg==/109951167756797492.jpg"
    },
    {
      name: "阿肝(AGAIN）",
      artist: "阿梓",
      url: "https://music.163.com/song/media/outer/url?id=2123513838.mp3",
      cover: "https://p1.music.126.net/sJBdrEY9zVqv6GLbJjpM1A==/109951169178991643.jpg"
    },
    {
      name: "别让我担心",
      artist: "多多poi",
      url: "https://music.163.com/song/media/outer/url?id=2086092043.mp3",
      cover: "https://p1.music.126.net/-uQYqIiw-FL7sHBr6mH-EA==/109951168946560719.jpg"
    },
    {
      name: "多谢你担心",
      artist: "多多poi",
      url: "https://music.163.com/song/media/outer/url?id=2130695471.mp3",
      cover: "https://p1.music.126.net/CplnLhJjuE8JtHF8_p8ozA==/109951169372375884.jpg"
    },
    {
      name: "不安灵魂收容所",
      artist: "ChiliChill乐团",
      url: "https://music.163.com/song/media/outer/url?id=2051582470.mp3",
      cover: "https://p1.music.126.net/iPZBpPSocQ4q4v0JEAzrEw==/109951168647486426.jpg"
    },
    {
      name: "别让我担心",
      artist: "ChiliChill乐团",
      url: "https://music.163.com/song/media/outer/url?id=2099318072.mp3",
      cover: "https://p1.music.126.net/vyzSR8UqNw0u9wD3f-JkAQ==/109951169189600320.jpg"
    },
    {
      name: "问神",
      artist: "王朝1982",
      url: "https://music.163.com/song/media/outer/url?id=2123242601.mp3",
      cover: "https://p1.music.126.net/akJ1moi4YwxaCAWmFoe3nQ==/109951169306072365.jpg"
    },
    {
      name: "下一个远方",
      artist: "喵☆酱 / 爆裂菊是也 / 花玲 / 彭博 / 钱琛 / 苏逸_Suyi",
      url: "https://music.163.com/song/media/outer/url?id=2123158258.mp3",
      cover: "https://p1.music.126.net/Yq6yZck4iSAqVLoISXMPYA==/109951169305472447.jpg"
    },
    {
      name: "歌行四方",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2078368206.mp3",
      cover: "https://p1.music.126.net/mEig0MbM-u-W3MCMo37RcQ==/109951168884148478.jpg"
    },
    {
      name: "天上的风",
      artist: "洛天依Official / 哈拉木吉",
      url: "https://music.163.com/song/media/outer/url?id=2111775853.mp3",
      cover: "https://p1.music.126.net/VPgSNRg7Lma1WIl7W6UVvg==/109951169462100800.jpg"
    },
    {
      name: "一半一半",
      artist: "鸟爷ToriSama / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=32628084.mp3",
      cover: "https://p1.music.126.net/zHKkUDnb745V76_bBQgBAw==/7928578348252535.jpg"
    },
    {
      name: "人鱼电台 feat.洛天依",
      artist: "iKz / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1973540475.mp3",
      cover: "https://p1.music.126.net/hC_3b1vMzs8diXoUezvzTQ==/109951167774415524.jpg"
    },
    {
      name: "着眼",
      artist: "双笙（陈元汐）",
      url: "https://music.163.com/song/media/outer/url?id=2108491079.mp3",
      cover: "https://p1.music.126.net/dcb0XCCgVlnMV94-0tx1eA==/109951171255952022.jpg"
    },
    {
      name: "不眠之夜 【兰音】",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=2122220814.mp3",
      cover: "https://p1.music.126.net/ueOUYnax9TdN9yRwCbmUtA==/109951169297216124.jpg"
    },
    {
      name: "不眠之夜",
      artist: "张杰 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2122308127.mp3",
      cover: "https://p1.music.126.net/sZ-rACbFrybF0x_lI6XNMw==/109951169297766755.jpg"
    },
    {
      name: "Insane",
      artist: "Black Gryph0n / Baasik",
      url: "https://music.163.com/song/media/outer/url?id=1850706877.mp3",
      cover: "https://p1.music.126.net/b6bt1NNzCDkK9LK0EUEnEw==/109951166060842995.jpg"
    },
    {
      name: "空行不羁 Overlord of the Thunderstorm",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1879108774.mp3",
      cover: "https://p2.music.126.net/ZephLxkqnVSKXu-pqOZB_g==/109951166426734854.jpg"
    },
    {
      name: "Rule the World (Instrumental)",
      artist: "TheFatRat / AleXa",
      url: "https://music.163.com/song/media/outer/url?id=1468928411.mp3",
      cover: "https://p2.music.126.net/Dj8wgo2F7qyjJaS8zRAgfw==/109951169136534536.jpg"
    },
    {
      name: "独りうた ～September調子はどうだい～",
      artist: "うじたまい",
      url: "https://music.163.com/song/media/outer/url?id=1976821764.mp3",
      cover: "https://p2.music.126.net/Lzpf72u_DeUnbsS--o-0Qg==/109951167830618722.jpg"
    },
    {
      name: "防晒",
      artist: "多多poi",
      url: "https://music.163.com/song/media/outer/url?id=1472581969.mp3",
      cover: "https://p2.music.126.net/dpJ8BbO0Al39b9UVt6hrjg==/109951165253010590.jpg"
    },
    {
      name: "有关星空的寓言集•其一 Fables About the Stars Part 1",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2095949728.mp3",
      cover: "https://p2.music.126.net/2OyyivDKfscFi1cpcYW_MQ==/109951169025204258.jpg"
    },
    {
      name: "【纯音乐】1.6版本「庸与神的冠冕」专题展示页",
      artist: "阿帝",
      url: "https://music.163.com/song/media/outer/url?id=2109472675.mp3",
      cover: "https://p2.music.126.net/6kK5LnVkVfn_14hDX_JEtA==/109951169170295673.jpg"
    },
    {
      name: "未命名",
      artist: "TV_Ankar",
      url: "https://music.163.com/song/media/outer/url?id=2112799191.mp3",
      cover: "https://p2.music.126.net/OSqn5oW0n96k0KcIZ4cM2A==/109951169219853477.jpg"
    },
    {
      name: "存分",
      artist: "苺りなはむ",
      url: "https://music.163.com/song/media/outer/url?id=1926144232.mp3",
      cover: "https://p2.music.126.net/2VJdNxyRVs9HzJvUeF9-4A==/109951167894782520.jpg"
    },
    {
      name: "白い街の旅人",
      artist: "朱彦安 / 夏野Natsuno",
      url: "https://music.163.com/song/media/outer/url?id=1915515491.mp3",
      cover: "https://p2.music.126.net/7P0J4mNCiB8NX7lsqYfC2w==/109951166987691272.jpg"
    },
    {
      name: "大摆（cover 大喜）",
      artist: "早凉",
      url: "https://music.163.com/song/media/outer/url?id=1909520555.mp3",
      cover: "https://p2.music.126.net/7nPm3lKbRk7GV_q-H9AYog==/109951166894158583.jpg"
    },
    {
      name: "Touch Me",
      artist: "Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=1804630591.mp3",
      cover: "https://p2.music.126.net/MZnjT-3Q89qX1w8hS9tw-A==/109951165543760358.jpg"
    },
    {
      name: "シンデレラベイビー",
      artist: "Stereoman / Yunomi / アンテナカール",
      url: "https://music.163.com/song/media/outer/url?id=439915177.mp3",
      cover: "https://p2.music.126.net/e7XG7ONpKWJiiCp8urrDHA==/109951165690559094.jpg"
    },
    {
      name: "霓虹甜心",
      artist: "早稻叽",
      url: "https://music.163.com/song/media/outer/url?id=1926575111.mp3",
      cover: "https://p2.music.126.net/IsllGHir8SV5Fwb7A3R1Qw==/109951167128783633.jpg"
    },
    {
      name: "夏夜庆典",
      artist: "花玲 / 宴宁",
      url: "https://music.163.com/song/media/outer/url?id=1868862835.mp3",
      cover: "https://p2.music.126.net/dl2YY7i8Iss1yMQyZdwAUQ==/109951166289780238.jpg"
    },
    {
      name: "勾指起誓",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1359165195.mp3",
      cover: "https://p2.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg"
    },
    {
      name: "MAYDAY",
      artist: "TheFatRat / Laura Brehm",
      url: "https://music.163.com/song/media/outer/url?id=547764799.mp3",
      cover: "https://p2.music.126.net/SCcWjIHZryyZMx-y5jv6lg==/109951172949253863.jpg"
    },
    {
      name: "霜雪千年",
      artist: "双笙（陈元汐） / 封茗囧菌",
      url: "https://music.163.com/song/media/outer/url?id=409650851.mp3",
      cover: "https://p2.music.126.net/MlJ3IKOYOGJyrHtCTuLrqg==/18198016951567518.jpg"
    },
    {
      name: "1001夜",
      artist: "KBShinya / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1423014472.mp3",
      cover: "https://p2.music.126.net/2_-Hb--Axq6Ab3UoPT2m1A==/109951164703398633.jpg"
    },
    {
      name: "愚痴り合い～聞いてよ最近彼氏がさ、～",
      artist: "ASOBI同盟",
      url: "https://music.163.com/song/media/outer/url?id=1937817040.mp3",
      cover: "https://p2.music.126.net/SlIL5e2d9czNzz3Kz1XrSQ==/109951167287479180.jpg"
    },
    {
      name: "鬼火の童・鬼切、虎徹にございます!",
      artist: "増田俊郎 / 织风结",
      url: "https://music.163.com/song/media/outer/url?id=28411038.mp3",
      cover: "https://p2.music.126.net/dR8e_QlBCzySW-hSSbXPjQ==/109951170979542714.jpg"
    },
    {
      name: "Piano Sonata No. 10 in C Major, K. 330: I. Allegro moderato",
      artist: "Stéphane Blet",
      url: "https://music.163.com/song/media/outer/url?id=1309415239.mp3",
      cover: "https://p2.music.126.net/Z1l9lup351qd0SLZBxXauA==/109951163546670634.jpg"
    },
    {
      name: "Mood",
      artist: "24kGoldn / iann dior",
      url: "https://music.163.com/song/media/outer/url?id=1464325108.mp3",
      cover: "https://p1.music.126.net/LfAiSYcf5FLgfvVtLzN77w==/109951165165797187.jpg"
    },
    {
      name: "逃脱爱情",
      artist: "因你而在的梦 / 小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=2004966273.mp3",
      cover: "https://p1.music.126.net/ptp-UHSUmJbA4D-I8-IroA==/109951168125938676.jpg"
    },
    {
      name: "皮影",
      artist: "因你而在的梦 / 小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=2010454769.mp3",
      cover: "https://p1.music.126.net/H1yf6sjYiqnYMADJgRfnQA==/109951167706770345.jpg"
    },
    {
      name: "限定游戏",
      artist: "七海Nana7mi / 阿梓 / 小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=1993256090.mp3",
      cover: "https://p1.music.126.net/HAvmCNZevVVDLpFLHrmXnw==/109951172369838009.jpg"
    },
    {
      name: "旧梦 feat.小可学妹 & 艾因Eine",
      artist: "iKz / 小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=1921048301.mp3",
      cover: "https://p1.music.126.net/p9ioPcbusTu1PpIu1_tYrQ==/109951167039969543.jpg"
    },
    {
      name: "歌行四方",
      artist: "小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=2088789329.mp3",
      cover: "https://p1.music.126.net/V87IYFLnsEmdtWfbfTB7gQ==/109951168970249754.jpg"
    },
    {
      name: "冬袄",
      artist: "因你而在的梦 / 小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=1921612894.mp3",
      cover: "https://p1.music.126.net/42L7z_kR-M6ozaIXLiAfwQ==/109951167066646651.jpg"
    },
    {
      name: "一只呆呆鸟",
      artist: "因你而在的梦 / 顾子韵_w",
      url: "https://music.163.com/song/media/outer/url?id=2021188887.mp3",
      cover: "https://p1.music.126.net/6K0QTonxerUvYY6yLFY4yA==/109951168297312046.jpg"
    },
    {
      name: "DVD",
      artist: "因你而在的梦 / 穆小泠",
      url: "https://music.163.com/song/media/outer/url?id=1966388555.mp3",
      cover: "https://p1.music.126.net/H1yf6sjYiqnYMADJgRfnQA==/109951167706770345.jpg"
    },
    {
      name: "朱砂痣",
      artist: "因你而在的梦",
      url: "https://music.163.com/song/media/outer/url?id=1969333318.mp3",
      cover: "https://p1.music.126.net/l_TTPvn9K_9GQ6-FtS6VdA==/109951167743648202.jpg"
    },
    {
      name: "赔我做梦",
      artist: "因你而在的梦",
      url: "https://music.163.com/song/media/outer/url?id=1969338091.mp3",
      cover: "https://p1.music.126.net/l_TTPvn9K_9GQ6-FtS6VdA==/109951167743648202.jpg"
    },
    {
      name: "夏末与童年",
      artist: "三无Marblue",
      url: "https://music.163.com/song/media/outer/url?id=1895562245.mp3",
      cover: "https://p1.music.126.net/p7gcA3P_iGfq-yaG8NAHyQ==/109951167420757780.jpg"
    },
    {
      name: "德德德",
      artist: "Project Mons / 花玲",
      url: "https://music.163.com/song/media/outer/url?id=1915730110.mp3",
      cover: "https://p1.music.126.net/Thzxf37TXH614RwgSmC_zQ==/109951166989680613.jpg"
    },
    {
      name: "育空河",
      artist: "咩栗",
      url: "https://music.163.com/song/media/outer/url?id=2019299993.mp3",
      cover: "https://p1.music.126.net/SHbhbl0LE-HC77h03KeCuw==/109951167126137785.jpg"
    },
    {
      name: "伴宅日记（人声本家）",
      artist: "千月兔 / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1320584618.mp3",
      cover: "https://p1.music.126.net/acdPJJuQyEU1hDQr_VauIg==/109951163626003406.jpg"
    },
    {
      name: "芒种",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1453639400.mp3",
      cover: "https://p1.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg"
    },
    {
      name: "明天一定起得来",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1982798729.mp3",
      cover: "https://p1.music.126.net/VxH0q0HQmXEoHO1UyXzokg==/109951167892178816.jpg"
    },
    {
      name: "仲夏夜之梦",
      artist: "兔裹煎蛋卷 / 花玲 / 祁澈 / 格里特 / 辞霜 / 浮光碎 / Mrs_Han / 惊弦",
      url: "https://music.163.com/song/media/outer/url?id=1848293060.mp3",
      cover: "https://p1.music.126.net/Bq3O3Fh1eAuhv0WfKuM0gA==/109951166036294185.jpg"
    },
    {
      name: "月満ちる夜 ～喜びの神域 エウプロシュネ～",
      artist: "祖堅正慶",
      url: "https://music.163.com/song/media/outer/url?id=2055269903.mp3",
      cover: "https://p1.music.126.net/bzwxHEBES6tsBBnHlQtfng==/109951168675807914.jpg"
    },
    {
      name: "Even LA",
      artist: "Snareskin / Twan Ray",
      url: "https://music.163.com/song/media/outer/url?id=1368532707.mp3",
      cover: "https://p1.music.126.net/0hLAK6R2vJdQNBeJ4LMTAA==/109951168278751699.jpg"
    },
    {
      name: "呜哇哈哈哈",
      artist: "iKz / 折原露露",
      url: "https://music.163.com/song/media/outer/url?id=2097121044.mp3",
      cover: "https://p1.music.126.net/3Zt_pR1AAvXbbCGLNuxQNQ==/109951169035376371.jpg"
    },
    {
      name: "你是星辰",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1804552400.mp3",
      cover: "https://p1.music.126.net/vZQ6fdcFVjhUJB96BaEnwg==/109951165543194247.jpg"
    },
    {
      name: "Euphoria (feat. Tsugumi Nagahara)",
      artist: "PIKASONIC / Tsugumi Nagahara / Tatsunoshin",
      url: "https://music.163.com/song/media/outer/url?id=1899317143.mp3",
      cover: "https://p2.music.126.net/IfFInkWbJDd8rtmIm-yWQw==/109951166673096323.jpg"
    },
    {
      name: "弈",
      artist: "祖娅纳惜",
      url: "https://music.163.com/song/media/outer/url?id=1919693433.mp3",
      cover: "https://p2.music.126.net/cF8xHTEBZi3zZvcqi-LIWQ==/109951167041768109.jpg"
    },
    {
      name: "天文馆的猫",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1804555743.mp3",
      cover: "https://p2.music.126.net/vZQ6fdcFVjhUJB96BaEnwg==/109951165543194247.jpg"
    },
    {
      name: "夏夜漫话",
      artist: "平安小财娘 / 三无Marblue",
      url: "https://music.163.com/song/media/outer/url?id=1851632445.mp3",
      cover: "https://p2.music.126.net/Jn8NYmjxeGlys82LSfEm2w==/109951166070836856.jpg"
    },
    {
      name: "Real me (2233版)",
      artist: "22娘 / 33娘",
      url: "https://music.163.com/song/media/outer/url?id=1804087293.mp3",
      cover: "https://p2.music.126.net/PIim5QTgLN0zt2w5AYY_cA==/109951172369936991.jpg"
    },
    {
      name: "可愛くてごめん",
      artist: "茶理理 / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=2061189199.mp3",
      cover: "https://p2.music.126.net/5rL6IYW-NOqO5X_1ZL7M_g==/109951168717059467.jpg"
    },
    {
      name: "何来有神宫",
      artist: "中国绊爱 / 兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=1887060596.mp3",
      cover: "https://p2.music.126.net/qitmHvjTgYLrUTPPWWATkg==/109951166519071880.jpg"
    },
    {
      name: "Wish You",
      artist: "KBShinya / 萧忆情Alex / 西瓜JUN / 哦漏 / 少恭 / YUKIri / Hanser / 三无Marblue / 双笙（陈元汐） / 茶理理 / 菠萝赛东 / 小缘",
      url: "https://music.163.com/song/media/outer/url?id=1365468238.mp3",
      cover: "https://p2.music.126.net/wM0AQcy0Lr4-NbIcsYxJMg==/109951164076241692.jpg"
    },
    {
      name: "偷腥",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1982798730.mp3",
      cover: "https://p2.music.126.net/VxH0q0HQmXEoHO1UyXzokg==/109951167892178816.jpg"
    },
    {
      name: "一梦忘川",
      artist: "KBShinya / 三无Marblue / Hanser / 哦漏 / 祖娅纳惜 / 少恭",
      url: "https://music.163.com/song/media/outer/url?id=1822529907.mp3",
      cover: "https://p2.music.126.net/oBYS_eZ1n2rf8z_LtGQzqw==/109951165753839511.jpg"
    },
    {
      name: "魔女日志（人声本家）",
      artist: "小野道ono / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=484972376.mp3",
      cover: "https://p2.music.126.net/wPE3Z922KRX5mo94eGgi5g==/109951162923791285.jpg"
    },
    {
      name: "愛言葉IV（鹿乃xLONxHanser）",
      artist: "Hanser / 鹿乃 / ろん",
      url: "https://music.163.com/song/media/outer/url?id=2013870113.mp3",
      cover: "https://p2.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg"
    },
    {
      name: "一介书生",
      artist: "洛少爷",
      url: "https://music.163.com/song/media/outer/url?id=2103788016.mp3",
      cover: "https://p2.music.126.net/TrU-NpCzKfrOna8f-1r24g==/109951169103904105.jpg"
    },
    {
      name: "DIVE",
      artist: "東京電脳 / 電音部",
      url: "https://music.163.com/song/media/outer/url?id=2102835932.mp3",
      cover: "https://p2.music.126.net/FTSDml2xiwfAWSM-Az2IJA==/109951169090366316.jpg"
    },
    {
      name: "なんでもないや/没什么大不了 -Acoustic ver.-",
      artist: "夏璃夜",
      url: "https://music.163.com/song/media/outer/url?id=448982262.mp3",
      cover: "https://p2.music.126.net/6OSJoIOwdleiorDcUwHYqA==/109951162829338902.jpg"
    },
    {
      name: "一道厦门",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=2024347252.mp3",
      cover: "https://p2.music.126.net/2a77WSnfSNZe-Ttl7teLuA==/109951168356220117.jpg"
    },
    {
      name: "POP/STARS",
      artist: "K/DA / Madison Beer / i-dle / Jaira Burns",
      url: "https://music.163.com/song/media/outer/url?id=1321385655.mp3",
      cover: "https://p2.music.126.net/CaFZORZOOdE3acaCqMxn2Q==/109951163861068723.jpg"
    },
    {
      name: "MORE",
      artist: "K/DA / Madison Beer / i-dle / 刘柏辛Lexie / Jaira Burns / Seraphine / 英雄联盟",
      url: "https://music.163.com/song/media/outer/url?id=1490859511.mp3",
      cover: "https://p2.music.126.net/zOZr_FF0dN9ETB0rQqLZeA==/109951172054400740.jpg"
    },
    {
      name: "Reeeee",
      artist: "COP / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1956818351.mp3",
      cover: "https://p2.music.126.net/__4kXzH88Lx_CqEConaPgw==/109951167562107794.jpg"
    },
    {
      name: "Tides",
      artist: "Mes / Tuno桐音",
      url: "https://music.163.com/song/media/outer/url?id=561946600.mp3",
      cover: "https://p2.music.126.net/cV-qEYHpdiq2PUJLBVHOvg==/109951163300104930.jpg"
    },
    {
      name: "哈雷彗星",
      artist: "绝爵子p / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1974004484.mp3",
      cover: "https://p2.music.126.net/knCUQtRqyegIf2vSETMa5g==/109951166217559908.jpg"
    },
    {
      name: "亲爱的双子星",
      artist: "闹闹丶 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1992386047.mp3",
      cover: "https://p2.music.126.net/yU8fUwcRacVO5xzScNkxzQ==/109951167999829697.jpg"
    },
    {
      name: "老街北",
      artist: "闹闹丶 / FFF君 / 欧Ωhm / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1299289240.mp3",
      cover: "https://p2.music.126.net/78Chlbwl9fiH8WTsw3arxg==/109951163443253139.jpg"
    },
    {
      name: "恋爱吧 魔法少女 hanser",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1451998397.mp3",
      cover: "https://p2.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg"
    },
    {
      name: "Boy",
      artist: "Reol",
      url: "https://music.163.com/song/media/outer/url?id=1903371251.mp3",
      cover: "https://p2.music.126.net/0RGRAcFfCkxVb1PjSw_oMw==/109951170539469763.jpg"
    },
    {
      name: "伴宅日记",
      artist: "织梦令 / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1320634307.mp3",
      cover: "https://p2.music.126.net/oW7TW0VjK5PoNjhzdPm1lw==/109951163626390573.jpg"
    },
    {
      name: "一卷小河山",
      artist: "中国绊爱",
      url: "https://music.163.com/song/media/outer/url?id=1856350629.mp3",
      cover: "https://p2.music.126.net/3ljIzFoutf3wfxRpowjFfw==/109951166120640749.jpg"
    },
    {
      name: "花葬桃源",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1956302224.mp3",
      cover: "https://p2.music.126.net/9qXIfeHqeLbVfZJ-DI7VyQ==/109951167555567271.jpg"
    },
    {
      name: "鸿音",
      artist: "萨顶顶 / 逆水长琴",
      url: "https://music.163.com/song/media/outer/url?id=1851932752.mp3",
      cover: "https://p2.music.126.net/3rICzHT6UoxzK6HukbZjmA==/109951166073680919.jpg"
    },
    {
      name: "∞ TIMEs",
      artist: "洛天依Official / 星葵77",
      url: "https://music.163.com/song/media/outer/url?id=1986743401.mp3",
      cover: "https://p2.music.126.net/k_XEW4tnR4b6LOvsi5JvHA==/109951167935791733.jpg"
    },
    {
      name: "初霁",
      artist: "旅行的蜗牛 / 诗岸",
      url: "https://music.163.com/song/media/outer/url?id=1407039491.mp3",
      cover: "https://p2.music.126.net/k8stgAQiaqTXBGd8PoMyJg==/109951164522350869.jpg"
    },
    {
      name: "我们都拥有海洋【泠鸢】",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2054688611.mp3",
      cover: "https://p2.music.126.net/KKT74Ra-SRsdAladzyOE6Q==/109951168225885314.jpg"
    },
    {
      name: "再见深海 -泠鸢翻唱",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=2022215206.mp3",
      cover: "https://p2.music.126.net/KKT74Ra-SRsdAladzyOE6Q==/109951168225885314.jpg"
    },
    {
      name: "决定，出发！",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1862138914.mp3",
      cover: "https://p2.music.126.net/LEh2_VG7p9wV4Kil0cb_Sw==/109951166190003477.jpg"
    },
    {
      name: "乾中和",
      artist: "Padi / 洛天依Official / 言和 / 阿叽 / 亚小琨",
      url: "https://music.163.com/song/media/outer/url?id=1484080463.mp3",
      cover: "https://p2.music.126.net/TXVBsUIfFwJIwxV4x8zWFQ==/109951165359660706.jpg"
    },
    {
      name: "呆呆一呆呆 feat.小可学妹",
      artist: "iKz / 小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=2017831778.mp3",
      cover: "https://p2.music.126.net/Bt2fSMIbp8LcI2QqDQ7XUw==/109951168265767932.jpg"
    },
    {
      name: "啥啊",
      artist: "星葵77 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1963526955.mp3",
      cover: "https://p2.music.126.net/-Mkgn-OfUd2Q-to55fvsHA==/109951167663201782.jpg"
    },
    {
      name: "Blue Lemonade",
      artist: "beignet / YUC’e / Nor",
      url: "https://music.163.com/song/media/outer/url?id=2014453405.mp3",
      cover: "https://p2.music.126.net/JI_NVncukravKsoBxxWvcA==/109951168233896929.jpg"
    },
    {
      name: "Interstellar",
      artist: "PIKASONIC",
      url: "https://music.163.com/song/media/outer/url?id=1900207101.mp3",
      cover: "https://p2.music.126.net/H_UXEMgZHaFECOcH4qigsA==/109951166684901148.jpg"
    },
    {
      name: "阿比拿铁",
      artist: "三无Marblue",
      url: "https://music.163.com/song/media/outer/url?id=1950552164.mp3",
      cover: "https://p2.music.126.net/p7gcA3P_iGfq-yaG8NAHyQ==/109951167420757780.jpg"
    },
    {
      name: "404 not found",
      artist: "REOL",
      url: "https://music.163.com/song/media/outer/url?id=436016480.mp3",
      cover: "https://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg"
    },
    {
      name: "灰色鹦鹉",
      artist: "ChiliChill乐团 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1994065859.mp3",
      cover: "https://p1.music.126.net/Imywq-5b_g1ahx-DSWXQxQ==/109951168018381811.jpg"
    },
    {
      name: "不负韶光",
      artist: "Q酱 / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1846512883.mp3",
      cover: "https://p1.music.126.net/pFEOar4Awb2733m1V8kCXw==/109951165995080091.jpg"
    },
    {
      name: "流年烹茶",
      artist: "星葵77 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1471474368.mp3",
      cover: "https://p1.music.126.net/oJFWM2ssOIQiZMSmDhH2MA==/109951165239881790.jpg"
    },
    {
      name: "你的心愿",
      artist: "Atsuko / 林墨白citrum / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1892607288.mp3",
      cover: "https://p1.music.126.net/b7eA1GvVUYRa-Lnx1MKWmw==/109951168537547973.jpg"
    },
    {
      name: "纪念[重制]",
      artist: "空气凝 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1860714616.mp3",
      cover: "https://p1.music.126.net/aZAKx4D2q-AJ_BHDnzM3ZA==/109951166172928270.jpg"
    },
    {
      name: "大吉",
      artist: "Akie秋绘",
      url: "https://music.163.com/song/media/outer/url?id=1965026388.mp3",
      cover: "https://p1.music.126.net/pdUEc_vPe8sX_iB7sb2Epw==/109951167688856427.jpg"
    },
    {
      name: "さよならワンダーランド",
      artist: "ナナツカゼ / PIKASONIC / なこたんまる",
      url: "https://music.163.com/song/media/outer/url?id=2053736409.mp3",
      cover: "https://p1.music.126.net/qYANmLif_Mfm45NvuLgFdQ==/109951168663843334.jpg"
    },
    {
      name: "Farewell",
      artist: "ARForest",
      url: "https://music.163.com/song/media/outer/url?id=1402824448.mp3",
      cover: "https://p1.music.126.net/z7NdacpHuCO_BuD0aGHnKQ==/109951164481782239.jpg"
    },
    {
      name: "Whispers from a Distant Star",
      artist: "Fractal Dreamers",
      url: "https://music.163.com/song/media/outer/url?id=1410541799.mp3",
      cover: "https://p1.music.126.net/-a9aQoSjoquR-XeelZHFSA==/109951164566634697.jpg"
    },
    {
      name: "Hakari",
      artist: "LIGHT ACLOUD / Tsugumi Nagahara",
      url: "https://music.163.com/song/media/outer/url?id=1825035009.mp3",
      cover: "https://p1.music.126.net/-fOOlVvrTNVzD4XQZ9slog==/109951168030142416.jpg"
    },
    {
      name: "啥 啊",
      artist: "火西肆",
      url: "https://music.163.com/song/media/outer/url?id=1971301909.mp3",
      cover: "https://p1.music.126.net/JuMCWZphhnmW0KRah5j-gA==/109951167769103398.jpg"
    },
    {
      name: "方向",
      artist: "SVATOX / 赤羽",
      url: "https://music.163.com/song/media/outer/url?id=1413428742.mp3",
      cover: "https://p1.music.126.net/nWuQe2SYPmV1xpzkSHr14Q==/109951164594972003.jpg"
    },
    {
      name: "只等",
      artist: "髅髅 / URUUT",
      url: "https://music.163.com/song/media/outer/url?id=1965322644.mp3",
      cover: "https://p1.music.126.net/dLjTWNK2vp15Z83e4hIFEw==/109951167692993234.jpg"
    },
    {
      name: "【五维介质·诗岸原创曲】星坠",
      artist: "霜凝玥 / 诗岸",
      url: "https://music.163.com/song/media/outer/url?id=1432370408.mp3",
      cover: "https://p2.music.126.net/eK3THssFjOIIyZx6RtutJg==/109951164820170817.jpg"
    },
    {
      name: "奔向天际线",
      artist: "Akie秋绘",
      url: "https://music.163.com/song/media/outer/url?id=2008353538.mp3",
      cover: "https://p2.music.126.net/mVbYkXKDoYadUK_22NBFfQ==/109951168164290261.jpg"
    },
    {
      name: "Lockdown (PIKASONIC VIP)",
      artist: "PIKASONIC / Tatsunoshin / NEONA",
      url: "https://music.163.com/song/media/outer/url?id=1937255691.mp3",
      cover: "https://p2.music.126.net/ekQrW32sAJu9q7qjYuIHiw==/109951167279809455.jpg"
    },
    {
      name: "其实我不会潜水",
      artist: "三无Marblue",
      url: "https://music.163.com/song/media/outer/url?id=1945013388.mp3",
      cover: "https://p2.music.126.net/p7gcA3P_iGfq-yaG8NAHyQ==/109951167420757780.jpg"
    },
    {
      name: "太空旅行 (feat. 熊子)",
      artist: "Kirara Magic / 熊子",
      url: "https://music.163.com/song/media/outer/url?id=1423933707.mp3",
      cover: "https://p2.music.126.net/ruVXwmhpMl4xFC9PgKZbMQ==/109951164715324704.jpg"
    },
    {
      name: "Sky High",
      artist: "Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=1374673104.mp3",
      cover: "https://p2.music.126.net/QQQ0h8hj6nrlLQloMG6hiA==/109951164179504504.jpg"
    },
    {
      name: "银烛秋光",
      artist: "闹闹丶 / 花间有鹿来",
      url: "https://music.163.com/song/media/outer/url?id=1894932810.mp3",
      cover: "https://p2.music.126.net/zUlCOcH0iRw7iVkGN5iRIw==/109951166620993127.jpg"
    },
    {
      name: "我多想说再见啊(星尘Infinity)",
      artist: "柯立可",
      url: "https://music.163.com/song/media/outer/url?id=1929114538.mp3",
      cover: "https://p2.music.126.net/CT6BsF4MRFvsePrksk1DDw==/109951167161932342.jpg"
    },
    {
      name: "梦游记",
      artist: "著小生zoki / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1958404663.mp3",
      cover: "https://p2.music.126.net/D2YqcSeWR9s1ey9mK_T2Ag==/109951167581297872.jpg"
    },
    {
      name: "红灯笼",
      artist: "洛天依 / 陈秋桦",
      url: "https://music.163.com/song/media/outer/url?id=1970864953.mp3",
      cover: "https://p2.music.126.net/73uWvXqiaGP31nMLNPkLTw==/109951163317519137.jpg"
    },
    {
      name: "月华舞",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2062921141.mp3",
      cover: "https://p2.music.126.net/g9hQW8F-V-iSu3fl3OxW9w==/109951168730716074.jpg"
    },
    {
      name: "Black Glow",
      artist: "Albemuth",
      url: "https://music.163.com/song/media/outer/url?id=2056112750.mp3",
      cover: "https://p2.music.126.net/xBriFWy2jVz0vWVYBkquTA==/109951168680698725.jpg"
    },
    {
      name: "速溶霓虹",
      artist: "熊子 / ANK",
      url: "https://music.163.com/song/media/outer/url?id=1404531407.mp3",
      cover: "https://p1.music.126.net/y2JhDXDFqMKT31PVTopGUQ==/109951164496647934.jpg"
    },
    {
      name: "神的随波逐流",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=33682739.mp3",
      cover: "https://p1.music.126.net/2Rcimduy6Oj5Xz6beJDSIg==/3364505581118558.jpg"
    },
    {
      name: "惊鹊",
      artist: "忘川风华录 / ₍˄·͈༝·͈˄*₎◞ ̑̑ / 海伊",
      url: "https://music.163.com/song/media/outer/url?id=1840749937.mp3",
      cover: "https://p1.music.126.net/5x4CuTuMusDXdXer4aLMKQ==/109951165929087605.jpg"
    },
    {
      name: "Infinity-Dark matter",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2017540511.mp3",
      cover: "https://p1.music.126.net/3D2WKU00kvnB3-EtjQV-7Q==/109951168262941329.jpg"
    },
    {
      name: "花灯笑",
      artist: "著小生zoki / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1968053292.mp3",
      cover: "https://p1.music.126.net/r6jXTSC0O_HlXy6jATz9dQ==/109951167728337722.jpg"
    },
    {
      name: "晨曦",
      artist: "蔷芜 / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2022841125.mp3",
      cover: "https://p1.music.126.net/ozSuAyrQPQKGivq4qcRDHg==/109951168313206881.jpg"
    },
    {
      name: "旧时约",
      artist: "WOVOP / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=2037885601.mp3",
      cover: "https://p1.music.126.net/X5-IU5fcCQbJFWZ67rfpEg==/109951168535887842.jpg"
    },
    {
      name: "最忧解",
      artist: "Cr_纯然 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=1965484413.mp3",
      cover: "https://p1.music.126.net/U6PMgAnpYA_AbygspIRhEQ==/109951167695149824.jpg"
    },
    {
      name: "わたしのCOLOR(S)",
      artist: "高田憂希",
      url: "https://music.163.com/song/media/outer/url?id=536570531.mp3",
      cover: "https://p1.music.126.net/xzLcHJw0x7jSSaM9I9_s8g==/109951163156293384.jpg"
    },
    {
      name: "ときめきブローカー",
      artist: "P丸様。",
      url: "https://music.163.com/song/media/outer/url?id=1869460311.mp3",
      cover: "https://p1.music.126.net/_lIBP6JQ_rAWC8K89PlnQg==/109951166282701176.jpg"
    },
    {
      name: "いにしえロマンティック",
      artist: "ナユタン星人 / P丸様。",
      url: "https://music.163.com/song/media/outer/url?id=1815067275.mp3",
      cover: "https://p1.music.126.net/s11Yg8Mn7TPJuYHos-uFFw==/109951165666308258.jpg"
    },
    {
      name: "Youthful Now（Synto Edit）",
      artist: "Synto / 封墨 / mï",
      url: "https://music.163.com/song/media/outer/url?id=1915973091.mp3",
      cover: "https://p1.music.126.net/iA37TIkFzpUIE0gqJNTLgg==/109951166992800629.jpg"
    },
    {
      name: "はーどもーどかのじょ",
      artist: "nyamura",
      url: "https://music.163.com/song/media/outer/url?id=2029632434.mp3",
      cover: "https://p1.music.126.net/3rRwzZZ2ISjWx3S-4v-BMg==/109951168463551848.jpg"
    },
    {
      name: "花月成双【泠鸢yousa\\朽木素\\魂喵喵】翻唱",
      artist: "泠鸢yousa / 朽木素 / 魂喵喵",
      url: "https://music.163.com/song/media/outer/url?id=1838510557.mp3",
      cover: "https://p1.music.126.net/LhYYzZT-V_n4eNDNsOu0GQ==/109951165696869592.jpg"
    },
    {
      name: "Together",
      artist: "Foozogz",
      url: "https://music.163.com/song/media/outer/url?id=522529527.mp3",
      cover: "https://p1.music.126.net/fbamglW4bTTi1GoYU7Eeow==/109951169234590769.jpg"
    },
    {
      name: "君の声は",
      artist: "ななひら",
      url: "https://music.163.com/song/media/outer/url?id=425280950.mp3",
      cover: "https://p1.music.126.net/lgByNw_l9rbhRNZG-m5sLQ==/109951166792897570.jpg"
    },
    {
      name: "下雨的时候大家都在干嘛",
      artist: "封茗囧菌",
      url: "https://music.163.com/song/media/outer/url?id=1961886925.mp3",
      cover: "https://p1.music.126.net/of_8LKQ4doGPxLaz7Pq7Mw==/109951167633994657.jpg"
    },
    {
      name: "所以我戴上了耳机",
      artist: "小熠IVAC / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1970343732.mp3",
      cover: "https://p2.music.126.net/-QKFOg4OA6VUOsCrD4h8Pw==/109951167756755210.jpg"
    },
    {
      name: "乙女はサイコパス",
      artist: "P丸様。 / コレサワ",
      url: "https://music.163.com/song/media/outer/url?id=1985009142.mp3",
      cover: "https://p2.music.126.net/El9_PCejmBcfO5RLz8qlmg==/109951167914233841.jpg"
    },
    {
      name: "光与影的对白",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1963053471.mp3",
      cover: "https://p2.music.126.net/BgJWQTjYHjNkznwAw6VWjg==/109951167656373279.jpg"
    },
    {
      name: "朧月夜",
      artist: "ナナツカゼ / PIKASONIC / なこたんまる",
      url: "https://music.163.com/song/media/outer/url?id=2059807644.mp3",
      cover: "https://p2.music.126.net/ijwAHxT0mVbF_U59mQw0hg==/109951168706037284.jpg"
    },
    {
      name: "PS5",
      artist: "封茗囧菌",
      url: "https://music.163.com/song/media/outer/url?id=1945526083.mp3",
      cover: "https://p2.music.126.net/c3tHrWP76abtp0qa3SBo7A==/109951167389567190.jpg"
    },
    {
      name: "Fade",
      artist: "Alan Walker",
      url: "https://music.163.com/song/media/outer/url?id=29947420.mp3",
      cover: "https://p2.music.126.net/C8WtOUxN4NMWFlTV3GmJcg==/109951169023366938.jpg"
    },
    {
      name: "What Call This Day ? (feat. にんじん)",
      artist: "MIMI / ロクデナシ",
      url: "https://music.163.com/song/media/outer/url?id=2057804438.mp3",
      cover: "https://p2.music.126.net/DxfUgZ5E7wdZ8MxNABsdHw==/109951168733448609.jpg"
    },
    {
      name: "生日快乐",
      artist: "yihuik苡慧",
      url: "https://music.163.com/song/media/outer/url?id=1963443271.mp3",
      cover: "https://p2.music.126.net/Ou4CqTGHOf3YP_YWuCMcKA==/109951167694958932.jpg"
    },
    {
      name: "コクハクワープ",
      artist: "BPM15Q / Yunomi / 苺りなはむ",
      url: "https://music.163.com/song/media/outer/url?id=443292322.mp3",
      cover: "https://p2.music.126.net/t3sUZ8YvP04WAzFrOzO__g==/109951168568792278.jpg"
    },
    {
      name: "GOODLUCK",
      artist: "BPM15Q / Yunomi / 苺りなはむ",
      url: "https://music.163.com/song/media/outer/url?id=443277368.mp3",
      cover: "https://p2.music.126.net/t3sUZ8YvP04WAzFrOzO__g==/109951168568792278.jpg"
    },
    {
      name: "你呀你呀",
      artist: "多多poi / 刘照坤Jock",
      url: "https://music.163.com/song/media/outer/url?id=2086091247.mp3",
      cover: "https://p1.music.126.net/NsmUTBKzEogjK5_LCt82OQ==/109951168946555484.jpg"
    },
    {
      name: "弹指醉",
      artist: "穆小泠",
      url: "https://music.163.com/song/media/outer/url?id=1996419249.mp3",
      cover: "https://p1.music.126.net/iqa6u_WTRpyQZbDxkbgh-Q==/109951168040406661.jpg"
    },
    {
      name: "Talking to the Rain(星尘Infinity)",
      artist: "旅行的蜗牛 / 星尘",
      url: "https://music.163.com/song/media/outer/url?id=1947421379.mp3",
      cover: "https://p1.music.126.net/jnbyyRBxzsXP9FaiO4kxew==/109951167412282908.jpg"
    },
    {
      name: "Midnight Hilichurl Parade (feat. Frozen Starfall)",
      artist: "PeachyFranny / Frozen Starfall",
      url: "https://music.163.com/song/media/outer/url?id=1888314242.mp3",
      cover: "https://p1.music.126.net/h2VLKDrfQ1T6gsxv-5xBMg==/109951166536781478.jpg"
    },
    {
      name: "Witches' Party (feat. Shiroroll)",
      artist: "Kirara Magic / Shiroroll",
      url: "https://music.163.com/song/media/outer/url?id=1399441026.mp3",
      cover: "https://p1.music.126.net/UnwcBE_lUZw8zc5wxkjANA==/109951164451667045.jpg"
    },
    {
      name: "#病みカワ",
      artist: "森羅万象 / La priere",
      url: "https://music.163.com/song/media/outer/url?id=2041863280.mp3",
      cover: "https://p1.music.126.net/jXeD0a_HrFx-EtnP2-GrCg==/109951168566089618.jpg"
    },
    {
      name: "ときめきちゅるぴかきゅるるらった",
      artist: "P丸様。 / TeddyLoid",
      url: "https://music.163.com/song/media/outer/url?id=1985010157.mp3",
      cover: "https://p1.music.126.net/El9_PCejmBcfO5RLz8qlmg==/109951167914233841.jpg"
    },
    {
      name: "恋爱语音导航【Muse dash收录曲】",
      artist: "泠鸢yousa / 小野道ono",
      url: "https://music.163.com/song/media/outer/url?id=1326377141.mp3",
      cover: "https://p1.music.126.net/EvyRyt8QJjq3S55moqrzyg==/109951163673157208.jpg"
    },
    {
      name: "秋江枫月夜",
      artist: "末离 / 花间有鹿来",
      url: "https://music.163.com/song/media/outer/url?id=1925823243.mp3",
      cover: "https://p1.music.126.net/UH9WjnzUvPJyCtUXNbUg_A==/109951167120253887.jpg"
    },
    {
      name: "夜游春",
      artist: "Grid格子 / 洛天依",
      url: "https://music.163.com/song/media/outer/url?id=2020134048.mp3",
      cover: "https://p1.music.126.net/JiSb7RIwiM12IfcTjbAvMA==/109951168288207357.jpg"
    },
    {
      name: "呆呆一呆呆 feat.洛天依",
      artist: "iKz / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2017823760.mp3",
      cover: "https://p1.music.126.net/Bt2fSMIbp8LcI2QqDQ7XUw==/109951168265767932.jpg"
    },
    {
      name: "梦回古城(feat. 洛天依)",
      artist: "阳花",
      url: "https://music.163.com/song/media/outer/url?id=1363408289.mp3",
      cover: "https://p1.music.126.net/qULvc1vntlKVBErp0SE8Iw==/109951166613860843.jpg"
    },
    {
      name: "LOLI",
      artist: "Selphius",
      url: "https://music.163.com/song/media/outer/url?id=1447242314.mp3",
      cover: "https://p1.music.126.net/uC8gK6diVFDXmcUc-MQ_iA==/109951164977905939.jpg"
    },
    {
      name: "メイドインあたし",
      artist: "花譜 / 東京ゲゲゲイ",
      url: "https://music.163.com/song/media/outer/url?id=2026790733.mp3",
      cover: "https://p2.music.126.net/Z6lJHlBSWqG1katSAqIz8Q==/109951168436888534.jpg"
    },
    {
      name: "summertime",
      artist: "Hanser / 三无Marblue",
      url: "https://music.163.com/song/media/outer/url?id=1402846442.mp3",
      cover: "https://p2.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg"
    },
    {
      name: "Miku",
      artist: "初音ミク / Anamanaguchi",
      url: "https://music.163.com/song/media/outer/url?id=406716121.mp3",
      cover: "https://p2.music.126.net/KaNzuttDHxaJI8qp0fpqUw==/1424967072318092.jpg"
    },
    {
      name: "火祭り",
      artist: "才歌",
      url: "https://music.163.com/song/media/outer/url?id=1871753351.mp3",
      cover: "https://p2.music.126.net/a8Cgoz6I1K9Iaj130hZc-A==/109951166309298997.jpg"
    },
    {
      name: "くうになる (feat. 可不&初音ミク)",
      artist: "MIMI / 可不 / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=1912598037.mp3",
      cover: "https://p2.music.126.net/rO-NRerWNFHke7whEJRJbg==/109951166940350080.jpg"
    },
    {
      name: "強風オールバック",
      artist: "歌愛ユキ / ゆこぴ",
      url: "https://music.163.com/song/media/outer/url?id=2051317320.mp3",
      cover: "https://p2.music.126.net/ncN7rSpKgG_5BBkubewFCQ==/109951168645485167.jpg"
    },
    {
      name: "ザムザ",
      artist: "てにをは / 初音ミク",
      url: "https://music.163.com/song/media/outer/url?id=2037085150.mp3",
      cover: "https://p2.music.126.net/ePJqJd5wJRpKjECKXyKVoA==/109951168528925758.jpg"
    },
    {
      name: "アイドル/偶像《我推的孩子》",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=2039817239.mp3",
      cover: "https://p2.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg"
    },
    {
      name: "闭眼，我触碰幻想的边界",
      artist: "苏逸_Suyi / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=2016400471.mp3",
      cover: "https://p2.music.126.net/e_5Ngtg6wYmu3xUs5_nhfw==/109951168252208407.jpg"
    },
    {
      name: "ちるちる",
      artist: "REOL",
      url: "https://music.163.com/song/media/outer/url?id=436016476.mp3",
      cover: "https://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg"
    },
    {
      name: "めんたいコズミック",
      artist: "Yunomi / nicamoq",
      url: "https://music.163.com/song/media/outer/url?id=451701492.mp3",
      cover: "https://p2.music.126.net/8OBVewaY3awpIDIoB_kYpA==/109951171004143067.jpg"
    },
    {
      name: "Candyland (DR.L & JWoods Remix)",
      artist: "Tobu / DR.L / JWoods",
      url: "https://music.163.com/song/media/outer/url?id=2078572435.mp3",
      cover: "https://p2.music.126.net/EG6qLSVGhCrcSpWxCTZ71Q==/109951168886094544.jpg"
    },
    {
      name: "醉月此宵",
      artist: "中国绊爱",
      url: "https://music.163.com/song/media/outer/url?id=2079816549.mp3",
      cover: "https://p2.music.126.net/Pi1jnaQ2PAxT0SA3zTLO7w==/109951168896309985.jpg"
    },
    {
      name: "谁 是 喝 奶 王",
      artist: "Q酱 / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1895875069.mp3",
      cover: "https://p2.music.126.net/pdkeUVKQ5NQMCXVvJIhK6Q==/109951166632414319.jpg"
    },
    {
      name: "人造心脏",
      artist: "Atsuko",
      url: "https://music.163.com/song/media/outer/url?id=1874250834.mp3",
      cover: "https://p2.music.126.net/A30hd8m4mgajcWQdIeOdiA==/109951168537555351.jpg"
    },
    {
      name: "I♡",
      artist: "リリぴ",
      url: "https://music.163.com/song/media/outer/url?id=1983100515.mp3",
      cover: "https://p2.music.126.net/66Zy3nfdYMYjn0VHjnQg8g==/109951167895034345.jpg"
    },
    {
      name: "Misty Memory (Day Version)",
      artist: "塞壬唱片-MSR / Erik Castro / Elvin Shen / David Lin / 左乙",
      url: "https://music.163.com/song/media/outer/url?id=2070352215.mp3",
      cover: "https://p1.music.126.net/KRWOKqfupLimKvqS6MA9WA==/109951168813447097.jpg"
    },
    {
      name: "白金ディスコ",
      artist: "井口裕香",
      url: "https://music.163.com/song/media/outer/url?id=460528.mp3",
      cover: "https://p1.music.126.net/fcKsHFYb0ZlrFg-ilVddAw==/109951165559286030.jpg"
    },
    {
      name: "Radiant",
      artist: "塞壬唱片-MSR / Forts",
      url: "https://music.163.com/song/media/outer/url?id=1890402858.mp3",
      cover: "https://p1.music.126.net/0vXaGbemth0GEhORjDaYAw==/109951166563280906.jpg"
    },
    {
      name: "洛天依印象曲·华风夏韵",
      artist: "提糯Tino",
      url: "https://music.163.com/song/media/outer/url?id=1965687934.mp3",
      cover: "https://p1.music.126.net/1oZ0ftxNE5DGzwvO97bfLA==/109951167697837238.jpg"
    },
    {
      name: "Empty Love",
      artist: "Lulleaux / Kid Princess",
      url: "https://music.163.com/song/media/outer/url?id=1435828582.mp3",
      cover: "https://p1.music.126.net/xrWSChs7pIOWFjOz5eQIzw==/109951164855840145.jpg"
    },
    {
      name: "踏上旅途（扩写版）",
      artist: "黑铱BlackIris",
      url: "https://music.163.com/song/media/outer/url?id=2043276824.mp3",
      cover: "https://p1.music.126.net/miaIulvgZSHjn70LZ3SNcA==/109951168576468314.jpg"
    },
    {
      name: "最美中国戏",
      artist: "张曦匀 / 戚琦 / Tacitly_麟犀",
      url: "https://music.163.com/song/media/outer/url?id=1888695134.mp3",
      cover: "https://p1.music.126.net/D5F-y24Jz2umWjLcNR7jiQ==/109951166541807461.jpg"
    },
    {
      name: "Domineer",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1818580987.mp3",
      cover: "https://p1.music.126.net/eo1oYY1OQobITrvSNf_nrA==/109951165705882625.jpg"
    },
    {
      name: "Moon Halo",
      artist: "茶理理 / TetraCalyx / Hanser / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1859652717.mp3",
      cover: "https://p1.music.126.net/ciLKATqflV2YWSV3ltE2Kw==/109951166159281275.jpg"
    },
    {
      name: "水龙吟 Samudrartha",
      artist: "HOYO-MiX / 优素Yusuf",
      url: "https://music.163.com/song/media/outer/url?id=2067222280.mp3",
      cover: "https://p1.music.126.net/oDhurcFOPMPVMLnc6xF99A==/109951168765200998.jpg"
    },
    {
      name: "差不多得了",
      artist: "Saint76",
      url: "https://music.163.com/song/media/outer/url?id=1864872333.mp3",
      cover: "https://p1.music.126.net/uKRmVjAlc_RiY_ePN86k_w==/109951166225689070.jpg"
    },
    {
      name: "春三月",
      artist: "早凉",
      url: "https://music.163.com/song/media/outer/url?id=1930006523.mp3",
      cover: "https://p1.music.126.net/FBoGjR0jc7wmKIt46pgY3g==/109951167175109615.jpg"
    },
    {
      name: "Minus Zero × Synesthesia",
      artist: "Bao The Whale",
      url: "https://music.163.com/song/media/outer/url?id=1302084483.mp3",
      cover: "https://p1.music.126.net/rxlPQFFH5dxMFqno6BEKYQ==/109951163469557782.jpg"
    },
    {
      name: "月下",
      artist: "苏运莹",
      url: "https://music.163.com/song/media/outer/url?id=1993067247.mp3",
      cover: "https://p1.music.126.net/bLwn4NO-s93eU-ROZ1NbuA==/109951168018026306.jpg"
    },
    {
      name: "Warma! Yeah!",
      artist: "warma",
      url: "https://music.163.com/song/media/outer/url?id=1299354166.mp3",
      cover: "https://p1.music.126.net/MUiMpStRmQi77QG5TmxEKg==/109951167630751576.jpg"
    },
    {
      name: "中华少女·终",
      artist: "Soda纯白 / 洛天依Official / 卦者灵风 / Metablue赛博蓝",
      url: "https://music.163.com/song/media/outer/url?id=2045247729.mp3",
      cover: "https://p1.music.126.net/c6Wnm-Jeqyry27k_TMBgJg==/109951168593729710.jpg"
    },
    {
      name: "I really ∞（翻自 Carly Rae Jepsen）",
      artist: "warma",
      url: "https://music.163.com/song/media/outer/url?id=1395826900.mp3",
      cover: "https://p1.music.126.net/DwWVQH2lsnqJEpeUiNaCZA==/109951164416460276.jpg"
    },
    {
      name: "野火 Wildfire",
      artist: "HOYO-MiX / Jonathan Steingard",
      url: "https://music.163.com/song/media/outer/url?id=2045806409.mp3",
      cover: "https://p1.music.126.net/-K-1PuWcHjGLNuH4xPJwpQ==/109951168599498949.jpg"
    },
    {
      name: "白石溪（Cover 洛天依 / 乐正绫）",
      artist: "双笙（陈元汐） / 冥月",
      url: "https://music.163.com/song/media/outer/url?id=516997458.mp3",
      cover: "https://p2.music.126.net/1gRB8tuny6xCI8OoGKNJbA==/109951163055852179.jpg"
    },
    {
      name: "ハンマーを電波ソングにしてみた",
      artist: "Kana",
      url: "https://music.163.com/song/media/outer/url?id=472137233.mp3",
      cover: "https://p2.music.126.net/XNn4Hss5T8yzAvfVz5mlCg==/109951166152877465.jpg"
    },
    {
      name: "大擂台",
      artist: "吉诺儿Kino / 唐九夏",
      url: "https://music.163.com/song/media/outer/url?id=1921234399.mp3",
      cover: "https://p2.music.126.net/FdT8EkhShzbX3FxPKYnCoQ==/109951167061189211.jpg"
    },
    {
      name: "夏色パラダイス",
      artist: "朱彦安 / 夏野Natsuno",
      url: "https://music.163.com/song/media/outer/url?id=1817140961.mp3",
      cover: "https://p2.music.126.net/3-fziGYoDxjli1uBGq02lw==/109951165687562759.jpg"
    },
    {
      name: "Summer Time（Japanese Version）",
      artist: "朱彦安 / 夏野Natsuno",
      url: "https://music.163.com/song/media/outer/url?id=1877205088.mp3",
      cover: "https://p2.music.126.net/UNnEAADBU8AUGkQaULOPfw==/109951166373715645.jpg"
    },
    {
      name: "悲しみは水のよう（《我的悲伤是水做的》日文版）",
      artist: "夏野Natsuno",
      url: "https://music.163.com/song/media/outer/url?id=1443634040.mp3",
      cover: "https://p2.music.126.net/EKu3I1eguacxFbjBP6xUIg==/109951170712080486.jpg"
    },
    {
      name: "树与花的旋舞 Whirling of Leaves and Petals",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1992139159.mp3",
      cover: "https://p2.music.126.net/mi40R92CSJ6zeroCvLxQQA==/109951167997564898.jpg"
    },
    {
      name: "キミヱゴサーチ",
      artist: "日南結里 / 小澤亜李",
      url: "https://music.163.com/song/media/outer/url?id=29932154.mp3",
      cover: "https://p2.music.126.net/x5v_yDOe7_ovCpgNnzMS6A==/6657542907711543.jpg"
    },
    {
      name: "Overdose（慵懒女声）",
      artist: "酒酒井Anri",
      url: "https://music.163.com/song/media/outer/url?id=2055840056.mp3",
      cover: "https://p2.music.126.net/gS5PidEpenjGe-SHoGetqw==/109951168271972514.jpg"
    },
    {
      name: "少女進行日記",
      artist: "朱彦安 / 夏野Natsuno",
      url: "https://music.163.com/song/media/outer/url?id=1985510682.mp3",
      cover: "https://p2.music.126.net/HLWSrSJy4Q901qgI2KUqAw==/109951167918597138.jpg"
    },
    {
      name: "ジェリーフィッシュ",
      artist: "Yunomi / ローラーガール",
      url: "https://music.163.com/song/media/outer/url?id=562591636.mp3",
      cover: "https://p2.music.126.net/KaYSb9oYQzhl2XBeJcj8Rg==/109951165125601702.jpg"
    },
    {
      name: "ちゅ、多様性。",
      artist: "ano",
      url: "https://music.163.com/song/media/outer/url?id=1996318567.mp3",
      cover: "https://p2.music.126.net/iVyi9M74LeG5NZEpNRx8wg==/109951173131675749.jpg"
    },
    {
      name: "Being With You",
      artist: "Vaance / Deerock / Linney",
      url: "https://music.163.com/song/media/outer/url?id=1874330451.mp3",
      cover: "https://p2.music.126.net/MqWoDGeWi9pKSkAaL2cqfw==/109951171443267420.jpg"
    },
    {
      name: "Kitai",
      artist: "浅葱喵asagiinyo",
      url: "https://music.163.com/song/media/outer/url?id=1842537765.mp3",
      cover: "https://p2.music.126.net/4PV0NDISgsS9Ri4YiQbgxQ==/109951165951160008.jpg"
    },
    {
      name: "扬旗鸣鼓",
      artist: "闹闹丶 / 洛天依Official / 乐正绫",
      url: "https://music.163.com/song/media/outer/url?id=1927952506.mp3",
      cover: "https://p2.music.126.net/ZnpvS56yNPSTRCQbPawHsg==/109951167146259429.jpg"
    },
    {
      name: "星穹铁道 Star Rail",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2034614720.mp3",
      cover: "https://p2.music.126.net/RWIGyShmnjmUxizXco6fVg==/109951168505830245.jpg"
    },
    {
      name: "太空漫步 Space Walk",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2034615687.mp3",
      cover: "https://p2.music.126.net/RWIGyShmnjmUxizXco6fVg==/109951168505830245.jpg"
    },
    {
      name: "Starry Night",
      artist: "Couple N",
      url: "https://music.163.com/song/media/outer/url?id=1342840047.mp3",
      cover: "https://p2.music.126.net/BLMJ77M1UiudzIDToITbhQ==/109951163826274872.jpg"
    },
    {
      name: "Stay With Me",
      artist: "RUQOA / Shion Lee",
      url: "https://music.163.com/song/media/outer/url?id=2001418003.mp3",
      cover: "https://p2.music.126.net/ybWb8j_sH7mLQg59Jo-GTA==/109951168088182391.jpg"
    },
    {
      name: "Cosmos Cat",
      artist: "YUC’e",
      url: "https://music.163.com/song/media/outer/url?id=1851643398.mp3",
      cover: "https://p2.music.126.net/FOHyVSot94cu0A-QZfBneA==/109951166070927436.jpg"
    },
    {
      name: "Aspire",
      artist: "KITSUNE",
      url: "https://music.163.com/song/media/outer/url?id=1835768072.mp3",
      cover: "https://p2.music.126.net/ODANzyD3oCozS2_yU-ILhA==/109951167534134085.jpg"
    },
    {
      name: "Talk",
      artist: "Glaceo / Eliine",
      url: "https://music.163.com/song/media/outer/url?id=1487273156.mp3",
      cover: "https://p2.music.126.net/lNShxqOZ8Peyv2p1fn1gKQ==/109951165391591262.jpg"
    },
    {
      name: "月まで1秒ちょっと",
      artist: "あよ / 森羅万象",
      url: "https://music.163.com/song/media/outer/url?id=1919134278.mp3",
      cover: "https://p1.music.126.net/dsFO7SImwFEZESeyPsM_Dw==/109951167034712374.jpg"
    },
    {
      name: "Instant Love",
      artist: "La priere",
      url: "https://music.163.com/song/media/outer/url?id=1861593270.mp3",
      cover: "https://p1.music.126.net/YhQxpxiD0bDE49yI9eL54A==/109951166182858025.jpg"
    },
    {
      name: "Aurora VIP",
      artist: "Kirara Magic / Shion Lee",
      url: "https://music.163.com/song/media/outer/url?id=1830187577.mp3",
      cover: "https://p2.music.126.net/E0BDTR7BomvzrYu_4ixzuA==/109951165811598413.jpg"
    },
    {
      name: "Papaya",
      artist: "Hyper Potions / MYLK",
      url: "https://music.163.com/song/media/outer/url?id=1892221605.mp3",
      cover: "https://p2.music.126.net/6kprhB4JFuBeGoLQexrhsw==/109951166585536221.jpg"
    },
    {
      name: "Calling",
      artist: "HoneyComeBear",
      url: "https://music.163.com/song/media/outer/url?id=1363677518.mp3",
      cover: "https://p2.music.126.net/tTJaE14M_J3Xl-7TMuw8Mw==/109951166870464935.jpg"
    },
    {
      name: "ソラゴト",
      artist: "coctaiL",
      url: "https://music.163.com/song/media/outer/url?id=1965740189.mp3",
      cover: "https://p2.music.126.net/SV-opXG0F1DCU3v3TllhDA==/109951168053429203.jpg"
    },
    {
      name: "See Tình (Japanese Version)",
      artist: "Rainych",
      url: "https://music.163.com/song/media/outer/url?id=1981431430.mp3",
      cover: "https://p2.music.126.net/aBHJKZgN8Y8vvNOaTGLJ7g==/109951167878418647.jpg"
    },
    {
      name: "十夏の花",
      artist: "HoneyComeBear",
      url: "https://music.163.com/song/media/outer/url?id=1876460058.mp3",
      cover: "https://p2.music.126.net/JtyHbggTMWhtJurY9Tbm7g==/109951168646287350.jpg"
    },
    {
      name: "Infinity",
      artist: "Borgeous / KASTRA / Luxtides",
      url: "https://music.163.com/song/media/outer/url?id=1938327586.mp3",
      cover: "https://p2.music.126.net/xwHT_dPIAvvX3g25WrvspA==/109951169829041007.jpg"
    },
    {
      name: "Fantasy",
      artist: "Cloudier",
      url: "https://music.163.com/song/media/outer/url?id=1336856693.mp3",
      cover: "https://p2.music.126.net/6VE7EUU6cXx3XtkT9hmMlA==/109951164934287206.jpg"
    },
    {
      name: "Chocolate Love (feat. ugu)",
      artist: "Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=2031920807.mp3",
      cover: "https://p2.music.126.net/mOnOpwloDoyDGkysRYb8jQ==/109951168483932629.jpg"
    },
    {
      name: "Behavior",
      artist: "花鋏キョウ",
      url: "https://music.163.com/song/media/outer/url?id=1872432762.mp3",
      cover: "https://p1.music.126.net/N2byjXKeSi1vvIdRQt2Mbw==/109951166317775107.jpg"
    },
    {
      name: "アイノシズク",
      artist: "KARAKURI 2039",
      url: "https://music.163.com/song/media/outer/url?id=1428440626.mp3",
      cover: "https://p1.music.126.net/16RBCoHm8ntLBnYzTI-j7Q==/109951164771172105.jpg"
    },
    {
      name: "ARCADE NIGHT",
      artist: "AIKA / Bao The Whale",
      url: "https://music.163.com/song/media/outer/url?id=1862417932.mp3",
      cover: "https://p1.music.126.net/nXGsIpflLqvjXajGpErBgg==/109951166193507160.jpg"
    },
    {
      name: "C. albidus",
      artist: "P3PPER / Milkoi / Darm",
      url: "https://music.163.com/song/media/outer/url?id=1819715903.mp3",
      cover: "https://p1.music.126.net/t8KtpU1ERj9CUj13fc9GmQ==/109951165719287557.jpg"
    },
    {
      name: "Chaotic Code",
      artist: "SNKS",
      url: "https://music.163.com/song/media/outer/url?id=2021839604.mp3",
      cover: "https://p1.music.126.net/cxqkvN-x-uICeCjYPeEigg==/109951168304111796.jpg"
    },
    {
      name: "我愛你-上海蟹-",
      artist: "カニ研究会",
      url: "https://music.163.com/song/media/outer/url?id=1949073459.mp3",
      cover: "https://p1.music.126.net/fZTTEUsjzjiXE_-QRLQsxA==/109951167449469066.jpg"
    },
    {
      name: "我愛你-上海蟹-",
      artist: "早稻叽",
      url: "https://music.163.com/song/media/outer/url?id=2029927056.mp3",
      cover: "https://p1.music.126.net/cMWbk2qXfy0yDPaH4Km0Kw==/109951168456217084.jpg"
    },
    {
      name: "Beyond the Sky (feat. Shion)",
      artist: "Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=2019547729.mp3",
      cover: "https://p1.music.126.net/6iEhXv04iNTG63RZwIpe2w==/109951168282109856.jpg"
    },
    {
      name: "Mirror",
      artist: "Danni Carra / SABAI",
      url: "https://music.163.com/song/media/outer/url?id=1982029264.mp3",
      cover: "https://p1.music.126.net/0G9-fk0SziJbIxLemrPxlw==/109951167899580623.jpg"
    },
    {
      name: "Twilight",
      artist: "HoneyComeBear",
      url: "https://music.163.com/song/media/outer/url?id=1453895022.mp3",
      cover: "https://p1.music.126.net/VfuAZB1YW35_5Pi2dcdMww==/109951168649095906.jpg"
    },
    {
      name: "Go Again (feat. ELYSA)",
      artist: "King CAAN / Elysa",
      url: "https://music.163.com/song/media/outer/url?id=1952112969.mp3",
      cover: "https://p1.music.126.net/9LmOOypHwsmFSescMxV8Rw==/109951167495483327.jpg"
    },
    {
      name: "BESTIES",
      artist: "Emily Zeck",
      url: "https://music.163.com/song/media/outer/url?id=1426705667.mp3",
      cover: "https://p1.music.126.net/ZN2VKWRXlINm1WXutdW1Xg==/109951164749806580.jpg"
    },
    {
      name: "Login",
      artist: "しるこ / PIKASONIC",
      url: "https://music.163.com/song/media/outer/url?id=2033683937.mp3",
      cover: "https://p1.music.126.net/xk4DXN0MprbT5DsMcmvgBA==/109951168498555295.jpg"
    },
    {
      name: "Summer Dream (feat. Chevy)",
      artist: "Kirara Magic / Chevy",
      url: "https://music.163.com/song/media/outer/url?id=1854644975.mp3",
      cover: "https://p1.music.126.net/cbgR0pR33Zf6CdAMbwu3LQ==/109951166101917271.jpg"
    },
    {
      name: "早稻叽-新春小记(Craner Bootleg)",
      artist: "Craner",
      url: "https://music.163.com/song/media/outer/url?id=1917818967.mp3",
      cover: "https://p1.music.126.net/alOlEiotc_RGJxKUiaGOUQ==/109951167017626648.jpg"
    },
    {
      name: "Asterism❖",
      artist: "beignet",
      url: "https://music.163.com/song/media/outer/url?id=477839691.mp3",
      cover: "https://p1.music.126.net/oXSghTeEj-wkJrDsQ34UrA==/109951167354561075.jpg"
    },
    {
      name: "Otherside (feat. Nila)",
      artist: "AIKA / Nila",
      url: "https://music.163.com/song/media/outer/url?id=1935824227.mp3",
      cover: "https://p1.music.126.net/4hfsmjlPeV-x9X4hVEv6dA==/109951167255749589.jpg"
    },
    {
      name: "I’ll Be There",
      artist: "ARForest",
      url: "https://music.163.com/song/media/outer/url?id=1402824447.mp3",
      cover: "https://p1.music.126.net/z7NdacpHuCO_BuD0aGHnKQ==/109951164481782239.jpg"
    },
    {
      name: "Citrus Love",
      artist: "Bao The Whale / Overspace",
      url: "https://music.163.com/song/media/outer/url?id=1979135725.mp3",
      cover: "https://p1.music.126.net/uy2AvkAopBC8FwQtTy7n-w==/109951167851897117.jpg"
    },
    {
      name: "Ending",
      artist: "Nyarons / Dialock",
      url: "https://music.163.com/song/media/outer/url?id=1995633603.mp3",
      cover: "https://p1.music.126.net/CEMBoKFjjeZCUZz9MJZi6g==/109951173233437335.jpg"
    },
    {
      name: "A Centimetre Apart",
      artist: "Cloudier / Winterberry",
      url: "https://music.163.com/song/media/outer/url?id=1441411641.mp3",
      cover: "https://p1.music.126.net/DSVIXlHynJZICnsDJZrZ3A==/109951164915189203.jpg"
    },
    {
      name: "Trick",
      artist: "PIKASONIC",
      url: "https://music.163.com/song/media/outer/url?id=2025482254.mp3",
      cover: "https://p1.music.126.net/lc6sYu2RpHsEsYztSFjcoA==/109951168423714351.jpg"
    },
    {
      name: "高阶萌妹成长指南",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1962060311.mp3",
      cover: "https://p1.music.126.net/-hidnab1I66J8M88zWLa5A==/109951167637009585.jpg"
    },
    {
      name: "一梦千宵【喵☆酱ver】",
      artist: "喵☆酱",
      url: "https://music.163.com/song/media/outer/url?id=1924918249.mp3",
      cover: "https://p1.music.126.net/Kj2KfhJF8s7X3CTAqIrFdA==/109951167109618435.jpg"
    },
    {
      name: "Journey",
      artist: "Kirara Magic / ugumugu",
      url: "https://music.163.com/song/media/outer/url?id=1477825439.mp3",
      cover: "https://p2.music.126.net/hxhGGYClg3q4yKOQ67OCHQ==/109951165305045924.jpg"
    },
    {
      name: "snooze (feat. SHIKI)",
      artist: "wotaku / SHIKI",
      url: "https://music.163.com/song/media/outer/url?id=1873855825.mp3",
      cover: "https://p2.music.126.net/TUZNxthvHuRmgFBF7b4r3g==/109951166334540821.jpg"
    },
    {
      name: "Revive",
      artist: "LIONE",
      url: "https://music.163.com/song/media/outer/url?id=1395922525.mp3",
      cover: "https://p2.music.126.net/lUPE32HHrMbE8AnlHk7SMA==/109951170519056907.jpg"
    },
    {
      name: "Silhouette",
      artist: "Bvrnout / AXYL",
      url: "https://music.163.com/song/media/outer/url?id=1398764652.mp3",
      cover: "https://p2.music.126.net/ftPKjWMdVH0_gSKzGj5N0g==/109951167344480041.jpg"
    },
    {
      name: "Dream Big",
      artist: "Biometrix / Lou",
      url: "https://music.163.com/song/media/outer/url?id=1832458988.mp3",
      cover: "https://p2.music.126.net/sHDgQVzFKM4SQ30yWOfZ5w==/109951165833447495.jpg"
    },
    {
      name: "Heartbeat",
      artist: "Cloudier",
      url: "https://music.163.com/song/media/outer/url?id=1421200829.mp3",
      cover: "https://p2.music.126.net/8IyHWlRNAY2lTNAxaw7anQ==/109951164680358980.jpg"
    },
    {
      name: "tutu",
      artist: "鎖那",
      url: "https://music.163.com/song/media/outer/url?id=1854628391.mp3",
      cover: "https://p2.music.126.net/vQQham0ok6MLeY2GRIQNLA==/109951166101594087.jpg"
    },
    {
      name: "Defy",
      artist: "HoneyComeBear",
      url: "https://music.163.com/song/media/outer/url?id=1327809651.mp3",
      cover: "https://p2.music.126.net/l9xImGNEesdYUCtQc_6nuA==/109951163682794903.jpg"
    },
    {
      name: "妄想感傷代償連盟",
      artist: "YuNi",
      url: "https://music.163.com/song/media/outer/url?id=1360967190.mp3",
      cover: "https://p2.music.126.net/GfUCXRWUnGqdM5y0R-JtuQ==/109951164021307387.jpg"
    },
    {
      name: "Time Stop",
      artist: "BLACKDD / CYTEAM / PICK / 知晏",
      url: "https://music.163.com/song/media/outer/url?id=1992712131.mp3",
      cover: "https://p2.music.126.net/jjjqHYoelAqD_ACk0esKOA==/109951168242093318.jpg"
    },
    {
      name: "気の夏",
      artist: "Faux / INFinite / 闇音レンリ / SADRECORDS",
      url: "https://music.163.com/song/media/outer/url?id=1471024999.mp3",
      cover: "https://p2.music.126.net/HLYGLDClwXhiybQJwXpbFw==/109951165234403087.jpg"
    },
    {
      name: "Dragonflame",
      artist: "Kirara Magic",
      url: "https://music.163.com/song/media/outer/url?id=2009411428.mp3",
      cover: "https://p2.music.126.net/QiJnrTRYhxcpqIHfvq6Maw==/109951168176962947.jpg"
    },
    {
      name: "Tulala Story",
      artist: "beignet",
      url: "https://music.163.com/song/media/outer/url?id=477839693.mp3",
      cover: "https://p2.music.126.net/oXSghTeEj-wkJrDsQ34UrA==/109951167354561075.jpg"
    },
    {
      name: "Jelly",
      artist: "Hyper Potions / MYLK",
      url: "https://music.163.com/song/media/outer/url?id=1408601159.mp3",
      cover: "https://p2.music.126.net/Sr1Ypisswu8_8-fkfY4WbA==/109951164538963841.jpg"
    },
    {
      name: "伴雪",
      artist: "多多poi",
      url: "https://music.163.com/song/media/outer/url?id=1925424416.mp3",
      cover: "https://p2.music.126.net/IdtbxGkckZZQtLwR9kATUA==/109951167115181299.jpg"
    },
    {
      name: "Me + You",
      artist: "SABAI / Rave New World",
      url: "https://music.163.com/song/media/outer/url?id=1849872227.mp3",
      cover: "https://p2.music.126.net/9y2MkTahNM30epoAPI8n6g==/109951166089180230.jpg"
    },
    {
      name: "Da Capo",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=2026565329.mp3",
      cover: "https://p2.music.126.net/awzv1LpuBJiKTeB7roh_Aw==/109951168434956885.jpg"
    },
    {
      name: "新春游园",
      artist: "ChiliChill乐团",
      url: "https://music.163.com/song/media/outer/url?id=1916169611.mp3",
      cover: "https://p2.music.126.net/WZMGUBGo4JHkQ2pbUZD0kw==/109951166995626011.jpg"
    },
    {
      name: "Fairyland",
      artist: "CrossTheGalaxy",
      url: "https://music.163.com/song/media/outer/url?id=2030015165.mp3",
      cover: "https://p2.music.126.net/f0bTj-Qr-bykOpMU0FJcrg==/109951168519919916.jpg"
    },
    {
      name: "In My Room (feat. KMNZ LIZ)",
      artist: "キツネDJ / KMNZ",
      url: "https://music.163.com/song/media/outer/url?id=1853327677.mp3",
      cover: "https://p2.music.126.net/m8YGeWoLyuFMF6JHBSE1bw==/109951166087559899.jpg"
    },
    {
      name: "一舞千年",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=2025439280.mp3",
      cover: "https://p2.music.126.net/dMMiaCJU24uq872u92gaCA==/109951168423232220.jpg"
    },
    {
      name: "见习恶魔",
      artist: "早稻叽 / ANK",
      url: "https://music.163.com/song/media/outer/url?id=2029920411.mp3",
      cover: "https://p2.music.126.net/ags3L-WxdLc_7E2rBKJZzg==/109951168466788277.jpg"
    },
    {
      name: "天上掉下个林妹妹",
      artist: "白姬eternity / 乐栖谷 / 晴几IKU / 梓桐啊 / 柳醉烟",
      url: "https://music.163.com/song/media/outer/url?id=1984634721.mp3",
      cover: "https://p2.music.126.net/6C0UzY21jL70_R-sH_jE4Q==/109951167912595901.jpg"
    },
    {
      name: "清平误",
      artist: "早稻叽",
      url: "https://music.163.com/song/media/outer/url?id=2017459283.mp3",
      cover: "https://p2.music.126.net/v_hzQZFSESQ9bohdZJbAjA==/109951168262144754.jpg"
    },
    {
      name: "糖不甩",
      artist: "早稻叽",
      url: "https://music.163.com/song/media/outer/url?id=2017459278.mp3",
      cover: "https://p2.music.126.net/v_hzQZFSESQ9bohdZJbAjA==/109951168262144754.jpg"
    },
    {
      name: "大吉",
      artist: "早稻叽",
      url: "https://music.163.com/song/media/outer/url?id=2017459227.mp3",
      cover: "https://p2.music.126.net/v_hzQZFSESQ9bohdZJbAjA==/109951168262144754.jpg"
    },
    {
      name: "◆ I Really Want to Stay At Your House ◇",
      artist: "酒酒井Anri",
      url: "https://music.163.com/song/media/outer/url?id=1984321306.mp3",
      cover: "https://p2.music.126.net/WMp82Mc2i7frtQA1dXqSuw==/109951167582246502.jpg"
    },
    {
      name: "我不曾忘记",
      artist: "Akie秋绘 / 早凉",
      url: "https://music.163.com/song/media/outer/url?id=2018908569.mp3",
      cover: "https://p2.music.126.net/nKfCzCDleXluiUQzQLHQMA==/109951168276280462.jpg"
    },
    {
      name: "【星尘infinity】定影听潮起【2023拜年纪单品】【SYNTHESIZER V COVER】",
      artist: "忆无痕Air / 亏月迟 / 恩雅NYA",
      url: "https://music.163.com/song/media/outer/url?id=2018444748.mp3",
      cover: "https://p2.music.126.net/f02fIs3WiX2s8FFouxCp7w==/109951168271635566.jpg"
    },
    {
      name: "我不曾忘记",
      artist: "花玲 / 张安琪 / 沐霏",
      url: "https://music.163.com/song/media/outer/url?id=2014336709.mp3",
      cover: "https://p2.music.126.net/dM_2lEqG7ZP7l0NjoApPFg==/109951168232666774.jpg"
    },
    {
      name: "闲来无事扰",
      artist: "洛少爷",
      url: "https://music.163.com/song/media/outer/url?id=1444691559.mp3",
      cover: "https://p2.music.126.net/-P1MlBFacFl5puexGquQuQ==/109951164950933966.jpg"
    },
    {
      name: "绕月",
      artist: "因你而在的梦",
      url: "https://music.163.com/song/media/outer/url?id=1969333305.mp3",
      cover: "https://p2.music.126.net/l_TTPvn9K_9GQ6-FtS6VdA==/109951167743648202.jpg"
    },
    {
      name: "划痕症",
      artist: "因你而在的梦",
      url: "https://music.163.com/song/media/outer/url?id=1969338080.mp3",
      cover: "https://p2.music.126.net/l_TTPvn9K_9GQ6-FtS6VdA==/109951167743648202.jpg"
    },
    {
      name: "椰蓉面包",
      artist: "因你而在的梦",
      url: "https://music.163.com/song/media/outer/url?id=1969333309.mp3",
      cover: "https://p1.music.126.net/l_TTPvn9K_9GQ6-FtS6VdA==/109951167743648202.jpg"
    },
    {
      name: "若把你",
      artist: "Kirsty刘瑾睿",
      url: "https://music.163.com/song/media/outer/url?id=865632948.mp3",
      cover: "https://p1.music.126.net/M877M2-VhWZiLPVFORf9iQ==/109951163401482434.jpg"
    },
    {
      name: "安娜的橱窗",
      artist: "封茗囧菌",
      url: "https://music.163.com/song/media/outer/url?id=537470060.mp3",
      cover: "https://p1.music.126.net/wGiTjx3Mzhcds6UDMwPhQw==/109951167148145064.jpg"
    },
    {
      name: "璃云月海",
      artist: "宴宁 / 鹿喑kana / XY大甘蔗 / 杜冥鸦",
      url: "https://music.163.com/song/media/outer/url?id=1913819637.mp3",
      cover: "https://p1.music.126.net/8WnszTakKcTlpkn-PW7Hjg==/109951166961859763.jpg"
    },
    {
      name: "The Birth Of A Star (From Stellaris Original Game Soundtrack)",
      artist: "Andreas Waldetoft",
      url: "https://music.163.com/song/media/outer/url?id=1393259812.mp3",
      cover: "https://p1.music.126.net/CJJvMmVYktLsSmxQ2OpH8A==/109951164386591264.jpg"
    },
    {
      name: "春风十里报新年",
      artist: "接个吻，开一枪 / 火鸡 / 吕口口 / Lambert凌杰 / 杨胖雨",
      url: "https://music.163.com/song/media/outer/url?id=1413464902.mp3",
      cover: "https://p1.music.126.net/A157zQR5rR66LMatjYAucQ==/109951164595606537.jpg"
    },
    {
      name: "春节(Spring Festival)",
      artist: "JuggShots贾格",
      url: "https://music.163.com/song/media/outer/url?id=538728297.mp3",
      cover: "https://p2.music.126.net/6REwwgyz1L_7KzgH75zzhg==/109951163840760520.jpg"
    },
    {
      name: "新年发 (童声版)",
      artist: "陈奕雯",
      url: "https://music.163.com/song/media/outer/url?id=529834858.mp3",
      cover: "https://p2.music.126.net/oNK76znD_skpIG4eAltO9w==/109951163100354060.jpg"
    },
    {
      name: "可愛くてごめん (feat. かぴ)",
      artist: "HoneyWorks / かぴ",
      url: "https://music.163.com/song/media/outer/url?id=1969519579.mp3",
      cover: "https://p2.music.126.net/ygvJefaxNtKGCeidHU0GpA==/109951167745817208.jpg"
    },
    {
      name: "坐忘道",
      artist: "王朝1982",
      url: "https://music.163.com/song/media/outer/url?id=2009755016.mp3",
      cover: "https://p2.music.126.net/3Ms68c_BGwI2trwlXO47oQ==/109951168181621555.jpg"
    },
    {
      name: "Virtual to LIVE",
      artist: "にじさんじ",
      url: "https://music.163.com/song/media/outer/url?id=1928403045.mp3",
      cover: "https://p2.music.126.net/cjs0dGt-KQx11LvsGagjWA==/109951167152284435.jpg"
    },
    {
      name: "2023·不可思议的十四亿分之一",
      artist: "Akie秋绘 / 少年霜 / 早凉 / 熊子 / 洛萱 / 李扶澜 / 冷玄星 / 柏凝 / 朵芊 / 萧忆情Alex",
      url: "https://music.163.com/song/media/outer/url?id=2010894901.mp3",
      cover: "https://p2.music.126.net/60_mEYXg2OF2ERD8kUDUpg==/109951168197670556.jpg"
    },
    {
      name: "如果突然想起我",
      artist: "喵☆酱 / 花玲 / 爆裂菊是也",
      url: "https://music.163.com/song/media/outer/url?id=1983534049.mp3",
      cover: "https://p2.music.126.net/TlmxUEBp68EH4CMe4ROXqQ==/109951167898737755.jpg"
    },
    {
      name: "Leap Top",
      artist: "A-SOUL",
      url: "https://music.163.com/song/media/outer/url?id=2004897452.mp3",
      cover: "https://p2.music.126.net/NRGLyAxLIWJsDer6yGEGAw==/109951168125138848.jpg"
    },
    {
      name: "惊蛰",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=1898721868.mp3",
      cover: "https://p2.music.126.net/39Wa2JKk9A1eIB42FHs6fg==/109951166666088995.jpg"
    },
    {
      name: "恋学者-2021-",
      artist: "ウソツキ",
      url: "https://music.163.com/song/media/outer/url?id=1853563111.mp3",
      cover: "https://p2.music.126.net/CuvUVykcQGKa4wGuO6RQ-w==/109951166090332509.jpg"
    },
    {
      name: "Constellation",
      artist: "Far Out / Karra",
      url: "https://music.163.com/song/media/outer/url?id=1429604070.mp3",
      cover: "https://p2.music.126.net/1mb9A7ur-9EJA-i-d9AbQg==/109951170686043995.jpg"
    },
    {
      name: "Will (Tenkitsune x MLKSHK! Remix)",
      artist: "SnoweeD / Tenkitsune",
      url: "https://music.163.com/song/media/outer/url?id=415792667.mp3",
      cover: "https://p2.music.126.net/5R3DJkscGsGQl4R52YMDbg==/3440371885633635.jpg"
    },
    {
      name: "The Awakening (Alan Walker Remix)",
      artist: "Alan Walker",
      url: "https://music.163.com/song/media/outer/url?id=1888256558.mp3",
      cover: "https://p2.music.126.net/6nu3Te27oUZggwYcy8OBGw==/109951166536276477.jpg"
    },
    {
      name: "Struggle (Original Mix)",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=36924979.mp3",
      cover: "https://p2.music.126.net/2-dplTa5peucbIm3Ql10Pg==/109951164431577668.jpg"
    },
    {
      name: "Once More",
      artist: "beignet",
      url: "https://music.163.com/song/media/outer/url?id=1338940981.mp3",
      cover: "https://p2.music.126.net/o90TQGjj0xVrJPR4-6eHtg==/109951167999956842.jpg"
    },
    {
      name: "Lovestruck (Neon Edit)",
      artist: "AIKA",
      url: "https://music.163.com/song/media/outer/url?id=550136216.mp3",
      cover: "https://p2.music.126.net/ElPiCls0Li2NkjPagFZOIQ==/109951163448621054.jpg"
    },
    {
      name: "新春小记",
      artist: "OriginGirls / 舞雪 / 玖诺 / 玩颜小小只 / 萌比Yfh / 靡夏koali / 颜欢celia / 迟色 / 桃子在发芽",
      url: "https://music.163.com/song/media/outer/url?id=1917111994.mp3",
      cover: "https://p2.music.126.net/7JiGBUX7nzQoW9SUyJQvXg==/109951167008067323.jpg"
    },
    {
      name: "すずめ——「すずめの戸締り(铃芽户缔)」",
      artist: "森島Melon",
      url: "https://music.163.com/song/media/outer/url?id=1999385344.mp3",
      cover: "https://p2.music.126.net/y2XewYCiwwxV4IiUloCTDQ==/109951168070098478.jpg"
    },
    {
      name: "CHO-DARI-  COVER",
      artist: "久遠千歳 / 23.exe",
      url: "https://music.163.com/song/media/outer/url?id=1423299026.mp3",
      cover: "https://p2.music.126.net/6odfyd5AWHA-JMK6m2mEXQ==/109951164707275305.jpg"
    },
    {
      name: "追光者",
      artist: "早凉",
      url: "https://music.163.com/song/media/outer/url?id=1996364197.mp3",
      cover: "https://p2.music.126.net/e0N5qMySuVc2NVnqKiUxKw==/109951168039780664.jpg"
    },
    {
      name: "须弥 Sumeru",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1992141905.mp3",
      cover: "https://p2.music.126.net/mi40R92CSJ6zeroCvLxQQA==/109951167997564898.jpg"
    },
    {
      name: "me me she",
      artist: "早稻叽",
      url: "https://music.163.com/song/media/outer/url?id=1944649899.mp3",
      cover: "https://p2.music.126.net/imuZcmr_PpU7aGJ_D0rjzQ==/109951167379471635.jpg"
    },
    {
      name: "漠河舞厅",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=1946693390.mp3",
      cover: "https://p2.music.126.net/7UXwOHlWlWsa0Fj0CKONxg==/109951167405082197.jpg"
    },
    {
      name: "回马枪",
      artist: "兰音Reine",
      url: "https://music.163.com/song/media/outer/url?id=1961054143.mp3",
      cover: "https://p2.music.126.net/7h1QpX1DfouY3yOIBgsrIQ==/109951167619651395.jpg"
    },
    {
      name: "人间烂漫（翻自 Hanser）",
      artist: "初酱子",
      url: "https://music.163.com/song/media/outer/url?id=1427249012.mp3",
      cover: "https://p2.music.126.net/VQUCK2QyP-Lcf66NYICUOw==/109951164756572909.jpg"
    },
    {
      name: "晴空一尾鲤（翻自 Hanser）",
      artist: "引歌HiruUta",
      url: "https://music.163.com/song/media/outer/url?id=1437916396.mp3",
      cover: "https://p2.music.126.net/je4AmGdPL0j0hr4RiKFxOQ==/109951164874426934.jpg"
    },
    {
      name: "你的猫咪-Hanser",
      artist: "Hanser09号机",
      url: "https://music.163.com/song/media/outer/url?id=2044648921.mp3",
      cover: "https://p2.music.126.net/W-iBkUHQq-RMJwLOv2GeaQ==/109951167362609397.jpg"
    },
    {
      name: "小青呱",
      artist: "hanser",
      url: "https://music.163.com/song/media/outer/url?id=2162079713.mp3",
      cover: "https://p2.music.126.net/XZet0Td4mFbpNCLFsb3rzA==/109951169643286046.jpg"
    },
    {
      name: "Mad World",
      artist: "2WEI / Tommee Profitt / Fleurie",
      url: "https://music.163.com/song/media/outer/url?id=1917282577.mp3",
      cover: "https://p2.music.126.net/CHSBdgzAiOgmBsDv6bjDuw==/109951170034384361.jpg"
    },
    {
      name: "Playing God",
      artist: "Polyphia",
      url: "https://music.163.com/song/media/outer/url?id=1942832207.mp3",
      cover: "https://p2.music.126.net/MjLADbdd1YMg6mBKkB6-cQ==/109951167356291749.jpg"
    },
    {
      name: "Harmonics",
      artist: "雄之助 / GUMI / 巡音ルカ / CircusP",
      url: "https://music.163.com/song/media/outer/url?id=1486506463.mp3",
      cover: "https://p2.music.126.net/FFaPUAOXHCT9jotsTEgxjg==/109951165385950628.jpg"
    },
    {
      name: "dramatic",
      artist: "Cat & Calmell",
      url: "https://music.163.com/song/media/outer/url?id=1811825803.mp3",
      cover: "https://p2.music.126.net/N9fsxIhmOed9zJKkI9yINw==/109951165627592562.jpg"
    },
    {
      name: "Bluelight",
      artist: "Dreem",
      url: "https://music.163.com/song/media/outer/url?id=1909983849.mp3",
      cover: "https://p2.music.126.net/u0Wa3OWHW3RtnOJQXtkuSQ==/109951166903930748.jpg"
    },
    {
      name: "失恋ソング沢山聴いて 泣いてばかりの私はもう。",
      artist: "りりあ。",
      url: "https://music.163.com/song/media/outer/url?id=1962373924.mp3",
      cover: "https://p2.music.126.net/u7WEYZ1Eq6poFKI_CgbDEw==/109951171027725486.jpg"
    },
    {
      name: "砂のこども (feat. 水瀬ましろ)",
      artist: "水瀬ましろ",
      url: "https://music.163.com/song/media/outer/url?id=413077822.mp3",
      cover: "https://p2.music.126.net/bLxsDWH_tEWBKIzVV0TIdQ==/109951168980390172.jpg"
    },
    {
      name: "Casper",
      artist: "TroyBoi",
      url: "https://music.163.com/song/media/outer/url?id=1437795392.mp3",
      cover: "https://p2.music.126.net/Qcz55XlpqDIqYpEJX0Gzww==/109951168725360888.jpg"
    },
    {
      name: "坏人是不是你",
      artist: "Hanser / 梅可露Macaron",
      url: "https://music.163.com/song/media/outer/url?id=1899989577.mp3",
      cover: "https://p1.music.126.net/1a7_yg9idzzEsGr2wv-xrg==/109951166681286101.jpg"
    },
    {
      name: "不问天",
      artist: "2233",
      url: "https://music.163.com/song/media/outer/url?id=1905945600.mp3",
      cover: "https://p1.music.126.net/7_0VZuNkUd4yQi_yKWBpvw==/109951173227293259.jpg"
    },
    {
      name: "越权访问-崩坏：星穹铁道",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1953104779.mp3",
      cover: "https://p1.music.126.net/OXXr7tRkox7OlpIvcaZuCg==/109951167507831115.jpg"
    },
    {
      name: "霓虹甜心",
      artist: "冰糖IO / 花花Haya / 月隐空夜",
      url: "https://music.163.com/song/media/outer/url?id=1925405466.mp3",
      cover: "https://p1.music.126.net/pSWuD4x5e854ISHCKZYfHQ==/109951167114812528.jpg"
    },
    {
      name: "失眠飞行",
      artist: "KBShinya / Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1394847947.mp3",
      cover: "https://p1.music.126.net/xHhf9PUMY55EEswtQaMd7A==/109951164404933079.jpg"
    },
    {
      name: "室内系的TrackMaker(YUNOMI)（翻自 nicamoq）",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=537787665.mp3",
      cover: "https://p1.music.126.net/9GAbSb_hlXPu66HWInJOww==/109951162846052486.jpg"
    },
    {
      name: "流年如歌 (泠鸢)",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1429505324.mp3",
      cover: "https://p1.music.126.net/hauPmnxKqlnkASFvDqitEw==/109951164643900131.jpg"
    },
    {
      name: "末春",
      artist: "呜米 / 咩栗",
      url: "https://music.163.com/song/media/outer/url?id=1962591918.mp3",
      cover: "https://p1.music.126.net/EtYDvK5j0es86Ukhhntxlg==/109951167646252724.jpg"
    },
    {
      name: "快乐星猫",
      artist: "牛奶咖啡",
      url: "https://music.163.com/song/media/outer/url?id=5251825.mp3",
      cover: "https://p1.music.126.net/5zWxjZ0zWxZqmuv0LgKh_g==/109951173203195076.jpg"
    },
    {
      name: "一半一半",
      artist: "洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=27510174.mp3",
      cover: "https://p1.music.126.net/x7HpWLL__8mflpm0NtAoww==/5678977557518196.jpg"
    },
    {
      name: "【星火行动】朝汐（泠鸢&双笙）",
      artist: "双笙（陈元汐） / 泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1316479227.mp3",
      cover: "https://p1.music.126.net/yLfVa75LLy0e3cgj4HGYaA==/109951163594033083.jpg"
    },
    {
      name: "桃花笑-泠鸢",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1418163109.mp3",
      cover: "https://p1.music.126.net/hauPmnxKqlnkASFvDqitEw==/109951164643900131.jpg"
    },
    {
      name: "STAY",
      artist: "早凉",
      url: "https://music.163.com/song/media/outer/url?id=1881414105.mp3",
      cover: "https://p1.music.126.net/uR4LXMM9vCI7sUCNAWRekQ==/109951166456312617.jpg"
    },
    {
      name: "我的答案",
      artist: "周深",
      url: "https://music.163.com/song/media/outer/url?id=1924224595.mp3",
      cover: "https://p1.music.126.net/BeZ3L68gI0lWpGpHGy8Wnw==/109951167342014147.jpg"
    },
    {
      name: "万千风华",
      artist: "中国绊爱 / litterzy",
      url: "https://music.163.com/song/media/outer/url?id=1961453270.mp3",
      cover: "https://p1.music.126.net/vbGDywJZGMxdKYTrUsPuNw==/109951167626544886.jpg"
    },
    {
      name: "前前前世（Slow Ver.）",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=446247397.mp3",
      cover: "https://p1.music.126.net/78MY7YoxeJP0U2R6BSwwQQ==/109951162821535256.jpg"
    },
    {
      name: "一梦千宵【泠鸢翻唱】",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1918471675.mp3",
      cover: "https://p1.music.126.net/hV7l4FbZZN9y4cePBxzGdQ==/109951167027067101.jpg"
    },
    {
      name: "让风告诉你",
      artist: "花玲 / 喵☆酱 / 宴宁 / kinsen",
      url: "https://music.163.com/song/media/outer/url?id=1818031620.mp3",
      cover: "https://p1.music.126.net/pYKBjkB6FoNh5Yxkb9uCbw==/109951165698369632.jpg"
    },
    {
      name: "一梦千宵",
      artist: "苏逸_Suyi / 洛天依Official",
      url: "https://music.163.com/song/media/outer/url?id=1913873767.mp3",
      cover: "https://p1.music.126.net/LjeSE86DNSr3Dy3N_pJ8ZQ==/109951166962567008.jpg"
    },
    {
      name: "你别忘",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1489958235.mp3",
      cover: "https://p1.music.126.net/PXM2QVShSGrhKi5C2D38HA==/109951165415691712.jpg"
    },
    {
      name: "冰封交响曲 Symphony of Boreal Wind",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1481392864.mp3",
      cover: "https://p1.music.126.net/odoWDzYyHAe-IzLzRxkg3Q==/109951165336802038.jpg"
    },
    {
      name: "天霁日出 Rays of Sunlight",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1492275966.mp3",
      cover: "https://p1.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg"
    },
    {
      name: "虹霞垂天 Rainbow at Summit",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1492275967.mp3",
      cover: "https://p1.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg"
    },
    {
      name: "偶遇归人 A Serendipitous Encounter",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1492276611.mp3",
      cover: "https://p1.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg"
    },
    {
      name: "尘世闲游 Rex Incognito",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1817410059.mp3",
      cover: "https://p2.music.126.net/hwxZS2Bv9Dht_8chjLLR-Q==/109951165690591384.jpg"
    },
    {
      name: "岩间对饮 Drink With a Hermit",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1492276643.mp3",
      cover: "https://p2.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg"
    },
    {
      name: "希望的新一天 A New Day with Hope",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1481390662.mp3",
      cover: "https://p2.music.126.net/odoWDzYyHAe-IzLzRxkg3Q==/109951165336802038.jpg"
    },
    {
      name: "晚安，璃月 Good Night, Liyue",
      artist: "陈致逸 / HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1492276419.mp3",
      cover: "https://p2.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg"
    },
    {
      name: "神女劈观·唤情 Devastation and Redemption",
      artist: "HOYO-MiX",
      url: "https://music.163.com/song/media/outer/url?id=1910911958.mp3",
      cover: "https://p2.music.126.net/8gMfTTbDifrypmWQ2fM0Ig==/109951166919194723.jpg"
    },
    {
      name: "中国有流行",
      artist: "葛东琪",
      url: "https://music.163.com/song/media/outer/url?id=1358852243.mp3",
      cover: "https://p2.music.126.net/w7SP_KJJOSM--8oVBEHsoA==/109951164000299447.jpg"
    },
    {
      name: "本草纲目",
      artist: "周杰伦",
      url: "https://music.163.com/song/media/outer/url?id=185882.mp3",
      cover: "https://p2.music.126.net/06Yhj36Qu3ZCQJklc9MNKg==/7980255395852522.jpg"
    },
    {
      name: "哔哩吧啦 BOOM",
      artist: "瑾宝",
      url: "https://music.163.com/song/media/outer/url?id=1376867679.mp3",
      cover: "https://p2.music.126.net/ZGIxeTtfv5LFAB37k6MhZw==/109951164202786838.jpg"
    },
    {
      name: "除夕(cover：A-SOUL）",
      artist: "点子",
      url: "https://music.163.com/song/media/outer/url?id=1916758557.mp3",
      cover: "https://p2.music.126.net/DqOAeptsoRBh-tTsd7yQyw==/109951167003629499.jpg"
    },
    {
      name: "不鼓自鸣",
      artist: "尚雯婕",
      url: "https://music.163.com/song/media/outer/url?id=1473545470.mp3",
      cover: "https://p2.music.126.net/jSCv1UfrNtwT3evgzfgMyQ==/109951165264547658.jpg"
    },
    {
      name: "ピカチュウのうた",
      artist: "大谷育江",
      url: "https://music.163.com/song/media/outer/url?id=424264956.mp3",
      cover: "https://p2.music.126.net/H0kQHP9VCF3KtUT5xQSkNw==/3413983625296090.jpg"
    },
    {
      name: "弈(2022拜年纪单品)",
      artist: "应钟Clochette",
      url: "https://music.163.com/song/media/outer/url?id=1917231454.mp3",
      cover: "https://p2.music.126.net/wKKl5yT5TBUvZJRFF_mQwg==/109951167009797370.jpg"
    },
    {
      name: "寰宇",
      artist: "林渝植Anoryz / SORROW / 周首 / 蒋哈哈 / 词者lyrics / 贺B / 李旻浩 Myhom Lee / 张亿辉Ka-Ching / Hyeen Choi",
      url: "https://music.163.com/song/media/outer/url?id=1940291798.mp3",
      cover: "https://p2.music.126.net/rAEE9JaRq9QvIDtfrnTq1g==/109951167324765277.jpg"
    },
    {
      name: "龙吟",
      artist: "张杰",
      url: "https://music.163.com/song/media/outer/url?id=1940359497.mp3",
      cover: "https://p2.music.126.net/-2CzLn24ba_V_fLAJiewkA==/109951167325850908.jpg"
    },
    {
      name: "漠河舞厅·2022",
      artist: "柳爽",
      url: "https://music.163.com/song/media/outer/url?id=1894094482.mp3",
      cover: "https://p2.music.126.net/m8BMzRWR53lMu2uaMYV2mA==/109951166609630672.jpg"
    },
    {
      name: "我的悲伤是水做的",
      artist: "多多poi",
      url: "https://music.163.com/song/media/outer/url?id=1939506453.mp3",
      cover: "https://p1.music.126.net/-LkZMybWHpEDyF4ejfus8w==/109951167118167300.jpg"
    },
    {
      name: "阳光正好",
      artist: "XMASwu(吴骜)",
      url: "https://music.163.com/song/media/outer/url?id=1483066930.mp3",
      cover: "https://p2.music.126.net/9vuaxyoZlWLxR1sx-mElHg==/109951165351202852.jpg"
    },
    {
      name: "隔离中的少女日常",
      artist: "小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=1934998171.mp3",
      cover: "https://p1.music.126.net/-GA-RgmANk3AdxpUt0TtLw==/109951167243242551.jpg"
    },
    {
      name: "少女作妖日记",
      artist: "倪莫问",
      url: "https://music.163.com/song/media/outer/url?id=1440637228.mp3",
      cover: "https://p1.music.126.net/JnvDS1asdoEz43xYLHYwxQ==/109951164906275092.jpg"
    },
    {
      name: "醒过来！te-yut-te",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=33682751.mp3",
      cover: "https://p1.music.126.net/2Rcimduy6Oj5Xz6beJDSIg==/3364505581118558.jpg"
    },
    {
      name: "Drunk Groove",
      artist: "Марув",
      url: "https://music.163.com/song/media/outer/url?id=1369701289.mp3",
      cover: "https://p1.music.126.net/iiOOSeXtNGyPrpO5c3bIYg==/109951164123617465.jpg"
    },
    {
      name: "Q (feat. Gawr Gura)",
      artist: "森カリオペ / Gawr Gura",
      url: "https://music.163.com/song/media/outer/url?id=1931647934.mp3",
      cover: "https://p1.music.126.net/CeBOZmbBUVWtLWKRxplaMA==/109951167193613800.jpg"
    },
    {
      name: "不赴",
      artist: "忘川风华录 / 苍穹 / 赤羽",
      url: "https://music.163.com/song/media/outer/url?id=1869972926.mp3",
      cover: "https://p1.music.126.net/Vb7pl89S9mdRsxxl3bIwaA==/109951166289521492.jpg"
    },
    {
      name: "踏雪-燃情冬奥",
      artist: "颂宵 / 岑玉竹 / 五归 / 柒韵霜 / 陌翎 / 灀玉 / 言九 / 寻言音乐组",
      url: "https://music.163.com/song/media/outer/url?id=1916610026.mp3",
      cover: "https://p1.music.126.net/Yh58iAkleq4dByUudKrk1g==/109951167001367839.jpg"
    },
    {
      name: "春三月",
      artist: "S_lululu",
      url: "https://music.163.com/song/media/outer/url?id=1830546943.mp3",
      cover: "https://p1.music.126.net/455N2VWe_rUAydhnrRGnDg==/109951165815176995.jpg"
    },
    {
      name: "カタオモイ（Cover Aimer）",
      artist: "シンシン / 雷昊宇",
      url: "https://music.163.com/song/media/outer/url?id=477905651.mp3",
      cover: "https://p1.music.126.net/FMyoHJi_V-0TG1aPv1Pkvg==/109951162849311784.jpg"
    },
    {
      name: "囍（Chinese Wedding）",
      artist: "葛东琪",
      url: "https://music.163.com/song/media/outer/url?id=1303289043.mp3",
      cover: "https://p1.music.126.net/H3Q3SeMVtuHvHY2uyaQdOw==/109951163472855051.jpg"
    },
    {
      name: "会有",
      artist: "因你而在的梦 / 小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=1931302997.mp3",
      cover: "https://p2.music.126.net/WtRdw7quqiVkuW48OEMT6Q==/109951167189014672.jpg"
    },
    {
      name: "百变奶精",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1495093451.mp3",
      cover: "https://p2.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg"
    },
    {
      name: "流星",
      artist: "七海Nana7mi / 阿梓从小就很可爱 / 小可学妹",
      url: "https://music.163.com/song/media/outer/url?id=1915012846.mp3",
      cover: "https://p2.music.126.net/sMG5pfgxSh-mnqQagOzzqw==/109951172369789246.jpg"
    },
    {
      name: "Rubia",
      artist: "Hanser",
      url: "https://music.163.com/song/media/outer/url?id=1818680189.mp3",
      cover: "https://p2.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg"
    },
    {
      name: "Rubia",
      artist: "周深",
      url: "https://music.163.com/song/media/outer/url?id=1815684465.mp3",
      cover: "https://p2.music.126.net/499AYZ3epP1T7GJYvnJZZQ==/109951165671947083.jpg"
    },
    {
      name: "勾指起誓",
      artist: "帅比笙歌超可爱OvO / 小可学妹 / 阿梓",
      url: "https://music.163.com/song/media/outer/url?id=1354814952.mp3",
      cover: "https://p2.music.126.net/AObi3jlO_66Ft6mu_XdfTg==/109951163957221126.jpg"
    },
    {
      name: "Ican",
      artist: "Minnutes",
      url: "https://music.163.com/song/media/outer/url?id=21224493.mp3",
      cover: "https://p2.music.126.net/OzSG4J_qPV-Fy18cnN1E2g==/109951165717848224.jpg"
    },
    {
      name: "勾指起誓",
      artist: "多多poi",
      url: "https://music.163.com/song/media/outer/url?id=1813405342.mp3",
      cover: "https://p2.music.126.net/_Vr5d3Ul1krHGb7mgC3_kg==/109951166074905526.jpg"
    },
    {
      name: "勾指起誓",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1350160463.mp3",
      cover: "https://p2.music.126.net/fxI_iAsaRU9M5ZGE-Pu7iw==/109951164479032071.jpg"
    },
    {
      name: "スノーマジックファンタジー",
      artist: "高橋李依",
      url: "https://music.163.com/song/media/outer/url?id=1928112928.mp3",
      cover: "https://p2.music.126.net/3BhTO5cEJUD3_3m4k726Gg==/109951167148733032.jpg"
    },
    {
      name: "大鱼 (Live)",
      artist: "周深",
      url: "https://music.163.com/song/media/outer/url?id=1421191783.mp3",
      cover: "https://p2.music.126.net/yZN047VYz7selK4LCsi1Zg==/109951164681443868.jpg"
    },
    {
      name: "小手鞠",
      artist: "浅野隼人",
      url: "https://music.163.com/song/media/outer/url?id=28854262.mp3",
      cover: "https://p2.music.126.net/Qm-SzFHsEGqmeUbBqMQ-uQ==/5954954976494177.jpg"
    },
    {
      name: "Remember Our Summer",
      artist: "FrogMonster 蛙蛙",
      url: "https://music.163.com/song/media/outer/url?id=1384450197.mp3",
      cover: "https://p2.music.126.net/nRKx-2GTCaO4X_tcdE-_bQ==/109951164296813169.jpg"
    },
    {
      name: "Van!shment Th!s World",
      artist: "Black Raison d'être",
      url: "https://music.163.com/song/media/outer/url?id=28240357.mp3",
      cover: "https://p2.music.126.net/xYxBXtDw4kttUR5FVEUqXA==/109951166089700157.jpg"
    },
    {
      name: "INSIDE IDENTITY",
      artist: "内田真礼 / 赤﨑千夏 / 浅倉杏美 / 上坂すみれ / Black Raison d'être",
      url: "https://music.163.com/song/media/outer/url?id=28914772.mp3",
      cover: "https://p2.music.126.net/voshDb6wrzSAR1SmJNpIoA==/8912641254855010.jpg"
    },
    {
      name: "YOU & IDOL",
      artist: "嘉然Diana",
      url: "https://music.163.com/song/media/outer/url?id=1892541451.mp3",
      cover: "https://p1.music.126.net/alleAOt668DTfxrJXPjMhg==/109951166474157152.jpg"
    },
    {
      name: "白金ディスコ",
      artist: "井口裕香",
      url: "https://music.163.com/song/media/outer/url?id=28050632.mp3",
      cover: "https://p1.music.126.net/jlfg1ip2lkJ-d-LqWnsoCg==/5836207720347460.jpg"
    },
    {
      name: "sweets parade",
      artist: "花澤香菜",
      url: "https://music.163.com/song/media/outer/url?id=809268.mp3",
      cover: "https://p1.music.126.net/soVzasgTYU36F1uAirKEhQ==/109951165628137310.jpg"
    },
    {
      name: "Wherever You Go (feat. John Martin) [Alan Walker Remix]",
      artist: "Alok / John Martin / Alan Walker",
      url: "https://music.163.com/song/media/outer/url?id=1909080694.mp3",
      cover: "https://p1.music.126.net/uaey-5gp7Qevsx1tZKqz5w==/109951166888100959.jpg"
    },
    {
      name: "【Aovoice】動物園は大変だ（蜡笔小新OP）（翻自 TUNE'S）",
      artist: "Aovoice葵",
      url: "https://music.163.com/song/media/outer/url?id=1340002509.mp3",
      cover: "https://p1.music.126.net/bhlpNPg1Ysz4CL2JtGF3ew==/109951163793410661.jpg"
    },
    {
      name: "ハロ/ハワユ",
      artist: "Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=529662114.mp3",
      cover: "https://p1.music.126.net/FZX7XAjsmEPGyVOqm4H7aQ==/109951166361039007.jpg"
    },
    {
      name: "木兰行",
      artist: "忘川风华录 / 苍穹",
      url: "https://music.163.com/song/media/outer/url?id=1436879629.mp3",
      cover: "https://p1.music.126.net/V6-iN1n4Sx9Mt2GdBDNCSQ==/109951165566891071.jpg"
    },
    {
      name: "Gimme×Gimme",
      artist: "P*Light / Giga / 初音ミク / 鏡音リン",
      url: "https://music.163.com/song/media/outer/url?id=1402830753.mp3",
      cover: "https://p1.music.126.net/j1aWfCfPtDKjdlWa4zo8hQ==/109951164481830838.jpg"
    },
    {
      name: "横竖撇点折(泠鸢）",
      artist: "泠鸢yousa",
      url: "https://music.163.com/song/media/outer/url?id=1419023911.mp3",
      cover: "https://p1.music.126.net/hauPmnxKqlnkASFvDqitEw==/109951164643900131.jpg"
    },
    {
      name: "meet you",
      artist: "Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=1334595691.mp3",
      cover: "https://p1.music.126.net/egds65QeIDR9Vgy-avKlog==/109951163736818426.jpg"
    },
    {
      name: "Hello World",
      artist: "Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=1807799562.mp3",
      cover: "https://p1.music.126.net/F76Wij8WJQG7N9CfdyJ-jg==/109951165585701403.jpg"
    },
    {
      name: "弈【2022拜年纪单品】",
      artist: "御司",
      url: "https://music.163.com/song/media/outer/url?id=1917184685.mp3",
      cover: "https://p1.music.126.net/ZkyTmuaFN3Fm6hxMx2miCQ==/109951167009138659.jpg"
    },
    {
      name: "私の言葉",
      artist: "久保ユリカ",
      url: "https://music.163.com/song/media/outer/url?id=30070747.mp3",
      cover: "https://p1.music.126.net/PAcu0nMcpLsZCg9bp_5FOA==/7835119859540294.jpg"
    },
    {
      name: "never stop my beat",
      artist: "DJ TORA / Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=1916718120.mp3",
      cover: "https://p1.music.126.net/i7C6KOu8BQVzFuv7uaoYYA==/109951167002858164.jpg"
    },
    {
      name: "AIAIAI",
      artist: "Kizuna AI / 中田ヤスタカ",
      url: "https://music.163.com/song/media/outer/url?id=1353381404.mp3",
      cover: "https://p2.music.126.net/WMBDaJY7qVS2d_SZsPYmpA==/109951163942607071.jpg"
    },
    {
      name: "The Miracle (HANABI Remix)",
      artist: "Kizuna AI / HANABI",
      url: "https://music.163.com/song/media/outer/url?id=1889995100.mp3",
      cover: "https://p2.music.126.net/X9b0Lgip27ydeg_hDAMABg==/109951166557919778.jpg"
    },
    {
      name: "Meet You (NEONMAFIA Extended Remix)",
      artist: "Kizuna AI / NEONMAFIA",
      url: "https://music.163.com/song/media/outer/url?id=1889990514.mp3",
      cover: "https://p2.music.126.net/X9b0Lgip27ydeg_hDAMABg==/109951166557919778.jpg"
    },
    {
      name: "Hello Morning (DJ TORA Extended Remix)",
      artist: "Kizuna AI / DJ TORA",
      url: "https://music.163.com/song/media/outer/url?id=1889990479.mp3",
      cover: "https://p2.music.126.net/X9b0Lgip27ydeg_hDAMABg==/109951166557919778.jpg"
    },
    {
      name: "FL-AI-YER",
      artist: "Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=1442825437.mp3",
      cover: "https://p2.music.126.net/MqKT1dqSSOMOzjWMBfPqAw==/109951164931650199.jpg"
    },
    {
      name: "miracle step",
      artist: "Kizuna AI",
      url: "https://music.163.com/song/media/outer/url?id=1325897063.mp3",
      cover: "https://p2.music.126.net/TUB2sNG8S-2klulN655EYw==/109951163670682940.jpg"
    },
    {
      name: "苏联国歌",
      artist: "俄罗斯军队模范亚历山德罗夫红旗歌舞团",
      url: "https://music.163.com/song/media/outer/url?id=1806196967.mp3",
      cover: "https://p2.music.126.net/EH5ki41ksYcz2gM_5Xo5OQ==/109951165588310730.jpg"
    },
    {
      name: "火花骑士（原神 可莉同人曲）",
      artist: "李缘忻",
      url: "https://music.163.com/song/media/outer/url?id=1495837996.mp3",
      cover: "https://p2.music.126.net/d1N2i9Akzcw0_Hu77eP0zA==/109951165474142322.jpg"
    },
    {
      name: "传说的世界",
      artist: "A-SOUL",
      url: "https://music.163.com/song/media/outer/url?id=1903635166.mp3",
      cover: "https://p2.music.126.net/ttTnm6V0a6hF54bz_Ma4mw==/109951166730590342.jpg"
    },
    {
      name: "А зори здесь тихие-тихие",
      artist: "Lube / Алексей Филатов / Офицеры группы \"Альфа\"",
      url: "https://music.163.com/song/media/outer/url?id=1380398197.mp3",
      cover: "https://p2.music.126.net/gMjsukjHrZlsjGCZop2LiQ==/109951164922505986.jpg"
    },
    {
      name: "色香水（《堀与宫村》OP）（TV size）（翻自 神山羊）",
      artist: "Loky",
      url: "https://music.163.com/song/media/outer/url?id=1817723364.mp3",
      cover: "https://p2.music.126.net/xcXlGgQ7A_bKIHklGv9Esg==/109951165694624874.jpg"
    },
    {
      name: "まっすぐ（擅长捉弄的高木同学 第三季 OP）",
      artist: "Kyle Xian",
      url: "https://music.163.com/song/media/outer/url?id=1907327012.mp3",
      cover: "https://p2.music.126.net/VrU8ORkGgjdD5LPDvEAJSw==/109951166861586221.jpg"
    },
    {
      name: "ゼロセンチメートル (试听版)",
      artist: "大原ゆい子",
      url: "https://music.163.com/song/media/outer/url?id=1376669669.mp3",
      cover: "https://p2.music.126.net/vdchdw81BuNTo265UuVOtA==/109951164200576586.jpg"
    },
    {
      name: "BiBiC HEART",
      artist: "MYUKKE.",
      url: "https://music.163.com/song/media/outer/url?id=1874162498.mp3",
      cover: "https://p1.music.126.net/eUx3ZA2ww-oz8fVTpRgBGQ==/109951166339020379.jpg"
    },
    {
      name: "醉飞尘",
      artist: "塞壬唱片-MSR / Adam Gubman",
      url: "https://music.163.com/song/media/outer/url?id=1913463815.mp3",
      cover: "https://p1.music.126.net/tEghztHUj_M_LmMsmfnaXA==/109951166956797790.jpg"
    },
    {
      name: "彩蝶舞夏",
      artist: "何真真",
      url: "https://music.163.com/song/media/outer/url?id=29097535.mp3",
      cover: "https://p1.music.126.net/LxHGiWdRQQYS9GRTKjDogQ==/2531075769155659.jpg"
    },
    {
      name: "Panopticon",
      artist: "Really Slow Motion",
      url: "https://music.163.com/song/media/outer/url?id=405597921.mp3",
      cover: "https://p1.music.126.net/WwvtjxV-oK6bpuStaXX-4w==/3398590447310698.jpg"
    },
    {
      name: "愛にできることはまだあるかい",
      artist: "RADWIMPS",
      url: "https://music.163.com/song/media/outer/url?id=1401024455.mp3",
      cover: "https://p1.music.126.net/0y7bLoJNwFSMloH-M7XRGw==/109951164459591376.jpg"
    },
    {
      name: "グランドエスケープ feat.三浦透子",
      artist: "RADWIMPS / 三浦透子",
      url: "https://music.163.com/song/media/outer/url?id=1401025135.mp3",
      cover: "https://p1.music.126.net/0y7bLoJNwFSMloH-M7XRGw==/109951164459591376.jpg"
    },
    {
      name: "猫中毒",
      artist: "嘉然Diana",
      url: "https://music.163.com/song/media/outer/url?id=1883105723.mp3",
      cover: "https://p1.music.126.net/alleAOt668DTfxrJXPjMhg==/109951166474157152.jpg"
    },
    {
      name: "Pure Gold",
      artist: "oomiee",
      url: "https://music.163.com/song/media/outer/url?id=1302217269.mp3",
      cover: "https://p1.music.126.net/m92JudlfL5Al2ZKmhHYWbQ==/109951163463450592.jpg"
    },
    {
      name: "十二",
      artist: "橘子海 (Orange Ocean)",
      url: "https://music.163.com/song/media/outer/url?id=1878698259.mp3",
      cover: "https://p1.music.126.net/q1ViZazAkd93W9QPx3215Q==/109951166419008197.jpg"
    },
    {
      name: "2 Hearts (feat. Gia Koka)",
      artist: "Sam Feldt / Sigma / Gia Koka",
      url: "https://music.163.com/song/media/outer/url?id=1410707504.mp3",
      cover: "https://p1.music.126.net/BX4aZ3J9gP0C_4URZdNN8w==/109951170462275442.jpg"
    },
    {
      name: "Don't Worry",
      artist: "Madcon",
      url: "https://music.163.com/song/media/outer/url?id=31260032.mp3",
      cover: "https://p1.music.126.net/zYBLzdpw5RWBABJgDzDWsw==/2880720467350989.jpg"
    },
    {
      name: "Weak",
      artist: "AJR",
      url: "https://music.163.com/song/media/outer/url?id=431080915.mp3",
      cover: "https://p2.music.126.net/pQmd9_WgAkUGqldX90_PiA==/3252355413650210.jpg"
    },
    {
      name: "No Grass Today",
      artist: "AJR",
      url: "https://music.163.com/song/media/outer/url?id=431096716.mp3",
      cover: "https://p2.music.126.net/pQmd9_WgAkUGqldX90_PiA==/3252355413650210.jpg"
    },
    {
      name: "Creep",
      artist: "Damien Rice",
      url: "https://music.163.com/song/media/outer/url?id=26636121.mp3",
      cover: "https://p2.music.126.net/m6nZ4azXpoFTVXzb0S9kJg==/5662484883120659.jpg"
    },
    {
      name: "Escape With You",
      artist: "Kooma / Veela",
      url: "https://music.163.com/song/media/outer/url?id=1437188531.mp3",
      cover: "https://p2.music.126.net/BjZHB-vFdoEpYfj2M6Jqiw==/109951169286886781.jpg"
    },
    {
      name: "Cloud",
      artist: "阳花",
      url: "https://music.163.com/song/media/outer/url?id=1356059919.mp3",
      cover: "https://p2.music.126.net/mhcZsD4yukSWOC-qga6C9w==/109951163969380003.jpg"
    },
    {
      name: "灯火里的中国 (舒楠监制 官方正式版)",
      artist: "张也 / 周深",
      url: "https://music.163.com/song/media/outer/url?id=1837528900.mp3",
      cover: "https://p2.music.126.net/ipdS5rjrIbhCnaDKa926dg==/109951165909782430.jpg"
    },
    {
      name: "MOM",
      artist: "蜡笔小心（灵柯）",
      url: "https://music.163.com/song/media/outer/url?id=1387581250.mp3",
      cover: "https://p2.music.126.net/ZOkr1NI-WGGRuc5-G_7-CA==/109951164332837488.jpg"
    },
    {
      name: "Outta Mind",
      artist: "Angelika Vee / Dave202",
      url: "https://music.163.com/song/media/outer/url?id=1321722298.mp3",
      cover: "https://p2.music.126.net/a0GMLChdpadh8RaFhw90-A==/109951163636527504.jpg"
    },
    {
      name: "DADDY! DADDY! DO!",
      artist: "鈴木雅之 / 鈴木愛理",
      url: "https://music.163.com/song/media/outer/url?id=1440648326.mp3",
      cover: "https://p2.music.126.net/kYuoECNozMKxLFTW6t_TIw==/109951164900081558.jpg"
    },
    {
      name: "High Free Spirits",
      artist: "TrySail",
      url: "https://music.163.com/song/media/outer/url?id=412327884.mp3",
      cover: "https://p2.music.126.net/UfV_hWTSVuWRPHhPOji0Ug==/1411772938601252.jpg"
    },
    {
      name: "君色シグナル",
      artist: "春奈るな",
      url: "https://music.163.com/song/media/outer/url?id=30284485.mp3",
      cover: "https://p1.music.126.net/2uXm2QHuEMkz2gqZp-1eGA==/109951167953921228.jpg"
    },
    {
      name: "dB doll",
      artist: "YUE.STEVEN / uen",
      url: "https://music.163.com/song/media/outer/url?id=1351240456.mp3",
      cover: "https://p1.music.126.net/OkrDEIy0CXvh98yPaa8e8Q==/109951163918739516.jpg"
    },
    {
      name: "サーチライトと月灯り",
      artist: "水瀬いのり",
      url: "https://music.163.com/song/media/outer/url?id=1308782735.mp3",
      cover: "https://p1.music.126.net/Xz7-oPdVQqPOmyfmdwWLvQ==/109951163548125535.jpg"
    },
    {
      name: "Forever Right Now",
      artist: "Conor Matthews",
      url: "https://music.163.com/song/media/outer/url?id=1320649049.mp3",
      cover: "https://p1.music.126.net/99exBgyfhqLGFmdSunv9wQ==/109951170517781273.jpg"
    },
    {
      name: "Love Letter",
      artist: "RUQOA / 동백",
      url: "https://music.163.com/song/media/outer/url?id=1419401258.mp3",
      cover: "https://p1.music.126.net/61C8DoeCdgMr4xFmn0vJaQ==/109951164659414884.jpg"
    },
    {
      name: "Akubi",
      artist: "beignet",
      url: "https://music.163.com/song/media/outer/url?id=557581057.mp3",
      cover: "https://p1.music.126.net/wPv9BgRSCGTcS9hG9kfpcQ==/109951167354313328.jpg"
    },
    {
      name: "Be Alright",
      artist: "MADILYN",
      url: "https://music.163.com/song/media/outer/url?id=1351603766.mp3",
      cover: "https://p1.music.126.net/JaJ42g266KcAGyu1nCpAJw==/109951163922973254.jpg"
    },
    {
      name: "青空のラプソディ",
      artist: "fhána",
      url: "https://music.163.com/song/media/outer/url?id=452804780.mp3",
      cover: "https://p1.music.126.net/fnjzh_hLe1fujixg2E6Z7Q==/18664209883123351.jpg"
    },
    {
      name: "コレカラ (TV-size)",
      artist: "Machico",
      url: "https://music.163.com/song/media/outer/url?id=548145607.mp3",
      cover: "https://p1.music.126.net/RbtXt-LD-tP2_CjJnYw1Ig==/109951163211643899.jpg"
    },
    {
      name: "Daydream café ~ご注文はリゼですか?ver.~",
      artist: "種田梨沙",
      url: "https://music.163.com/song/media/outer/url?id=29457200.mp3",
      cover: "https://p1.music.126.net/9yxqsjVydbWzcb0YHNEcBg==/2538772348929728.jpg"
    },
    {
      name: "ラブ・ドラマティック",
      artist: "鈴木雅之 / 伊原六花",
      url: "https://music.163.com/song/media/outer/url?id=1346310082.mp3",
      cover: "https://p1.music.126.net/r1YeVZ8BIWC20C7D9WoMIA==/109951163865870070.jpg"
    },
    {
      name: "书记书记♡チカっとチカ千花っ♡（翻自 小原好美）",
      artist: "オオオオオオオレンジ",
      url: "https://music.163.com/song/media/outer/url?id=1345006849.mp3",
      cover: "https://p1.music.126.net/z_-1G1sUY2183sPTGab-EA==/109951163849877641.jpg"
    },
    {
      name: "深淵のマーメイド",
      artist: "Aiobahn / YUC’e",
      url: "https://music.163.com/song/media/outer/url?id=459733605.mp3",
      cover: "https://p1.music.126.net/6j6QMon5CYJnzNF79yRuqA==/109951170982666045.jpg"
    },
    {
      name: "In The End",
      artist: "Coke",
      url: "https://music.163.com/song/media/outer/url?id=1831414334.mp3",
      cover: "https://p1.music.126.net/2mmI1SQUsAGC-DeGLVjh-Q==/109951165852007460.jpg"
    },
    {
      name: "Bloodstream",
      artist: "The Chainsmokers / Phoebe Ryan",
      url: "https://music.163.com/song/media/outer/url?id=470547650.mp3",
      cover: "https://p2.music.126.net/SuCNw1Twu5gs_UT66_eQdA==/109951165981300158.jpg"
    },
    {
      name: "I'm a Freak",
      artist: "Enrique Iglesias / Pitbull",
      url: "https://music.163.com/song/media/outer/url?id=28287422.mp3",
      cover: "https://p2.music.126.net/lVu0tvTMrSQawQNGzrnycA==/109951163115397364.jpg"
    },
    {
      name: "Blind faith",
      artist: "LinG",
      url: "https://music.163.com/song/media/outer/url?id=1426572175.mp3",
      cover: "https://p2.music.126.net/zRR00_u7IY2h52YxiTXdKA==/109951164748120892.jpg"
    },
    {
      name: "Reverie",
      artist: "ILLENIUM / Dana Salah",
      url: "https://music.163.com/song/media/outer/url?id=403710535.mp3",
      cover: "https://p2.music.126.net/OWZWqMa7FH7FJYkcuTOfXg==/109951168786165632.jpg"
    },
    {
      name: "Syrup",
      artist: "Reol / monaca:factory",
      url: "https://music.163.com/song/media/outer/url?id=33516496.mp3",
      cover: "https://p2.music.126.net/ydouSswaFC9GPnx_9SPBow==/109951163739180220.jpg"
    },
    {
      name: "Bloom",
      artist: "Dabin / Dia Frampton",
      url: "https://music.163.com/song/media/outer/url?id=1347227968.mp3",
      cover: "https://p2.music.126.net/9ABIVDpwv0O8YpnsSBi2qA==/109951168785996138.jpg"
    },
    {
      name: "Sneaker - スニーカー",
      artist: "HoneyComeBear",
      url: "https://music.163.com/song/media/outer/url?id=509728521.mp3",
      cover: "https://p2.music.126.net/oeQlpUM5dCj2XGboKDuz8Q==/109951163558970102.jpg"
    },
    {
      name: "バンブーディスコ",
      artist: "Yunomi / TORIENA",
      url: "https://music.163.com/song/media/outer/url?id=461301515.mp3",
      cover: "https://p2.music.126.net/z6gzEi3HMsEVNarcM61sNQ==/109951171004144518.jpg"
    },
    {
      name: "クリスタル",
      artist: "Stereoman / アンテナガール / Yunomi",
      url: "https://music.163.com/song/media/outer/url?id=471969366.mp3",
      cover: "https://p2.music.126.net/769XLsCAUg9-H4AoEOT-zg==/109951165133593893.jpg"
    },
    {
      name: "Radio Happy (Stereoman Bootleg)",
      artist: "Stereoman",
      url: "https://music.163.com/song/media/outer/url?id=446508335.mp3",
      cover: "https://p2.music.126.net/bF8X6SU7uSdKfGMiAD9Hgw==/18789554208665768.jpg"
    },
    {
      name: "海底（四国语言版）",
      artist: "是小光芒呀 / Jii / 九宝Zerone / Elin610 / Monna",
      url: "https://music.163.com/song/media/outer/url?id=1856735333.mp3",
      cover: "https://p2.music.126.net/-eoHSFTgjpRW9eMNDGVVIw==/109951166138810564.jpg"
    },
    {
      name: "拂衣归",
      artist: "周深",
      url: "https://music.163.com/song/media/outer/url?id=1448533371.mp3",
      cover: "https://p1.music.126.net/oD4mReuwzXWHEXHqW7kITw==/109951164991132250.jpg"
    },
    {
      name: "卷珠帘",
      artist: "周深",
      url: "https://music.163.com/song/media/outer/url?id=29759370.mp3",
      cover: "https://p1.music.126.net/5HdKk22BMvdSa4nKbcJeFA==/6632254139913884.jpg"
    },
    {
      name: "吹灭小山河",
      artist: "国风堂 / 司南",
      url: "https://music.163.com/song/media/outer/url?id=1412559986.mp3",
      cover: "https://p1.music.126.net/taWBQliW8wLh_pqXElAeww==/109951164923015271.jpg"
    },
    {
      name: "阿房宫赋（demo版）",
      artist: "奇然 / 沈谧仁",
      url: "https://music.163.com/song/media/outer/url?id=1345613056.mp3",
      cover: "https://p1.music.126.net/NAK-EozNVFbBFXc5NwIF1g==/109951170919223920.jpg"
    },
    {
      name: "Mirrors",
      artist: "MitiS",
      url: "https://music.163.com/song/media/outer/url?id=1396157324.mp3",
      cover: "https://p1.music.126.net/pWCvilB8E7tnyuj19jbSGw==/109951170691035469.jpg"
    },
    {
      name: "EXEC_CHRONICLE_KEY/.",
      artist: "志方あきこ",
      url: "https://music.163.com/song/media/outer/url?id=26377617.mp3",
      cover: "https://p1.music.126.net/GJblcjt12l5acRfFP3SiqQ==/2354054395122733.jpg"
    },
    {
      name: "EXEC_COSMOFLIPS",
      artist: "KOKIA",
      url: "https://music.163.com/song/media/outer/url?id=4940455.mp3",
      cover: "https://p1.music.126.net/2NUk6qXti98G5EMWIh2nrw==/109951169487822661.jpg"
    },
    {
      name: "yal fii-ne noh-iar;",
      artist: "ORIGA",
      url: "https://music.163.com/song/media/outer/url?id=28461979.mp3",
      cover: "https://p2.music.126.net/FbxhAAsbyg8U9Ar1EmxggQ==/3313928048559328.jpg"
    },
    {
      name: "Echo",
      artist: "Reol",
      url: "https://music.163.com/song/media/outer/url?id=28941714.mp3",
      cover: "https://p2.music.126.net/dN9lZf-QEMFuMXwiTjo3iQ==/109951172174395554.jpg"
    },
    {
      name: "SPÏKA",
      artist: "Rigël Theatre",
      url: "https://music.163.com/song/media/outer/url?id=36102364.mp3",
      cover: "https://p2.music.126.net/TE36HIHL9C-4-0o4JKOLfQ==/3405187512717671.jpg"
    },
    {
      name: "EXEC_FLIP_FUSIONSPHERE/.",
      artist: "V.A.",
      url: "https://music.163.com/song/media/outer/url?id=26377619.mp3",
      cover: "https://p2.music.126.net/GJblcjt12l5acRfFP3SiqQ==/2354054395122733.jpg"
    },
    {
      name: "Valhalla",
      artist: "TetraCalyx",
      url: "https://music.163.com/song/media/outer/url?id=1372730376.mp3",
      cover: "https://p2.music.126.net/et8nT4Bd60ZxhJHnd8sYew==/109951164157989491.jpg"
    },
    {
      name: "Midnight Sun",
      artist: "Mike Perry / Forgét Mej",
      url: "https://music.163.com/song/media/outer/url?id=1450044624.mp3",
      cover: "https://p2.music.126.net/SRsmlCLHCe0biajLEioHTg==/109951165466760873.jpg"
    },
    {
      name: "Let You Go",
      artist: "ILLENIUM / Ember Island",
      url: "https://music.163.com/song/media/outer/url?id=507585216.mp3",
      cover: "https://p2.music.126.net/_khDFSlIIC2AiAq-jIrG4Q==/109951168786031313.jpg"
    },
    {
      name: "Sound of Walking Away",
      artist: "ILLENIUM / Kerli",
      url: "https://music.163.com/song/media/outer/url?id=507585218.mp3",
      cover: "https://p2.music.126.net/_khDFSlIIC2AiAq-jIrG4Q==/109951168786031313.jpg"
    },
    {
      name: "Skeleton (feat. Nevve)",
      artist: "Tails / inverness / Nevve",
      url: "https://music.163.com/song/media/outer/url?id=1318511471.mp3",
      cover: "https://p2.music.126.net/YK-PfzMPAkP1WVG45ts0cg==/109951163634886276.jpg"
    },
    {
      name: "Strangers",
      artist: "Far Out",
      url: "https://music.163.com/song/media/outer/url?id=1356064083.mp3",
      cover: "https://p2.music.126.net/WP6LkIIL9OtUot-Z7cs1gg==/109951168278740259.jpg"
    },
    {
      name: "Take Me Home Country Roads",
      artist: "John Denver",
      url: "https://music.163.com/song/media/outer/url?id=1477670.mp3",
      cover: "https://p2.music.126.net/AE0wCDxusSZj3MAGn0upZw==/870813209249684.jpg"
    },
    {
      name: "The Storm",
      artist: "TheFatRat / Maisy Kay",
      url: "https://music.163.com/song/media/outer/url?id=1417907835.mp3",
      cover: "https://p2.music.126.net/6oqgGH98mWmKjZ2hGjS7YQ==/109951169683089933.jpg"
    },
    {
      name: "10,000 Feet",
      artist: "INViDA / Robbie Rosen",
      url: "https://music.163.com/song/media/outer/url?id=1446201045.mp3",
      cover: "https://p2.music.126.net/CT82XryN9nd_FL0kXl29cQ==/109951166275471816.jpg"
    },
    {
      name: "You & Me",
      artist: "MrWhite",
      url: "https://music.163.com/song/media/outer/url?id=1421548502.mp3",
      cover: "https://p2.music.126.net/kpGXL_CtNoRjzHDTaQZNrw==/109951164684537350.jpg"
    },
    {
      name: "Back To U",
      artist: "SLANDER / William Black",
      url: "https://music.163.com/song/media/outer/url?id=1442681212.mp3",
      cover: "https://p2.music.126.net/DNpdYbVOZIjcpw4R6T3X8Q==/109951164930599427.jpg"
    },
    {
      name: "Pretty Girl (Cheat Codes X CADE Remix)",
      artist: "Maggie Lindemann",
      url: "https://music.163.com/song/media/outer/url?id=1351719886.mp3",
      cover: "https://p2.music.126.net/9VUcFuM_m3qDHw1s1QGomw==/109951163924268458.jpg"
    },
    {
      name: "Serenity",
      artist: "Neovaii",
      url: "https://music.163.com/song/media/outer/url?id=1312779753.mp3",
      cover: "https://p2.music.126.net/w2HDy8nOvE3F95zb1LZHxQ==/109951172208822139.jpg"
    },
    {
      name: "清、风 (VIP Mix)",
      artist: "Soda Mint / Junple",
      url: "https://music.163.com/song/media/outer/url?id=470584809.mp3",
      cover: "https://p2.music.126.net/yT94CaS_s8-1ZELgqV_jvA==/109951162978600849.jpg"
    },
    {
      name: "花灯",
      artist: "觅青森",
      url: "https://music.163.com/song/media/outer/url?id=1384407086.mp3",
      cover: "https://p2.music.126.net/-o3aeX2mjcIHd0b1B8UYXA==/109951164296105695.jpg"
    },
    {
      name: "Love Again (Nightcore)",
      artist: "Killabite Media / Syrex",
      url: "https://music.163.com/song/media/outer/url?id=1438908624.mp3",
      cover: "https://p2.music.126.net/j6ZuJFUy7ZdaLKhdYeDGug==/109951164884409891.jpg"
    },
    {
      name: "Why Do I Try (Nightcore) (feat. Danni Carra & Gill Chang)",
      artist: "Syrex / Danni Carra / Gill Chang",
      url: "https://music.163.com/song/media/outer/url?id=1442365701.mp3",
      cover: "https://p2.music.126.net/bvB7UbKXjgncqKmOQGbTtw==/109951171283502582.jpg"
    },
    {
      name: "Free Fall",
      artist: "ILLENIUM / RUNN",
      url: "https://music.163.com/song/media/outer/url?id=507585217.mp3",
      cover: "https://p2.music.126.net/_khDFSlIIC2AiAq-jIrG4Q==/109951168786031313.jpg"
    },
    {
      name: "Superficial Love",
      artist: "Karim Mika / Gabs",
      url: "https://music.163.com/song/media/outer/url?id=1316563030.mp3",
      cover: "https://p2.music.126.net/o1wrc3nQuQ5Fd6W3j5MkfA==/109951166275536046.jpg"
    },
    {
      name: "Hall of Fame",
      artist: "The Script / will.i.am",
      url: "https://music.163.com/song/media/outer/url?id=31593014.mp3",
      cover: "https://p1.music.126.net/pG1C1uTNY_iy_mIYhcYw0Q==/2918103860986405.jpg"
    },
    {
      name: "Pump It [2005]",
      artist: "Black Eyed Peas",
      url: "https://music.163.com/song/media/outer/url?id=26589514.mp3",
      cover: "https://p1.music.126.net/6q-ivTs0C-arAAfWpESlmw==/6661940953409818.jpg"
    },
    {
      name: "You",
      artist: "Benny Blanco / Marshmello / Vance Joy",
      url: "https://music.163.com/song/media/outer/url?id=1815878659.mp3",
      cover: "https://p1.music.126.net/_dXi49FOn-XDAI48a6p9KQ==/109951165673961465.jpg"
    },
    {
      name: "Arabian Nights",
      artist: "RudeLies / Facading",
      url: "https://music.163.com/song/media/outer/url?id=1399945822.mp3",
      cover: "https://p1.music.126.net/tscZ9zMQP2LjHY4u_6xhHg==/109951164457120078.jpg"
    },
    {
      name: "Labels",
      artist: "Neovaii",
      url: "https://music.163.com/song/media/outer/url?id=1312780510.mp3",
      cover: "https://p1.music.126.net/w2HDy8nOvE3F95zb1LZHxQ==/109951172208822139.jpg"
    },
    {
      name: "Stitches",
      artist: "Shawn Mendes",
      url: "https://music.163.com/song/media/outer/url?id=31090820.mp3",
      cover: "https://p1.music.126.net/ZjBl3qjf2FV1sZAi-MT4WA==/109951168434753081.jpg"
    },
    {
      name: "Beauty",
      artist: "Layto",
      url: "https://music.163.com/song/media/outer/url?id=1419369467.mp3",
      cover: "https://p1.music.126.net/Rnl2tgOXN9Fc1dzqnpLwMA==/109951169592303707.jpg"
    },
    {
      name: "Unity",
      artist: "TheFatRat",
      url: "https://music.163.com/song/media/outer/url?id=569725354.mp3",
      cover: "https://p1.music.126.net/hZC31QTFu7K7vTsuXdqQEQ==/109951163322971462.jpg"
    },
    {
      name: "All I See (Kicks N Licks Remix)",
      artist: "Kicks N Licks / Laura Brehm / Draper",
      url: "https://music.163.com/song/media/outer/url?id=421160521.mp3",
      cover: "https://p1.music.126.net/j_on9U1ky-aYWY6seqcGEA==/109951171294912190.jpg"
    },
    {
      name: "Messy Girl",
      artist: "Morri3on(喬凡三)",
      url: "https://music.163.com/song/media/outer/url?id=500637550.mp3",
      cover: "https://p1.music.126.net/Zn86-tlSNzRDSe9HWBxdEA==/109951163008320446.jpg"
    },
    {
      name: "Into You",
      artist: "Matisse & Sadko / Hanne Mjøen",
      url: "https://music.163.com/song/media/outer/url?id=523042017.mp3",
      cover: "https://p1.music.126.net/uiJ95JX05t47fwmOWo0kog==/109951164361917909.jpg"
    },
    {
      name: "Smoke and Fire",
      artist: "Cuebrick / Karra",
      url: "https://music.163.com/song/media/outer/url?id=473571249.mp3",
      cover: "https://p1.music.126.net/eJpokQyWdZJjZj0_o3p9uQ==/18633423557793032.jpg"
    },
    {
      name: "Dealer",
      artist: "Romeo Blanco",
      url: "https://music.163.com/song/media/outer/url?id=1371327139.mp3",
      cover: "https://p1.music.126.net/Iq4z2VAcdVo5zhSQ_OHsbA==/109951166073927987.jpg"
    },
    {
      name: "Better With You",
      artist: "3LAU / Justin Caruso / Iselin",
      url: "https://music.163.com/song/media/outer/url?id=1348939361.mp3",
      cover: "https://p1.music.126.net/i8iWn9pXcx9ezQn7Zv06CA==/109951169789128094.jpg"
    },
    {
      name: "Lost",
      artist: "Gareth Emery / Janet Devlin",
      url: "https://music.163.com/song/media/outer/url?id=414826647.mp3",
      cover: "https://p1.music.126.net/cudn8McbtgxcjqygBOjImQ==/109951163128826398.jpg"
    },
    {
      name: "Rule the World",
      artist: "TheFatRat / AleXa",
      url: "https://music.163.com/song/media/outer/url?id=1468927741.mp3",
      cover: "https://p1.music.126.net/Dj8wgo2F7qyjJaS8zRAgfw==/109951169136534536.jpg"
    },
    {
      name: "Time To Die, Bye",
      artist: "Spaceport Records / SUZ / 张塔拉Tara",
      url: "https://music.163.com/song/media/outer/url?id=1811365126.mp3",
      cover: "https://p1.music.126.net/APMGBx41XiljWDSZ1tRMqQ==/109951165623223866.jpg"
    },
    {
      name: "Imagine",
      artist: "Sizzle Bird",
      url: "https://music.163.com/song/media/outer/url?id=412902975.mp3",
      cover: "https://p1.music.126.net/kzgEXKLDZIJgBdO0qFhKoQ==/1404076356908377.jpg"
    },
    {
      name: "Rise Up",
      artist: "Egzod / M.I.M.E / Veronica Bravo",
      url: "https://music.163.com/song/media/outer/url?id=1357953225.mp3",
      cover: "https://p1.music.126.net/7gqP-qPhjsQ2gTtVvX5XEQ==/109951163990073314.jpg"
    },
    {
      name: "Dreams pt. II",
      artist: "Lost Sky / Sara Skinner",
      url: "https://music.163.com/song/media/outer/url?id=1330206725.mp3",
      cover: "https://p1.music.126.net/zYvTjgc_0gUhWQWNBIq6nQ==/109951163698773216.jpg"
    },
    {
      name: "Blue Sky",
      artist: "Fredji",
      url: "https://music.163.com/song/media/outer/url?id=451113120.mp3",
      cover: "https://p1.music.126.net/xLIAcbGE6k4Rvug-aHbT8w==/109951168072322660.jpg"
    },
    {
      name: "A War Song",
      artist: "L3V3LS / Outertone",
      url: "https://music.163.com/song/media/outer/url?id=458496939.mp3",
      cover: "https://p1.music.126.net/HtKkN0FbGlY1ePL6wRieyQ==/109951167536103266.jpg"
    },
    {
      name: "All You Need To Know (Far Out Remix)",
      artist: "Far Out / Gryffin / SLANDER",
      url: "https://music.163.com/song/media/outer/url?id=1457285168.mp3",
      cover: "https://p1.music.126.net/bDvnYG7HBG9ZeUR4zwHTUQ==/109951165081211656.jpg"
    },
    {
      name: "Collide",
      artist: "Skylike",
      url: "https://music.163.com/song/media/outer/url?id=573582378.mp3",
      cover: "https://p1.music.126.net/929Jjnq-nkCQ7SM2g1DOgw==/109951168165402381.jpg"
    },
    {
      name: "Our Own (feat. Micah Martin)",
      artist: "Far Out / Micah Martin",
      url: "https://music.163.com/song/media/outer/url?id=1422438794.mp3",
      cover: "https://p1.music.126.net/um8ZNbx4qZdHdrciMwzgvg==/109951168278753269.jpg"
    },
    {
      name: "声声慢 (京韵版)",
      artist: "张一山 / 孙萍",
      url: "https://music.163.com/song/media/outer/url?id=1485850351.mp3",
      cover: "https://p2.music.126.net/0X0cvRif6qa0AE-yBibf7g==/109951165379412073.jpg"
    },
    {
      name: "Revenger",
      artist: "F.O.O.L",
      url: "https://music.163.com/song/media/outer/url?id=1428126645.mp3",
      cover: "https://p2.music.126.net/J1V-DrTd7V51-hyulfRt9Q==/109951164797253343.jpg"
    },
    {
      name: "Overdrive",
      artist: "Far Out",
      url: "https://music.163.com/song/media/outer/url?id=1422446371.mp3",
      cover: "https://p2.music.126.net/um8ZNbx4qZdHdrciMwzgvg==/109951168278753269.jpg"
    },
    {
      name: "Capricieux Fille",
      artist: "Ange;art",
      url: "https://music.163.com/song/media/outer/url?id=477215044.mp3",
      cover: "https://p2.music.126.net/o6lXUCNr27wXAkAbQFp9Xg==/18581746511332457.jpg"
    },
    {
      name: "Unknown Future",
      artist: "花澤香菜",
      url: "https://music.163.com/song/media/outer/url?id=1492283212.mp3",
      cover: "https://p2.music.126.net/0Yus7yGK8elVx0gj7N-NZQ==/109951165434283247.jpg"
    },
    {
      name: "姜子牙",
      artist: "张杰",
      url: "https://music.163.com/song/media/outer/url?id=1415813508.mp3",
      cover: "https://p2.music.126.net/zHMhstjsH3shK7NFYdXNaw==/109951165347998409.jpg"
    },
    {
      name: "山河无恙在我胸",
      artist: "蔡徐坤 / 佟丽娅",
      url: "https://music.163.com/song/media/outer/url?id=1433569777.mp3",
      cover: "https://p2.music.126.net/fWVEGUfQSQGlQloTTsM8Qw==/109951164834732865.jpg"
    },
    {
      name: "チカっとチカ千花っ",
      artist: "小原好美",
      url: "https://music.163.com/song/media/outer/url?id=1361188105.mp3",
      cover: "https://p2.music.126.net/wNRGrxRx6zexZMixa5iEcA==/109951167399875445.jpg"
    },
    {
      name: "Wildflower",
      artist: "AIKA / juu",
      url: "https://music.163.com/song/media/outer/url?id=1388357984.mp3",
      cover: "https://p2.music.126.net/rfD1YfZPS8qwBsT95CkSLg==/109951164341624028.jpg"
    },
    {
      name: "あめふり",
      artist: "豊崎愛生 / 米澤円",
      url: "https://music.163.com/song/media/outer/url?id=26202043.mp3",
      cover: "https://p2.music.126.net/B_sCLXthAHgoVEMIRNU1hw==/109951163559682176.jpg"
    },
    {
      name: "Standing Still",
      artist: "Joakim Molitor / Victoria Voss",
      url: "https://music.163.com/song/media/outer/url?id=1440850870.mp3",
      cover: "https://p2.music.126.net/X4cNyObF2E746up5Bzh4EQ==/109951164908660231.jpg"
    },
    {
      name: "For You",
      artist: "Chill Satellite",
      url: "https://music.163.com/song/media/outer/url?id=1409288398.mp3",
      cover: "https://p2.music.126.net/aPESftxy385L--iyRM7KvQ==/109951171447911423.jpg"
    },
    {
      name: "Shine a Little",
      artist: "Craig Reever / Mia Pfirrman",
      url: "https://music.163.com/song/media/outer/url?id=1397152854.mp3",
      cover: "https://p2.music.126.net/6l2BCvid3ra--K1OeqI7IQ==/109951164429396398.jpg"
    },
    {
      name: "Happy End",
      artist: "百石元",
      url: "https://music.163.com/song/media/outer/url?id=26202108.mp3",
      cover: "https://p2.music.126.net/B_sCLXthAHgoVEMIRNU1hw==/109951163559682176.jpg"
    },
    {
      name: "Worlds Apart",
      artist: "Far Out",
      url: "https://music.163.com/song/media/outer/url?id=1341819224.mp3",
      cover: "https://p2.music.126.net/n3Aw5S_J9rcdzpIUiPdJDg==/109951168278745578.jpg"
    },
    {
      name: "I'll Be Gone (feat. Katie McConnell)",
      artist: "Axero / Katie McConnell",
      url: "https://music.163.com/song/media/outer/url?id=1398909708.mp3",
      cover: "https://p2.music.126.net/eMmDPNPca7GbMY20ZmovFA==/109951164445994451.jpg"
    },
    {
      name: "心跳23事",
      artist: "小野道ono / 2233娘",
      url: "https://music.163.com/song/media/outer/url?id=1299295064.mp3",
      cover: "https://p2.music.126.net/J-9I280RJzE31ggxyR_y7w==/109951163443273466.jpg"
    },
    {
      name: "【bilibili音乐】一话一世界 《一花依世界》方言合唱版",
      artist: "雪霏岚岚 / 早木旋子 / 张小她 / 倒悬的橘子 / 双笙（陈元汐） / 宁采臣丶在唱歌 / A路人 / 漆柚 / YUKIri / warma / LKs / 洛天依Official / 乐正绫 / LS",
      url: "https://music.163.com/song/media/outer/url?id=1302601503.mp3",
      cover: "https://p1.music.126.net/KuEjitsnKt05FxnoKD0xcw==/109951163466304647.jpg"
    },
    {
      name: "夢でまたあえたらなあ (feat. nicamoq)",
      artist: "Yunomi / nicamoq",
      url: "https://music.163.com/song/media/outer/url?id=436355642.mp3",
      cover: "https://p1.music.126.net/NuP6TgavTaG8nIPQYmkmAQ==/109951165776921578.jpg"
    },
    {
      name: "星辰之律",
      artist: "紧那罗（CV.南条爱乃）",
      url: "https://music.163.com/song/media/outer/url?id=1464074707.mp3",
      cover: "https://p1.music.126.net/QSZ040cmDRQ2w8QhGtMM7Q==/109951165153317752.jpg"
    },
    {
      name: "Waterfall",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=1337039643.mp3",
      cover: "https://p1.music.126.net/DJ0awUhGAKMujLmWP7SK7Q==/109951165080569806.jpg"
    },
    {
      name: "Donuts",
      artist: "Jensation",
      url: "https://music.163.com/song/media/outer/url?id=444269097.mp3",
      cover: "https://p1.music.126.net/uUa0qW3uP2XeKxg1uIZG7w==/109951169026165114.jpg"
    },
    {
      name: "Across The Ocean",
      artist: "Vexento",
      url: "https://music.163.com/song/media/outer/url?id=515803144.mp3",
      cover: "https://p1.music.126.net/zpZIurW5hcdHTf5En-eoGA==/109951163052354024.jpg"
    },
    {
      name: "ハロ/ハワユ",
      artist: "ナノウ / 鹿乃",
      url: "https://music.163.com/song/media/outer/url?id=859470.mp3",
      cover: "https://p1.music.126.net/OKnpctIohBGH_w54iy6GtQ==/109951163597534918.jpg"
    },
    {
      name: "Alibi (Far Out Remix)",
      artist: "Far Out / Krewella",
      url: "https://music.163.com/song/media/outer/url?id=863515475.mp3",
      cover: "https://p1.music.126.net/QkSdwV5uW-XyHoU1h7049w==/109951166556859674.jpg"
    },
    {
      name: "Mirror",
      artist: "Porter Robinson",
      url: "https://music.163.com/song/media/outer/url?id=1473326229.mp3",
      cover: "https://p1.music.126.net/zn1RTlXlgnaBf4K63TUXig==/109951165261802348.jpg"
    },
    {
      name: "So It Goes",
      artist: "Max Oazo / Moonessa",
      url: "https://music.163.com/song/media/outer/url?id=1385566283.mp3",
      cover: "https://p2.music.126.net/2gDavUWIyxDqFleij2c-Dg==/109951164310285238.jpg"
    },
    {
      name: "A Different Way",
      artist: "Max Oazo / Cami",
      url: "https://music.163.com/song/media/outer/url?id=1358247909.mp3",
      cover: "https://p2.music.126.net/eERuNM9zbPfEzndAlgNGvA==/109951163992758640.jpg"
    },
    {
      name: "Jumbo",
      artist: "Alex Skrindo",
      url: "https://music.163.com/song/media/outer/url?id=36492192.mp3",
      cover: "https://p2.music.126.net/rrDSWTByFLR_rXvjP0Ol7w==/18623527953165045.jpg"
    },
    {
      name: "Nova",
      artist: "Ahrix",
      url: "https://music.163.com/song/media/outer/url?id=30212889.mp3",
      cover: "https://p2.music.126.net/2oyzKhbhk1ZtVQCySx909Q==/109951169036224358.jpg"
    },
    {
      name: "Bleu",
      artist: "Worakls",
      url: "https://music.163.com/song/media/outer/url?id=28275592.mp3",
      cover: "https://p2.music.126.net/8rOpQCdNYv764vqpKah-Fg==/6029721766808841.jpg"
    },
    {
      name: "Successful Person",
      artist: "Dio Deer",
      url: "https://music.163.com/song/media/outer/url?id=1335440373.mp3",
      cover: "https://p2.music.126.net/UdnbcXESkmQpgfPQYrskag==/109951163746476088.jpg"
    },
    {
      name: "Inside The Lines（Newton-/DcAlvis Remix）",
      artist: "Newton- / DcAlvis",
      url: "https://music.163.com/song/media/outer/url?id=454638104.mp3",
      cover: "https://p2.music.126.net/VlwgxVMJ13SUV4UfcJojhQ==/109951162936136937.jpg"
    },
    {
      name: "Play",
      artist: "SaMZIng",
      url: "https://music.163.com/song/media/outer/url?id=1356925947.mp3",
      cover: "https://p2.music.126.net/rUeY5l1zp9uqNReAWuKBsw==/109951163978976720.jpg"
    },
    {
      name: "The Colour Of My Dreams",
      artist: "Xwdit",
      url: "https://music.163.com/song/media/outer/url?id=469295289.mp3",
      cover: "https://p2.music.126.net/zwm3sClBrdbSERMXBAv6bg==/109951162890988451.jpg"
    },
    {
      name: "Return",
      artist: "Axel Wernberg / Ennex / Linne",
      url: "https://music.163.com/song/media/outer/url?id=404184089.mp3",
      cover: "https://p2.music.126.net/xM87trDP7rF1Fr0Zc5V9cg==/109951164445327259.jpg"
    },
    {
      name: "猪突猛進",
      artist: "百石元",
      url: "https://music.163.com/song/media/outer/url?id=31246600.mp3",
      cover: "https://p2.music.126.net/oAxndaJJvDg6_Q685tb83A==/109951165566386673.jpg"
    },
    {
      name: "Memory Of A Melody",
      artist: "SmK",
      url: "https://music.163.com/song/media/outer/url?id=410710814.mp3",
      cover: "https://p2.music.126.net/qiufeFtjcWBhy4D92Bor1A==/17898949788678258.jpg"
    },
    {
      name: "Fractures",
      artist: "ILLENIUM / Nevve",
      url: "https://music.163.com/song/media/outer/url?id=507585220.mp3",
      cover: "https://p2.music.126.net/_khDFSlIIC2AiAq-jIrG4Q==/109951168786031313.jpg"
    },
    {
      name: "Stars",
      artist: "Childsion",
      url: "https://music.163.com/song/media/outer/url?id=458333550.mp3",
      cover: "https://p2.music.126.net/cTEm__BYVBwNyPwzUg7ZfA==/109951162856342375.jpg"
    },
    {
      name: "Instant",
      artist: "浮云心丶",
      url: "https://music.163.com/song/media/outer/url?id=484907411.mp3",
      cover: "https://p2.music.126.net/R2E6pfzsmDN8bJ3KL76Zpg==/109951162988350814.jpg"
    },
    {
      name: "You",
      artist: "千坂 / N2V",
      url: "https://music.163.com/song/media/outer/url?id=506520164.mp3",
      cover: "https://p1.music.126.net/MVevKfyCw8InBCEmWX1NoQ==/109951164502635067.jpg"
    },
    {
      name: "Fantasy",
      artist: "Tobu / Itro",
      url: "https://music.163.com/song/media/outer/url?id=36924723.mp3",
      cover: "https://p1.music.126.net/8JuaVFYlZJlDkAeuwEczYw==/109951165382687682.jpg"
    },
    {
      name: "Deep Blue",
      artist: "William Black / Monika Santucci",
      url: "https://music.163.com/song/media/outer/url?id=1381084455.mp3",
      cover: "https://p1.music.126.net/ok5Y_4akrw9Q8jxLnLmz1g==/109951168278741178.jpg"
    },
    {
      name: "祝祭 feat.三浦透子",
      artist: "RADWIMPS / 三浦透子",
      url: "https://music.163.com/song/media/outer/url?id=1401025134.mp3",
      cover: "https://p1.music.126.net/0y7bLoJNwFSMloH-M7XRGw==/109951164459591376.jpg"
    },
    {
      name: "風たちの声",
      artist: "RADWIMPS",
      url: "https://music.163.com/song/media/outer/url?id=1401025126.mp3",
      cover: "https://p1.music.126.net/0y7bLoJNwFSMloH-M7XRGw==/109951164459591376.jpg"
    },
    {
      name: "ハロ/ハワユ",
      artist: "鹿乃",
      url: "https://music.163.com/song/media/outer/url?id=22705507.mp3",
      cover: "https://p1.music.126.net/PentWqKZkVD5-tKPlmulKA==/649811372038021.jpg"
    },
    {
      name: "大丈夫",
      artist: "RADWIMPS",
      url: "https://music.163.com/song/media/outer/url?id=1400243461.mp3",
      cover: "https://p1.music.126.net/0y7bLoJNwFSMloH-M7XRGw==/109951164459591376.jpg"
    },
    {
      name: "Our Story",
      artist: "Pilton / Ennex",
      url: "https://music.163.com/song/media/outer/url?id=39436798.mp3",
      cover: "https://p1.music.126.net/sWuoiREN94LulyAajXYcQQ==/2885118514507992.jpg"
    },
    {
      name: "Mine (Illenium Remix)",
      artist: "ILLENIUM / Phoebe Ryan",
      url: "https://music.163.com/song/media/outer/url?id=30780496.mp3",
      cover: "https://p1.music.126.net/94Zjhb6ibXN9jpIjRQDbUw==/7762552092459017.jpg"
    },
    {
      name: "Sunset",
      artist: "We Are One / Ennex / Linne / Axel Wernberg",
      url: "https://music.163.com/song/media/outer/url?id=36024371.mp3",
      cover: "https://p1.music.126.net/Fm0LXM1UJBeowlqWdKzR_A==/109951164418203633.jpg"
    },
    {
      name: "Voyage",
      artist: "Dripice",
      url: "https://music.163.com/song/media/outer/url?id=429482168.mp3",
      cover: "https://p1.music.126.net/5F1FASo1qZnvt04J0_nIBw==/18505880207254979.jpg"
    },
    {
      name: "Rainbow",
      artist: "B0untya / Ulchero",
      url: "https://music.163.com/song/media/outer/url?id=437292516.mp3",
      cover: "https://p1.music.126.net/OHVghbUTTIuiJaljK9MlwQ==/18718085952058619.jpg"
    },
    {
      name: "Floating With You",
      artist: "Vexento",
      url: "https://music.163.com/song/media/outer/url?id=407450734.mp3",
      cover: "https://p1.music.126.net/HnBbBxZTlNngYB5UW2SgDw==/109951164431407462.jpg"
    },
    {
      name: "Return (Aroze Violin Remix)",
      artist: "Aroze / Axel Wernberg / Linne / Ennex",
      url: "https://music.163.com/song/media/outer/url?id=409060204.mp3",
      cover: "https://p1.music.126.net/58CMO_zP655noK8Qi6WhWA==/109951173080141641.jpg"
    },
    {
      name: "Clouds",
      artist: "Metio",
      url: "https://music.163.com/song/media/outer/url?id=32823727.mp3",
      cover: "https://p1.music.126.net/FqaAAwyh3XA98ZYv2tGpJg==/109951173211122080.jpg"
    },
    {
      name: "Wonderlight",
      artist: "Steerner",
      url: "https://music.163.com/song/media/outer/url?id=514055600.mp3",
      cover: "https://p1.music.126.net/4XV54A0Yyvm37fjKTIOOGA==/109951163054824675.jpg"
    },
    {
      name: "Heaven (Radio Edit)",
      artist: "Gson & Abley / Amasi",
      url: "https://music.163.com/song/media/outer/url?id=408522823.mp3",
      cover: "https://p1.music.126.net/uZagzC6uvFoB9ZfNZQm0qg==/1374389539929351.jpg"
    },
    {
      name: "Parfait",
      artist: "EspiDev",
      url: "https://music.163.com/song/media/outer/url?id=503141959.mp3",
      cover: "https://p1.music.126.net/qU7wD8nwqAGZc3NcLQGKyQ==/109951164602306814.jpg"
    },
    {
      name: "Curly Wurly",
      artist: "Thomas Greenberg",
      url: "https://music.163.com/song/media/outer/url?id=29207835.mp3",
      cover: "https://p1.music.126.net/6B2w2gdrT6KpI8qtuE0ceQ==/109951169471915986.jpg"
    },
    {
      name: "Running Away (Instrumental)",
      artist: "Tobu / Marcus Mouya",
      url: "https://music.163.com/song/media/outer/url?id=30569019.mp3",
      cover: "https://p1.music.126.net/VUOwkYAQNx7bdJbDHu-zNg==/109951164239511852.jpg"
    },
    {
      name: "Cloud 9",
      artist: "Tobu / Itro",
      url: "https://music.163.com/song/media/outer/url?id=29797443.mp3",
      cover: "https://p1.music.126.net/DjHUw8FlwK3vq8bCSWfnig==/109951171796101891.jpg"
    },
    {
      name: "Blue",
      artist: "Steerner / Martell",
      url: "https://music.163.com/song/media/outer/url?id=33419099.mp3",
      cover: "https://p1.music.126.net/qCln8G9RvlEfSvD3DxHcSQ==/109951163046723718.jpg"
    },
    {
      name: "Dream",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=29769300.mp3",
      cover: "https://p1.music.126.net/maT85RhMqe7HUWhJEs970w==/109951164385226953.jpg"
    },
    {
      name: "Hotline",
      artist: "AIKA",
      url: "https://music.163.com/song/media/outer/url?id=550124203.mp3",
      cover: "https://p1.music.126.net/ElPiCls0Li2NkjPagFZOIQ==/109951163448621054.jpg"
    },
    {
      name: "Crystals",
      artist: "Steerner / Martell",
      url: "https://music.163.com/song/media/outer/url?id=33166668.mp3",
      cover: "https://p1.music.126.net/qCln8G9RvlEfSvD3DxHcSQ==/109951163046723718.jpg"
    },
    {
      name: "Sky",
      artist: "Trifect",
      url: "https://music.163.com/song/media/outer/url?id=425828033.mp3",
      cover: "https://p1.music.126.net/BDP5fckhJtPtQ-p0MinVfA==/109951163561535131.jpg"
    },
    {
      name: "Dawn",
      artist: "Janji",
      url: "https://music.163.com/song/media/outer/url?id=30854877.mp3",
      cover: "https://p1.music.126.net/_sW1TPOHN70wIzb3LX8NcQ==/109951167326877266.jpg"
    },
    {
      name: "Santa Monica",
      artist: "Dripice / Pilton",
      url: "https://music.163.com/song/media/outer/url?id=445450067.mp3",
      cover: "https://p1.music.126.net/b_Jye1r_nXr1CZJNCpIHeA==/109951163561330099.jpg"
    },
    {
      name: "Shine",
      artist: "Janji",
      url: "https://music.163.com/song/media/outer/url?id=404184088.mp3",
      cover: "https://p1.music.126.net/YQpJYz8RGygA_sRfLSCw4Q==/109951167326868396.jpg"
    },
    {
      name: "Complexity",
      artist: "MadEye",
      url: "https://music.163.com/song/media/outer/url?id=408532744.mp3",
      cover: "https://p1.music.126.net/0zvu5TvsmiaxYrdmInE55g==/109951164447005317.jpg"
    },
    {
      name: "Digital Kiss",
      artist: "Vexento",
      url: "https://music.163.com/song/media/outer/url?id=417859302.mp3",
      cover: "https://p1.music.126.net/vm03MsBalrhybQTl-hNGTw==/109951164443368667.jpg"
    },
    {
      name: "J'adore",
      artist: "TomLeevis",
      url: "https://music.163.com/song/media/outer/url?id=31311812.mp3",
      cover: "https://p1.music.126.net/NARe1cDVyOLXePCczfcFBg==/1388683188135696.jpg"
    },
    {
      name: "Summer Memories",
      artist: "Janji",
      url: "https://music.163.com/song/media/outer/url?id=34766841.mp3",
      cover: "https://p1.music.126.net/aB5K5XiwVPevXB_OTCxr8w==/109951167326872756.jpg"
    },
    {
      name: "True Stories",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=35314106.mp3",
      cover: "https://p2.music.126.net/4SEA3kAeCFcQCf1OVUktHA==/109951163456875568.jpg"
    },
    {
      name: "Happy Robot",
      artist: "Vexento",
      url: "https://music.163.com/song/media/outer/url?id=1440515553.mp3",
      cover: "https://p2.music.126.net/lMNhIWpz3Mgb3hnXj1Vt8A==/109951164904995064.jpg"
    },
    {
      name: "Sad Robot",
      artist: "Vexento",
      url: "https://music.163.com/song/media/outer/url?id=1418900020.mp3",
      cover: "https://p2.music.126.net/yHV_CP1gOZkx2HvLU5NSRw==/109951164653710876.jpg"
    },
    {
      name: "Cloud Nine",
      artist: "Vexento",
      url: "https://music.163.com/song/media/outer/url?id=1454282322.mp3",
      cover: "https://p2.music.126.net/D0ZaiFkQKvr5YpqDObSb2Q==/109951165051627894.jpg"
    },
    {
      name: "Cosmic Fate",
      artist: "Wisp X",
      url: "https://music.163.com/song/media/outer/url?id=532267293.mp3",
      cover: "https://p2.music.126.net/yr42mk_aNQSb2UfF6HXKrg==/109951167897951383.jpg"
    },
    {
      name: "Please Come Back",
      artist: "Zeraphym 六翼使徒",
      url: "https://music.163.com/song/media/outer/url?id=38018122.mp3",
      cover: "https://p2.music.126.net/tJTpAKlzWiJIPxPr-IW1Rg==/3294136842701414.jpg"
    },
    {
      name: "Close To The Sun",
      artist: "TheFatRat / Anjulie",
      url: "https://music.163.com/song/media/outer/url?id=1392141694.mp3",
      cover: "https://p2.music.126.net/d8Z3S8mFC3RY_EyUb1OYbQ==/109951169808180947.jpg"
    },
    {
      name: "We'll Meet Again",
      artist: "TheFatRat / Laura Brehm",
      url: "https://music.163.com/song/media/outer/url?id=1457772407.mp3",
      cover: "https://p1.music.126.net/6rScitSGxkMQg77mL9SW6A==/109951169683358912.jpg"
    },
    {
      name: "cross our hearts",
      artist: "AIKA",
      url: "https://music.163.com/song/media/outer/url?id=1316375763.mp3",
      cover: "https://p1.music.126.net/PHA0lQaMhHPx7aKqr8sSjA==/109951163597680427.jpg"
    },
    {
      name: "Daydream",
      artist: "AxR",
      url: "https://music.163.com/song/media/outer/url?id=1378563399.mp3",
      cover: "https://p1.music.126.net/rfVv4xONm5NNAoZx53mF1Q==/109951164220856451.jpg"
    },
    {
      name: "Young, Wild & Free",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=1396524670.mp3",
      cover: "https://p1.music.126.net/fP1Ebzl9Jc9sZ5y6_9iBAw==/109951164423012779.jpg"
    },
    {
      name: "Natural",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=31245329.mp3",
      cover: "https://p1.music.126.net/YY3U33hC-zGhWMwROgdRkQ==/109951164431554006.jpg"
    },
    {
      name: "Electrified",
      artist: "TheFatRat",
      url: "https://music.163.com/song/media/outer/url?id=1440531057.mp3",
      cover: "https://p1.music.126.net/FZHZkPXTQLaMJLKfGXMnAw==/109951169808178858.jpg"
    },
    {
      name: "Vibrance",
      artist: "Wisp X",
      url: "https://music.163.com/song/media/outer/url?id=30780431.mp3",
      cover: "https://p1.music.126.net/ip77crskPD36w7TB3OFYIQ==/109951167893315902.jpg"
    },
    {
      name: "Friends",
      artist: "Steerner",
      url: "https://music.163.com/song/media/outer/url?id=29737986.mp3",
      cover: "https://p1.music.126.net/X2DwdeVYAvxKsLgpzPSzBw==/109951164458890387.jpg"
    },
    {
      name: "Solstice",
      artist: "K-391",
      url: "https://music.163.com/song/media/outer/url?id=33479592.mp3",
      cover: "https://p1.music.126.net/JkfUpk4wiSIq9IbsoVWnOw==/7894493488576709.jpg"
    },
    {
      name: "Trippy Love",
      artist: "Vexento",
      url: "https://music.163.com/song/media/outer/url?id=410801523.mp3",
      cover: "https://p1.music.126.net/4rXAf9LB3dZWoKSuRpI2PA==/109951164395808723.jpg"
    },
    {
      name: "Life",
      artist: "Steerner / Gson & Abley",
      url: "https://music.163.com/song/media/outer/url?id=29737987.mp3",
      cover: "https://p1.music.126.net/blDeSAM9v9FKX54DRgqx9Q==/109951163046728142.jpg"
    },
    {
      name: "True Strength - Epic Music",
      artist: "John Dreamer",
      url: "https://music.163.com/song/media/outer/url?id=28283155.mp3",
      cover: "https://p1.music.126.net/qqLdwq9iL5J6DmBXxJOWdQ==/6024224208678156.jpg"
    },
    {
      name: "Last Reunion: Epicmusicvn Series",
      artist: "Peter Roe",
      url: "https://music.163.com/song/media/outer/url?id=32102855.mp3",
      cover: "https://p1.music.126.net/ezGG4aTTmeGI93Lii8jZow==/109951173016271471.jpg"
    },
    {
      name: "Chosen",
      artist: "TheFatRat / Laura Brehm / Anna Yvette",
      url: "https://music.163.com/song/media/outer/url?id=1350627219.mp3",
      cover: "https://p1.music.126.net/5fQaf52PVbQznDP-bKKBkA==/109951172949242582.jpg"
    },
    {
      name: "Don't Stop (TheFatRat Remix)",
      artist: "TheFatRat / Foster The People",
      url: "https://music.163.com/song/media/outer/url?id=29550185.mp3",
      cover: "https://p1.music.126.net/mh4R3roijv-bzsgeFxVoPQ==/2538772349663475.jpg"
    },
    {
      name: "Jackpot",
      artist: "TheFatRat",
      url: "https://music.163.com/song/media/outer/url?id=441612737.mp3",
      cover: "https://p1.music.126.net/6mmoxID_rOAuGal0OoQi0g==/109951172949161096.jpg"
    },
    {
      name: "Together (Original Mix)",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=30373257.mp3",
      cover: "https://p1.music.126.net/xTsswwxA3x4Ut-npVzhkVg==/7825224255018245.jpg"
    },
    {
      name: "Another Day",
      artist: "Kestutis K",
      url: "https://music.163.com/song/media/outer/url?id=33785139.mp3",
      cover: "https://p1.music.126.net/A3tBMDNwlSvqGkdWfzf2dg==/109951167446970135.jpg"
    },
    {
      name: "By Your Side",
      artist: "Axero / Fanchon",
      url: "https://music.163.com/song/media/outer/url?id=1420563507.mp3",
      cover: "https://p1.music.126.net/qMDKJm9rcypxd8o9HjbNWw==/109951166145897999.jpg"
    },
    {
      name: "Waves",
      artist: "Steerner",
      url: "https://music.163.com/song/media/outer/url?id=26521799.mp3",
      cover: "https://p1.music.126.net/x1jhqBmKfUUIGFUx3tfYsA==/109951164473100542.jpg"
    },
    {
      name: "Stronger",
      artist: "TheFatRat / Slaydit / Anjulie",
      url: "https://music.163.com/song/media/outer/url?id=1372707073.mp3",
      cover: "https://p1.music.126.net/ysTBbz7Ck3O1JhQGbDtN6A==/109951164157773028.jpg"
    },
    {
      name: "Windfall",
      artist: "TheFatRat",
      url: "https://music.163.com/song/media/outer/url?id=37653546.mp3",
      cover: "https://p1.music.126.net/6t1wnYK2YToyolyhloziGQ==/3405187514421630.jpg"
    },
    {
      name: "Starset",
      artist: "Cody Sorenson / Kadenza",
      url: "https://music.163.com/song/media/outer/url?id=455502171.mp3",
      cover: "https://p1.music.126.net/JW2qee70QWLYJDPeJve74g==/18710389371588444.jpg"
    },
    {
      name: "Fire",
      artist: "Elektronomia",
      url: "https://music.163.com/song/media/outer/url?id=496619840.mp3",
      cover: "https://p1.music.126.net/HG3y-TZuetv1ZFXllUQLzA==/109951173044055584.jpg"
    },
    {
      name: "Sakumellia",
      artist: "AIKA",
      url: "https://music.163.com/song/media/outer/url?id=1313897953.mp3",
      cover: "https://p1.music.126.net/PHA0lQaMhHPx7aKqr8sSjA==/109951163597680427.jpg"
    },
    {
      name: "Shichirigahama",
      artist: "Milkoi",
      url: "https://music.163.com/song/media/outer/url?id=1325165863.mp3",
      cover: "https://p1.music.126.net/rMFwEEkfUiqSQlLMaBQZlQ==/109951163663704496.jpg"
    },
    {
      name: "打上花火",
      artist: "Daoko / 米津玄師",
      url: "https://music.163.com/song/media/outer/url?id=496869422.mp3",
      cover: "https://p1.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg"
    },
    {
      name: "歩いても歩いても、夜空は僕を追いかけてくる (cover)",
      artist: "鎖那",
      url: "https://music.163.com/song/media/outer/url?id=41416580.mp3",
      cover: "https://p1.music.126.net/nLjDk-dEkoMFiQj4yMGeqA==/109951167977837317.jpg"
    },
    {
      name: "いつも何度でも",
      artist: "伊藤サチコ",
      url: "https://music.163.com/song/media/outer/url?id=584155.mp3",
      cover: "https://p1.music.126.net/GYWkXtrnAawOWO2nfLg3PA==/109951163028865726.jpg"
    },
    {
      name: "なんでもないや（翻自 Radwimps）",
      artist: "Akie秋绘",
      url: "https://music.163.com/song/media/outer/url?id=450795499.mp3",
      cover: "https://p2.music.126.net/EizbSb-yKpjslyUOQjdsdA==/109951162822510988.jpg"
    },
    {
      name: "恋愛サーキュレーション",
      artist: "花澤香菜",
      url: "https://music.163.com/song/media/outer/url?id=579954.mp3",
      cover: "https://p2.music.126.net/wImDxYDsJcWDIH9znDhEPA==/109951165561008752.jpg"
    },
    {
      name: "心做し",
      artist: "鹿乃",
      url: "https://music.163.com/song/media/outer/url?id=40915694.mp3",
      cover: "https://p2.music.126.net/w5-FU13Owl_VbKfybBwx3A==/2884019003563753.jpg"
    },
    {
      name: "アイロニ",
      artist: "鹿乃",
      url: "https://music.163.com/song/media/outer/url?id=22705492.mp3",
      cover: "https://p2.music.126.net/el98CuInVKeFUPsQKAovPg==/874111744105990.jpg"
    },
    {
      name: "君がいる世界へ",
      artist: "鹿乃",
      url: "https://music.163.com/song/media/outer/url?id=1304665120.mp3",
      cover: "https://p2.music.126.net/PUnG2-Ze2odWMgBwTQ2ctw==/109951165400663426.jpg"
    },
    {
      name: "DAYBREAK FRONTLINE",
      artist: "鹿乃",
      url: "https://music.163.com/song/media/outer/url?id=537854739.mp3",
      cover: "https://p2.music.126.net/iLcmytETSkZgd8xcGVEO5A==/109951163200361748.jpg"
    },
    {
      name: "No title",
      artist: "Reol / Giga",
      url: "https://music.163.com/song/media/outer/url?id=28941713.mp3",
      cover: "https://p2.music.126.net/dN9lZf-QEMFuMXwiTjo3iQ==/109951172174395554.jpg"
    },
    {
      name: "さようなら、花泥棒さん (cover)",
      artist: "鎖那",
      url: "https://music.163.com/song/media/outer/url?id=41416572.mp3",
      cover: "https://p2.music.126.net/nLjDk-dEkoMFiQj4yMGeqA==/109951167977837317.jpg"
    },
    {
      name: "パズルガール (cover)",
      artist: "鎖那",
      url: "https://music.163.com/song/media/outer/url?id=41416576.mp3",
      cover: "https://p2.music.126.net/nLjDk-dEkoMFiQj4yMGeqA==/109951167977837317.jpg"
    },
    {
      name: "銀河電燈",
      artist: "000",
      url: "https://music.163.com/song/media/outer/url?id=1348955246.mp3",
      cover: "https://p2.music.126.net/75yKKf5RFmQ0KYBvzVchJw==/109951163893812393.jpg"
    },
    {
      name: "可愛くなりたい (feat. 鎖那)",
      artist: "HoneyWorks / 鎖那",
      url: "https://music.163.com/song/media/outer/url?id=427419509.mp3",
      cover: "https://p2.music.126.net/D_KEqB9Y9ONVLRMYqKuTAA==/109951169052284566.jpg"
    },
    {
      name: "彼女は旅に出る",
      artist: "鎖那",
      url: "https://music.163.com/song/media/outer/url?id=509106775.mp3",
      cover: "https://p2.music.126.net/McwYbq8c2e9uugG51Rm-Jg==/109951166222733663.jpg"
    },
    {
      name: "ひとり旅 (feat. 鎖那)",
      artist: "瀬名航 / 鎖那",
      url: "https://music.163.com/song/media/outer/url?id=1311345944.mp3",
      cover: "https://p2.music.126.net/5U5mrKhX1OyNSN9arauPUw==/109951169313422123.jpg"
    },
    {
      name: "可爱即正义",
      artist: "BobbyER / 夜の律",
      url: "https://music.163.com/song/media/outer/url?id=1349500180.mp3",
      cover: "https://p2.music.126.net/_ysOEskrYvMRWWK6BNrPjw==/109951163896982374.jpg"
    },
    {
      name: "示岁",
      artist: "塞壬唱片-MSR / BaoUner",
      url: "https://music.163.com/song/media/outer/url?id=1417483463.mp3",
      cover: "https://p2.music.126.net/kDpWI6z8ZFC-1cP6-dR2hw==/109951164635749807.jpg"
    },
    {
      name: "麓",
      artist: "Jiaye",
      url: "https://music.163.com/song/media/outer/url?id=572610144.mp3",
      cover: "https://p2.music.126.net/U4FGUTWygY13aAyAxqs-yw==/109951163344749522.jpg"
    },
    {
      name: "Oblivion",
      artist: "TheFatRat / Lola Blanc",
      url: "https://music.163.com/song/media/outer/url?id=515540639.mp3",
      cover: "https://p2.music.126.net/fd1yRVqZ5R-jnkHf-I3pKg==/109951172949202233.jpg"
    },
    {
      name: "Phrases",
      artist: "Lindequist / Exlau",
      url: "https://music.163.com/song/media/outer/url?id=36924113.mp3",
      cover: "https://p2.music.126.net/qJuHWz5ZVoPIomlwE_p_MQ==/3272146608721728.jpg"
    },
    {
      name: "Speed of Light",
      artist: "塞壬唱片-MSR / DJ Okawari / 二宮愛",
      url: "https://music.163.com/song/media/outer/url?id=1403774122.mp3",
      cover: "https://p2.music.126.net/slodr8c8GhxdkgaHnA1jCg==/109951164497982814.jpg"
    },
    {
      name: "Freedom",
      artist: "Clarv",
      url: "https://music.163.com/song/media/outer/url?id=436355404.mp3",
      cover: "https://p2.music.126.net/2UBlu5PHkVaQwDD4_j8woA==/109951169237287517.jpg"
    },
    {
      name: "River",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=30854833.mp3",
      cover: "https://p2.music.126.net/F_VyPhnTu4vfqXCT0S9gqg==/109951163456862306.jpg"
    },
    {
      name: "Starflight",
      artist: "R3HAB / Skytech",
      url: "https://music.163.com/song/media/outer/url?id=864534194.mp3",
      cover: "https://p2.music.126.net/Ebrfrlyh0S7XmicSXvknog==/109951163392524605.jpg"
    },
    {
      name: "Hands in the Fire",
      artist: "James Carter / Nevve",
      url: "https://music.163.com/song/media/outer/url?id=1306497271.mp3",
      cover: "https://p2.music.126.net/D-Zv36jm34PkRuoB0L_VeA==/109951165402252365.jpg"
    },
    {
      name: "Move",
      artist: "Axero / Itro",
      url: "https://music.163.com/song/media/outer/url?id=30621637.mp3",
      cover: "https://p2.music.126.net/gh_7S2vfUyb7nx0sIqLlSQ==/109951163457140993.jpg"
    },
    {
      name: "Xenogenesis",
      artist: "TheFatRat",
      url: "https://music.163.com/song/media/outer/url?id=1321575661.mp3",
      cover: "https://p2.music.126.net/BlnTFWk2LGIoRVLUNcn1vw==/109951163635080334.jpg"
    },
    {
      name: "Feelings",
      artist: "Eyad Farag",
      url: "https://music.163.com/song/media/outer/url?id=1359399646.mp3",
      cover: "https://p2.music.126.net/13Wxe-59R4TgUuiyQ5WPaw==/109951164142750062.jpg"
    },
    {
      name: "恋の才能",
      artist: "nameless",
      url: "https://music.163.com/song/media/outer/url?id=38689094.mp3",
      cover: "https://p1.music.126.net/Q7o5JZusviFWxfIZxPfc5g==/109951163338335039.jpg"
    },
    {
      name: "Aurora",
      artist: "Janji / T.R.",
      url: "https://music.163.com/song/media/outer/url?id=30373260.mp3",
      cover: "https://p1.music.126.net/Kc_Sb2FQU4IGUIgvxQRtwQ==/7773547208511325.jpg"
    },
    {
      name: "Lemon（翻自 米津玄師）",
      artist: "Akie秋绘",
      url: "https://music.163.com/song/media/outer/url?id=543681750.mp3",
      cover: "https://p1.music.126.net/EEKfs6vrZFaY_owE2fgRwA==/109951163175701373.jpg"
    },
    {
      name: "Without You × A Sky Full Of Stars × Pizza (Mashup)",
      artist: "AbletiveSkye / Avicii / Coldplay / Martin Garrix",
      url: "https://music.163.com/song/media/outer/url?id=557812549.mp3",
      cover: "https://p1.music.126.net/Fnkb8udwfAEN9PhJd8xTXg==/109951163283551897.jpg"
    },
    {
      name: "Silver Scrapes",
      artist: "Chronic Crew",
      url: "https://music.163.com/song/media/outer/url?id=35470530.mp3",
      cover: "https://p1.music.126.net/O15qju2ZpvadzuZwvbfh3g==/109951163129080863.jpg"
    },
    {
      name: "Adventures",
      artist: "Alex Skrindo",
      url: "https://music.163.com/song/media/outer/url?id=33922813.mp3",
      cover: "https://p1.music.126.net/9KbYbCdn2MmDJ96MKzL2Yw==/109951163457139434.jpg"
    },
    {
      name: "Vision",
      artist: "Elektronomia",
      url: "https://music.163.com/song/media/outer/url?id=32431822.mp3",
      cover: "https://p1.music.126.net/49OsCcG2rfZV_dXENfidWQ==/109951172085902564.jpg"
    },
    {
      name: "Aspire",
      artist: "CelDro",
      url: "https://music.163.com/song/media/outer/url?id=34040720.mp3",
      cover: "https://p1.music.126.net/m2k5NmSf2yrPq4yOFF8I1Q==/7788940372308891.jpg"
    },
    {
      name: "Frontier (Cargo Remix)",
      artist: "Cargo / Vinai / SCNDL",
      url: "https://music.163.com/song/media/outer/url?id=399552364.mp3",
      cover: "https://p1.music.126.net/6Mn_p6Sm0jvigvtS6lSqfw==/2531075771288615.jpg"
    },
    {
      name: "Frisbee",
      artist: "Ahxello",
      url: "https://music.163.com/song/media/outer/url?id=418602744.mp3",
      cover: "https://p1.music.126.net/hpRkcnFmZTTdgp0EAA-uHg==/109951171294919749.jpg"
    },
    {
      name: "Morning Energy",
      artist: "Tobu",
      url: "https://music.163.com/song/media/outer/url?id=29747649.mp3",
      cover: "https://p1.music.126.net/I09z_m-S41562u5c0M3Rkg==/2540971373531604.jpg"
    },
    {
      name: "Energy Drink",
      artist: "Virtual Riot",
      url: "https://music.163.com/song/media/outer/url?id=27542857.mp3",
      cover: "https://p1.music.126.net/oCA6rIQLoQM1Lru9XIu0sQ==/5678977557527994.jpg"
    },
    {
      name: "Colors",
      artist: "Tobu",
      url: "https://music.163.com/song/media/outer/url?id=28921656.mp3",
      cover: "https://p1.music.126.net/AdX2seo2oYg24YtOtr4-JQ==/109951165365139820.jpg"
    },
    {
      name: "Cool",
      artist: "Tobu / Blume / Wholm",
      url: "https://music.163.com/song/media/outer/url?id=444267496.mp3",
      cover: "https://p1.music.126.net/fLKPzJSqnIza5hW5-Pg8Hw==/109951165378722887.jpg"
    },
    {
      name: "Nostalgia",
      artist: "Tobu",
      url: "https://music.163.com/song/media/outer/url?id=440411215.mp3",
      cover: "https://p1.music.126.net/EuZDAe7s_tjutOXSz0vMxg==/109951164239513263.jpg"
    },
    {
      name: "Hope (Original Mix)",
      artist: "Tobu",
      url: "https://music.163.com/song/media/outer/url?id=28921655.mp3",
      cover: "https://p1.music.126.net/Z022hv2ghsg6ugsQozo5Bg==/109951164239515562.jpg"
    },
    {
      name: "Tremble (Original Mix)",
      artist: "Vicetone",
      url: "https://music.163.com/song/media/outer/url?id=27553170.mp3",
      cover: "https://p1.music.126.net/MG_0axVwGBRge5PNaDVUEA==/109951163354311680.jpg"
    },
    {
      name: "Seven",
      artist: "Tobu",
      url: "https://music.163.com/song/media/outer/url?id=29379952.mp3",
      cover: "https://p1.music.126.net/dZBwkhvoAZk1bolehFLb9Q==/109951164239506381.jpg"
    },
    {
      name: "Shadows",
      artist: "Janji",
      url: "https://music.163.com/song/media/outer/url?id=31830308.mp3",
      cover: "https://p1.music.126.net/RyEEPZIAVre9SVvPHXLL0g==/109951167326883005.jpg"
    },
    {
      name: "Panama",
      artist: "Matteo",
      url: "https://music.163.com/song/media/outer/url?id=34229976.mp3",
      cover: "https://p1.music.126.net/8dEEj_V5UxD2VW3tXxIp4w==/109951163676757259.jpg"
    },
    {
      name: "Higher",
      artist: "Tobu",
      url: "https://music.163.com/song/media/outer/url?id=28830412.mp3",
      cover: "https://p1.music.126.net/03qQTno02s0z3jcIadX01A==/109951167481007353.jpg"
    },
    {
      name: "Life",
      artist: "Tobu",
      url: "https://music.163.com/song/media/outer/url?id=1408828297.mp3",
      cover: "https://p2.music.126.net/w-sN1rJCvptYvKAPgc5e6Q==/109951167009090041.jpg"
    },
    {
      name: "Axero-River（Keega Remix）",
      artist: "Keega",
      url: "https://music.163.com/song/media/outer/url?id=456855165.mp3",
      cover: "https://p2.music.126.net/FxSlrv3xN3WEWJOLQpl46A==/109951162852363072.jpg"
    },
    {
      name: "Pneumatic Tokyo",
      artist: "EnV",
      url: "https://music.163.com/song/media/outer/url?id=33937527.mp3",
      cover: "https://p2.music.126.net/hlxd90WmTJYXJJU8JoXO2A==/109951169611923358.jpg"
    },
    {
      name: "Breath and Life",
      artist: "Audiomachine",
      url: "https://music.163.com/song/media/outer/url?id=3935139.mp3",
      cover: "https://p2.music.126.net/dRBpkU9RDUtEu513XtG7Fw==/109951163818565831.jpg"
    },
    {
      name: "Trip",
      artist: "Axero",
      url: "https://music.163.com/song/media/outer/url?id=36492599.mp3",
      cover: "https://p2.music.126.net/IHBaP2FnLibUS4JxTKmAAg==/109951164415666404.jpg"
    },
    {
      name: "Reality",
      artist: "Lost Frequencies / Janieck",
      url: "https://music.163.com/song/media/outer/url?id=32835377.mp3",
      cover: "https://p2.music.126.net/QSK1HDTVJToJGD9ZLT90zA==/109951168660488322.jpg"
    },
    {
      name: "Hello",
      artist: "OMFG",
      url: "https://music.163.com/song/media/outer/url?id=33211676.mp3",
      cover: "https://p2.music.126.net/Rkvug_9Uo4dxBzcfyzqyOw==/109951172794478114.jpg"
    },
    {
      name: "Monody (Radio Edit)",
      artist: "TheFatRat / Laura Brehm",
      url: "https://music.163.com/song/media/outer/url?id=442495638.mp3",
      cover: "https://p2.music.126.net/Iz5lIcZdI3wCFsXbFMow0w==/109951172949131465.jpg"
    },
    {
      name: "Running Away[NCS Release]",
      artist: "Tobu / Marcus Mouya",
      url: "https://music.163.com/song/media/outer/url?id=29819578.mp3",
      cover: "https://p2.music.126.net/I09z_m-S41562u5c0M3Rkg==/2540971373531604.jpg"
    },
    {
      name: "Home (Blaze U Remix)",
      artist: "ThimLife / Blaze U / Bibiane Z",
      url: "https://music.163.com/song/media/outer/url?id=448317566.mp3",
      cover: "https://p2.music.126.net/9Nub3O5wm7Vs22W84BhJnQ==/18646617697109289.jpg"
    },
    {
      name: "Sun",
      artist: "Steerner / Martell",
      url: "https://music.163.com/song/media/outer/url?id=33166666.mp3",
      cover: "https://p2.music.126.net/qCln8G9RvlEfSvD3DxHcSQ==/109951163046723718.jpg"
    },
    {
      name: "Sunburst",
      artist: "Tobu / Itro",
      url: "https://music.163.com/song/media/outer/url?id=28830411.mp3",
      cover: "https://p2.music.126.net/AWDnHZIVbGI-PSo248vm8Q==/109951167481013649.jpg"
    },
    {
      name: "Sky",
      artist: "Alan Walker / Alex Skrindo",
      url: "https://music.163.com/song/media/outer/url?id=482988841.mp3",
      cover: "https://p2.music.126.net/kCtQrSaLZmQ31dPTgFlX7g==/109951166501577067.jpg"
    },
    {
      name: "Touch The Sky",
      artist: "Cedric Gervais / Dallas Austin / Digital Farm Animals",
      url: "https://music.163.com/song/media/outer/url?id=552145020.mp3",
      cover: "https://p2.music.126.net/ruDpbxMjJmIkHahv1JPhRg==/109951163242829675.jpg"
    },
    {
      name: "Lullaby",
      artist: "R3HAB / Mike Williams",
      url: "https://music.163.com/song/media/outer/url?id=529557738.mp3",
      cover: "https://p2.music.126.net/Dy67aVabKMf8TzajdW-SIQ==/109951163109495697.jpg"
    },
    {
      name: "Hymn For The Weekend（Remix）",
      artist: "Alan Walker / Coldplay",
      url: "https://music.163.com/song/media/outer/url?id=419594258.mp3",
      cover: "https://p2.music.126.net/zx0EgLRhfOo-q906272T0Q==/3427177756044412.jpg"
    },
    {
      name: "Awaken",
      artist: "Valerie Broussard / 陈锐",
      url: "https://music.163.com/song/media/outer/url?id=1341733740.mp3",
      cover: "https://p2.music.126.net/vg2UUGAS69U8szAaOk8kbA==/109951163817963892.jpg"
    },
    {
      name: "SOUL",
      artist: "张星 / 英雄联盟",
      url: "https://music.163.com/song/media/outer/url?id=1327978201.mp3",
      cover: "https://p2.music.126.net/vxhyo4ZdP907qk26RkP6XA==/109951163685027171.jpg"
    },
    {
      name: "World Championship 2019 Orchestral Theme",
      artist: "英雄联盟",
      url: "https://music.163.com/song/media/outer/url?id=1392705779.mp3",
      cover: "https://p2.music.126.net/hIRjzE3S0BcITVJDCZpmAw==/109951164382003609.jpg"
    },
    {
      name: "Legends Never Die",
      artist: "英雄联盟 / Against the Current",
      url: "https://music.163.com/song/media/outer/url?id=506196018.mp3",
      cover: "https://p2.music.126.net/XadmwVrMvDDdPr_Wve0dCw==/109951170930231334.jpg"
    },
    {
      name: "我最有福",
      artist: "中国绊爱",
      url: "https://music.163.com/song/media/outer/url?id=1415261358.mp3",
      cover: "https://p1.music.126.net/-qE980ZqgbEStUQRuGqKTw==/109951164611206852.jpg"
    },
    {
      name: "锦里",
      artist: "HOPE-T / 接个吻，开一枪",
      url: "https://music.163.com/song/media/outer/url?id=441617611.mp3",
      cover: "https://p1.music.126.net/m7pdSoU19s4txS1v_w6p-A==/109951162810952889.jpg"
    },
    {
      name: "Melody",
      artist: "Dimitri Vegas & Like Mike / Steve Aoki / Ummet Ozcan",
      url: "https://music.163.com/song/media/outer/url?id=410519492.mp3",
      cover: "https://p1.music.126.net/Zq5-_KM6LaCbLAUdWV7pBg==/109951169297639346.jpg"
    },
    {
      name: "Tremor (Original Mix)",
      artist: "Dimitri Vegas & Like Mike / Martin Garrix",
      url: "https://music.163.com/song/media/outer/url?id=28411393.mp3",
      cover: "https://p1.music.126.net/Nubu-_cOlqoubhrvaLCxzA==/109951164141422498.jpg"
    },
    {
      name: "所念皆星河",
      artist: "CMJ",
      url: "https://music.163.com/song/media/outer/url?id=1384026889.mp3",
      cover: "https://p1.music.126.net/M34HFzLO2xhDLuX_zEALKA==/109951164291347934.jpg"
    },
    {
      name: "Here With Me (feat. CHVRCHES)",
      artist: "Marshmello / CHVRCHES",
      url: "https://music.163.com/song/media/outer/url?id=1350656778.mp3",
      cover: "https://p1.music.126.net/Jsfz1xvAA0qq5zpxP1hM8Q==/109951170049914890.jpg"
    },
    {
      name: "Autumn （秋）",
      artist: "LJY",
      url: "https://music.163.com/song/media/outer/url?id=522041157.mp3",
      cover: "https://p1.music.126.net/424YvrS09TbKssyazUy8Og==/109951163074952773.jpg"
    },
    {
      name: "The Flight",
      artist: "Dimitri Vegas & Like Mike / Bassjackers / D'Angello & Francis",
      url: "https://music.163.com/song/media/outer/url?id=1384296696.mp3",
      cover: "https://p1.music.126.net/PBnIi7tSaM7KS6cEDVeC4w==/109951164368117924.jpg"
    },
    {
      name: "⩘⩗",
      artist: "HOPE-T",
      url: "https://music.163.com/song/media/outer/url?id=1359899689.mp3",
      cover: "https://p1.music.126.net/PEuJpCEFGnKBqXuqkZQmZw==/109951164010675990.jpg"
    },
    {
      name: "AE86",
      artist: "HOPE-T / Noah Stromberg",
      url: "https://music.163.com/song/media/outer/url?id=1367408546.mp3",
      cover: "https://p1.music.126.net/bYZTgcWdL6omEDQtikhn_g==/109951164096486562.jpg"
    },
    {
      name: "盗将行",
      artist: "花粥 / 马雨阳",
      url: "https://music.163.com/song/media/outer/url?id=574566207.mp3",
      cover: "https://p1.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg"
    },
    {
      name: "At The Edge",
      artist: "千坂",
      url: "https://music.163.com/song/media/outer/url?id=448596416.mp3",
      cover: "https://p2.music.126.net/j0kTkSQDEn3MksdJ3S3BSQ==/109951163825143640.jpg"
    },
    {
      name: "南锣鼓巷",
      artist: "接个吻，开一枪 / CLARE",
      url: "https://music.163.com/song/media/outer/url?id=433059656.mp3",
      cover: "https://p2.music.126.net/8GOJer_nk4AkjEWQnKZxpA==/109951171913976007.jpg"
    },
    {
      name: "Beijing",
      artist: "接个吻，开一枪 / CLARE",
      url: "https://music.163.com/song/media/outer/url?id=455382413.mp3",
      cover: "https://p2.music.126.net/-tKU2XrjLR9ILbj0tAIG0g==/109951171913968188.jpg"
    },
    {
      name: "许嵩 - 清明雨上（FRANKOWO Bootleg）（Frank_Jiang remix）",
      artist: "Frank_Jiang",
      url: "https://music.163.com/song/media/outer/url?id=460731045.mp3",
      cover: "https://p2.music.126.net/M7rrRfAEDt75WsPeBG8ygQ==/109951162862664297.jpg"
    },
    {
      name: "黔",
      artist: "Frank_Jiang / Mavjut",
      url: "https://music.163.com/song/media/outer/url?id=513015207.mp3",
      cover: "https://p2.music.126.net/kqi4JiZ_iNt2mKRjv3PcVQ==/109951163044218619.jpg"
    },
    {
      name: "TeA",
      artist: "李诚鸿瑞 / 木白",
      url: "https://music.163.com/song/media/outer/url?id=486628240.mp3",
      cover: "https://p2.music.126.net/tBMpnpwMyg7EVY69VHYiIQ==/109951162957191050.jpg"
    },
    {
      name: "烟袋斜街",
      artist: "接个吻，开一枪 / SaMZIng",
      url: "https://music.163.com/song/media/outer/url?id=464863017.mp3",
      cover: "https://p2.music.126.net/tTRaVql9l0ZwQ2Y3oSZ9pQ==/109951162874838750.jpg"
    },
    {
      name: "Oops",
      artist: "Martin Garrix",
      url: "https://music.163.com/song/media/outer/url?id=416552392.mp3",
      cover: "https://p2.music.126.net/Of_mdsdkn5yWYwwG74KhvA==/109951166519447903.jpg"
    },
    {
      name: "失眠飞行",
      artist: "接个吻，开一枪 / 沈以诚 / 薛明媛",
      url: "https://music.163.com/song/media/outer/url?id=1365898499.mp3",
      cover: "https://p2.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg"
    },
    {
      name: "#Lov3 #Ngẫu Hứng",
      artist: "Hoaprox",
      url: "https://music.163.com/song/media/outer/url?id=440353010.mp3",
      cover: "https://p1.music.126.net/znZQMUXniXqwjJrXMJO_Qg==/109951163100026676.jpg"
    },
    {
      name: "Lifeline",
      artist: "Zeraphym 六翼使徒",
      url: "https://music.163.com/song/media/outer/url?id=38019092.mp3",
      cover: "https://p1.music.126.net/rukrV8tgLCltzzT7ZJJ6Yw==/109951163861234431.jpg"
    },
    {
      name: "红色-山河版",
      artist: "ICE杨长青 / 赵辰龙(Dragon X) / 法老 / 泥鳅zinco / 何美延HAMY / G.G张思源 / Coony / Ice Paper / 于嘉萌 / AThree / Max马俊",
      url: "https://music.163.com/song/media/outer/url?id=1394155242.mp3",
      cover: "https://p1.music.126.net/2MxD5_YqxFznKDAUm2ApCA==/109951164404752764.jpg"
    },
    {
      name: "我和我的祖国 青春版",
      artist: "周冬雨 / 许魏洲 / 关晓彤 / 马天宇 / 鞠婧祎 / 魏大勋",
      url: "https://music.163.com/song/media/outer/url?id=1393224585.mp3",
      cover: "https://p1.music.126.net/s7OIRUffpw5k1d8tHwkdpg==/109951164386244236.jpg"
    },
    {
      name: "Horizon",
      artist: "Janji",
      url: "https://music.163.com/song/media/outer/url?id=30064175.mp3",
      cover: "https://p1.music.126.net/8pko-MebyO_1XlXms0rF9g==/109951163456840298.jpg"
    },
    {
      name: "The Archer",
      artist: "Taylor Swift",
      url: "https://music.163.com/song/media/outer/url?id=1379807750.mp3",
      cover: "https://p2.music.126.net/LjKgBOtlRfgaFYNOvZ_W9A==/109951164235554630.jpg"
    },
    {
      name: "Masked Heroes",
      artist: "Vexento",
      url: "https://music.163.com/song/media/outer/url?id=30854966.mp3",
      cover: "https://p2.music.126.net/PeGffrNMoghw9Z7Ibthi-A==/109951164430884023.jpg"
    },
    {
      name: "Empyrean",
      artist: "Jesper Kyd / Fired Earth Music",
      url: "https://music.163.com/song/media/outer/url?id=29164101.mp3",
      cover: "https://p1.music.126.net/fDC8n_oJgMNL6iNWKg4aqA==/109951170459947177.jpg"
    },
    {
      name: "Yesterday",
      artist: "Anastasia Kushnir",
      url: "https://music.163.com/song/media/outer/url?id=26545233.mp3",
      cover: "https://p1.music.126.net/FZX7XAjsmEPGyVOqm4H7aQ==/109951166361039007.jpg"
    },
    {
      name: "Alan Walker - Faded Alone（Albim Mashup ）",
      artist: "Alan Walker / Iselin Solheim / Noonie Bao",
      url: "https://music.163.com/song/media/outer/url?id=528285558.mp3",
      cover: "https://p1.music.126.net/7rW-3hp58bBwawoptIPH_w==/109951163101828382.jpg"
    },
    {
      name: "起风了",
      artist: "冯沁苑(买辣椒也用券)",
      url: "https://music.163.com/song/media/outer/url?id=1330348068.mp3",
      cover: "https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg"
    },
    {
      name: "Hedwig's Theme",
      artist: "Piano Tribute Players",
      url: "https://music.163.com/song/media/outer/url?id=21516773.mp3",
      cover: "https://p1.music.126.net/NThdy-raKWbPAtE_ha2eBw==/109951169242868695.jpg"
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}
