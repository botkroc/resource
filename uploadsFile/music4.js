/*by Karcyril*/


var ap = new APlayer({
  element: document.getElementById('aplayer'),         // Optional, player element
  narrow: false,         // Optional, narrow style
  autoplay: false,              // Optional, autoplay song(s), not supported by mobile browsers
  showlrc: 0,     // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
  mutex: false,                 // Optional, pause other players when this player playing
  theme: '#e6d0b2',          // Optional, theme color, default: #b7daff
  order: 'random',      // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
  preload: 'metadata',               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
  listmaxheight: '513px',      // Optional, max height of play list
  fixed: true,
  music: [{
    title: '你曾是少年',
    author: '冷鸟',
    url: 'https://m8.music.126.net/20210709153014/8f1784e9b61c2d1fe84aa1e0d978a287/ymusic/obj/w5zCgMODwrDDjD3DisKy/1965922478/2a6f/4895/f27a/1e9432581021f78973f2a5a6eff0def3.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'トルコ行進曲',
    author: '96猫',
    url: 'https://m8.music.126.net/20210709153554/5a616a61b7e50ce6fdae8947d0da4b31/ymusic/gU8i5U4bvHeocB9CjW5sCQ==/509951163136995768',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'えれくとりっく・えんじぇぅ',
    author: '初音ミク/ヤスオP',
    url: 'https://m7.music.126.net/20210709153602/4f751771cc3f090cd9fb0326662226eb/ymusic/fHlmVe3Am5exqcMAAzfk4A==/509951163213683797',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'ふわふわ♪  轻飘飘♪（翻自 牧野由依）',
    author: '樹莓蛋奶酥',
    url: 'https://m8.music.126.net/20210709153528/409ec4a9d5e6eddd1c97c7c857e528dc/ymusic/LuRqY_lztVlRi0TjuOzDqg==/509951163144369490',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'Lifestyle',
    author: 'MAGES',
    url: 'https://m7.music.126.net/20210709152843/32d4659b4003112c85ae0c386fc58edb/ymusic/6lKZI68sLmCBzLUVtrIzjw==/509951163211482936',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: '影子小姐',
    author: '洛天依',
    url: 'https://m7.music.126.net/20210709153320/bc96c060ee86bca9216657aec8cbe3c6/ymusic/AhMB4tSRvzF1K8Kkxt210g==/509951163213690128',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: 'Conqueror',
    author: 'IcA/Se7Lndra',
    url: 'https://m8.music.126.net/20210709153920/2add2b4817de8d972db8cb369b5918c0/ymusic/uqwCSm3K_MlIuqvWw8WXGQ==/509951163104397336',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: 'ロキ',
    author: 'roc',
    url: 'https://m8.music.126.net/20210709153628/21e086944527faaab1cd346750e4eee0/ymusic/4z9ITGZe_zo2P0rWE8vT8g==/509951163178207370',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: '不必记得',
    author: '爱哥',
    url: 'https://m7.music.126.net/20210709153730/a1886b037653577ae900a046de7f4ab7/ymusic/Rkp94y5X51qaQRkEDWeq9Q==/509951163213679483',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '万分之一的光',
    author: '洛天依',
    url: 'https://m7.music.126.net/20210709153139/1ba9d79c844df53d104ef9a2531316bb/ymusic/4SO7Jx0siGB10xFpjaZmPA==/509951163146659088',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '不仅仅是喜欢',
    author: '青柠',
    url: 'https://m7.music.126.net/20210709153832/a795f2c94f37060eb09fd9849600f6bf/ymusic/xfPcJ5zY_Gv8XlaYU1nxcw==/509951163096305814',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '努力婊(hardworking bitch)',
    author: 'hanser',
    url: 'https://m7.music.126.net/20210709153052/165a5462a11a55d71878a4e70d1e015f/ymusic/1zB6VPY-9P_uVKv0fZztOA==/509951162952947097',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '神的随波逐流',
    author: '冷鸟',
    url: 'https://m7.music.126.net/20210709153128/2332af0cafbb7f2f11629bf2f1cbd528/ymusic/PlOE0dwg2jnL0OjNxZ8Y8Q==/509951163213681432',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '勾指起誓',
    author: '冷鸟',
    url: 'https://m7.music.126.net/20210709153431/78bed9a294dc6f4ccace41ebd4d0c7af/ymusic/50fd/f753/f952/41a9a55bdfaffc78619b7318bcb6a9bd.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '单向地铁',
    author: '小野道ono / karin',
    url: 'https://m8.music.126.net/20210709153844/fade64183b1a0843c99f8d7e61cbc721/ymusic/ex34q5HJNHOUGnP86_acmg==/509951163177842908',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '夢の続き~DreamsOfLight',
    author: 'Night Tempo',
    url: 'https://m8.music.126.net/20210709152918/45848c276c0b99c590ea5f1031def665/ymusic/WxOaDRtaG_NAPxu4RskkYQ==/509951163032619628',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '恋爱吧魔法少女',
    author: 'hanser',
    url: 'https://m7.music.126.net/20210709152754/a2a64d1e1cdfa27a5f2fc2615bef57c8/ymusic/lKrHFojHbMMUNYVtUBB-9g==/509951163190822781',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '打上花火',
    author: 'DAOKO / 米津玄师',
    url: 'https://m8.music.126.net/20210709153653/7b046c4e71dd7328cff50364185a082b/ymusic/RU7ss16TcKiKu_XMSRh38Q==/509951163024990962',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '红昭愿',
    author: '音阙诗听',
    url: 'https://m7.music.126.net/20210709153407/29672438141e7f5b81f052bb2c2a17cb/ymusic/JaVu5md2YFmbOnYqV09S7g==/509951163014237459',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '花海',
    author: '周杰伦',
    url: 'https://m8.music.126.net/20210709153948/0f86a565a9c0ff0bc48109897898930e/ymusic/MTE5OTE5MTcz/199d89003463459a6c3ca12ed5208502.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'summertime',
    author: 'hanser',
    url: 'https://m7.music.126.net/20210709153816/83b53bf2900e24c52ccfce3ce8720885/ymusic/w60SCol9d4wWczyiQMOY-A==/509951163153903755',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '约会誓言',
    author: 'hanser',
    url: 'https://m7.music.126.net/20210709153253/36f9a3a2f9537202c2835b8850258ad3/ymusic/3-N2PT2W5pdqc_1x7VplVw==/509951163122823514',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '1001夜',
    author: 'hanser',
    url: 'https://m8.music.126.net/20210709153614/0d06233030b1a06a416087d847d5a6fe/ymusic/kcN_gONywc_riT2GWGo6ng==/509951163213682867',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: 'Suki Daccha',
    author: 'ミカヅキ BIGWAVE',
    url: 'https://m8.music.126.net/20210709154001/08233bfc88d2e82d8c26811c97e5fef0/ymusic/T0m7Z_If1_k5GQEZ-Ex2UQ==/509951162999208931',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '钢铁直男',
    author: 'hanser',
    url: 'https://m8.music.126.net/20210709153455/f02ec5cb12ff684d867b2ee1671d5861/ymusic/6bc5/e44d/eadd/26b4741b1d5d07c7bc9cc685bbf68f6d.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '【取经计划·原创】新·九九八十一',
    author: '冷鸟',
    url: 'https://m7.music.126.net/20210709152614/47cadd4541fe8b6596c46762bbb14d4b/ymusic/MQna_-BcGX-Rv3mR4sZxcw==/509951163213685220',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: 'アイロニ',
    author: '鹿乃',
    url: 'https://m8.music.126.net/20210709152632/8fc976a25bbc39df5046df4d2b6708ab/ymusic/VLfp3wxn-fsUxdTEOdKu_Q==/509951162863369057',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: 'インドア系ならトラックメイカー',
    author: 'Yunomi',
    url: 'https://m7.music.126.net/20210709153744/f5d1ba747d8a8cffc9e16b70b32e754e/ymusic/LJn7zzKidzuHFKagkZaIPQ==/509951163213684222',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '芒种',
    author: '音阙诗听',
    url: 'https://m7.music.126.net/20210709152902/39432b0a9ca91a49bf3593b379eba2c5/ymusic/1pZ2wkBXla1AfQMp7JYVvg==/509951163044997206',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '告白(Acoustic)',
    author: '冷鸟',
    url: 'https://m7.music.126.net/20210709153346/b915b61efc7b1d2bddad70c98489fe20/ymusic/kLnHwSrpnsXLkL6Tjcnd3w==/509951163043770119',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '恋爱语音导航',
    author: '冷鸟',
    url: 'https://m8.music.126.net/20210709152817/338d04ad968396c517c8df5cd7acdf58/ymusic/xhhP2BVG3zLC44zDPHNPcQ==/509951163213693030',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '我的一个道姑朋友',
    author: '双笙',
    url: 'https://m8.music.126.net/20210709153151/98ed7680b5b89627c39996956a46555c/ymusic/nMTiI8pyL4mIq5GtOzlKWA==/509951163034589950',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '末世歌者',
    author: '洛天依',
    url: 'https://m8.music.126.net/20210709152950/9bd90afb808f489b62480925f2c9fda4/ymusic/H4ZfdI6h4sVMDKdNEv6_FQ==/509951163132014456',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '立冬',
    author: '音阙诗听',
    url: 'https://m8.music.126.net/20210709152739/76d3f8e26b34cb9618d6424b6262aade/ymusic/bj9SY41ViXMo93jQvuMtWQ==/509951163089420938',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '彼女は旅に出る',
    author: '鎖那',
    url: 'https://m8.music.126.net/20210709152711/ff9076bc159ede2f89c97af95f913139/ymusic/ErKeYR9XP_lx2msFKJw5Hg==/509951163037832043',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: 'Deep Blue Townへおいでよ',
    author: '内田真礼',
    url: 'https://m8.music.126.net/20210709153933/6e263aeb4dd369741f1f01fbe769e6a0/ymusic/fyZ25mmoWIqd1nak0q7VrA==/509951162988767937',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '化身星海',
    author: '爱哥',
    url: 'https://m8.music.126.net/20210709152727/2dfba27cd32152c0f452b166ddaecd70/ymusic/IfbEMm4fcUNJ0ZXQToUy4w==/509951163213685217',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  }, {
    title: '緋色月下、狂咲ノ絶',
    author: '东方红魔郷',
    url: 'https://m7.music.126.net/20210709153806/fab5458311bfa2c095a769116a930e7d/ymusic/LFChbZ1l9xKoralhWBzo0Q==/509951163077934969',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },]
});

/*切换音频*/
//ap.list.switch(0);
//ap.play();