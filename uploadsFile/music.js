/*by Karcyril*/


var ap = new APlayer({
  element: document.getElementById('aplayer'),         // Optional, player element
  narrow: false,         // Optional, narrow style
  autoplay: false,              // Optional, autoplay song(s), not supported by mobile browsers
  showlrc: 0,     // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
  mutex: false,                 // Optional, pause other players when this player playing
  theme: '#e6d0b2',          // Optional, theme color, default: #b7daff
  order: 'random',      // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
  preload: 'none',               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
  listmaxheight: '513px',      // Optional, max height of play list
  fixed: true,
  music: [{
    title: 'ロキ - (ROKI)',
    author: '鏡音リン/みきとP',
    url: 'https://m701.music.126.net/20210715235711/1e23b5b0533f2cbe759b4fa03fad0fce/jdyyaac/0e08/0652/030f/9b652d3e2318747adaea4ef15cb7ed76.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'えれくとりっく・えんじぇぅ - (电子天使)',
    author: '初音ミク/ヤスオP',
    url: 'https://m801.music.126.net/20210715235955/66e829e75549cc22ff8f3932b1d7b8d6/jdyyaac/5508/045a/030b/bb3bf44d613084732c4c4a430d7faf61.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'トルコ行進曲 - オワタ＼(^o^)',
    author: '96猫',
    url: 'https://m701.music.126.net/20210716000045/b6785687a4f37f69e34a71ad5eab4441/jdyyaac/0f0b/0209/015c/8a2903e0ae5cbe19754466b5b1dc53ec.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'Conqueror',
    author: 'IA/Sendra',
    url: 'https://m701.music.126.net/20210716000132/c9ab8e869e5cb297cde73b6c55a22349/jdyyaac/0453/075f/0f5c/39ba8e88a405a0db84168651542f6b58.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'ちるちる',
    author: 'REOL',
    url: 'https://m701.music.126.net/20210716000214/3518b5dc49f3e81c6708152e584cfdba/jdyyaac/545e/530c/010f/c4568ef910dfa666e9706ecca4302c60.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: '热爱105°C的你（日语版）（翻自 阿肆）',
    author: '樹莓蛋奶酥',
    url: 'https://m801.music.126.net/20210716000308/68ba7c81626b89c61fb36d0375214739/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/9422312483/ebd1/2a1a/9079/f1381ec1178ca307faf3ba7da25b24ba.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'カサネテク',
    author: 'Sakanya',
    url: 'https://m801.music.126.net/20210716000403/c2ad2d97d2e925f053e60dd0c93294a6/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4569815640/5d91/903d/83b9/89189fe53ba72ce326b383fa49548378.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: '「交织together」',
    author: 'DMYoung/Hanser/泠鸢yousa',
    url: 'https://m801.music.126.net/20210716000535/40ae2ea35a154ce3d369f11d9935747e/jdyyaac/5553/5553/0358/b93a133e39b9abd82c4c42546c4cc835.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },]
});

/*切换音频*/
//ap.list.switch(0);
//ap.play();