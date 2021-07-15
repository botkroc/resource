/*by Karcyril*/


var ap = new APlayer({
  element: document.getElementById('aplayer'),         // Optional, player element
  narrow: false,         // Optional, narrow style
  autoplay: true,              // Optional, autoplay song(s), not supported by mobile browsers
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
    title: 'えれくとりっく',
    author: '初音ミク/ヤスオP',
    url: 'https://m801.music.126.net/20210715235955/66e829e75549cc22ff8f3932b1d7b8d6/jdyyaac/5508/045a/030b/bb3bf44d613084732c4c4a430d7faf61.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'トルコ行進曲',
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
    title: '热爱105°C的你',
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
  },{
    title: '深海少女',
    author: '初音ミク',
    url: 'https://m801.music.126.net/20210716003843/288168b22ea57a9cede8eeb071e1d575/jdyyaac/525c/565d/0659/e6dcef3b87a784b17bae13eefc3710ee.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: '永夜のパレード',
    author: 'ケーキ姫☆優海/JUMA',
    url: 'https://m701.music.126.net/20210716004021/af6b8cf7021bf4daad88e36921d84ff1/jdyyaac/0759/5152/5452/0308b12ca2f8b9493d1ec8c9fdd70ddd.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: 'tutu',
    author: '鎖那',
    url: 'https://m701.music.126.net/20210716004119/b111c5602636c257e1a9753c47f4f4d4/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/9482386544/200a/babf/c5ea/690c1c5141f717597caf18226c061583.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: '【洛天依】影子小姐',
    author: '著小生zoki/洛天依',
    url: 'https://m801.music.126.net/20210716004208/33f62a19aae72f3fc8f882cf00e13127/jdyyaac/025f/010e/5358/55be419a516d15356363d21bdc96cd59.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: '化身星海',
    author: '中国绊爱',
    url: 'https://m10.music.126.net/20210716004253/f5a5530488adff07a6b04d1d33e5e27d/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3037457457/3a8b/3d9c/2896/a6a45ca9c8836514eff514265e0b1231.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },{
    title: '钢铁直男',
    author: 'Hanser',
    url: 'https://m10.music.126.net/20210716004409/b68bf28b515083f3b45ee7ddab3dd77e/ymusic/055c/020e/545c/26b4741b1d5d07c7bc9cc685bbf68f6d.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/F132F20170513155641.jpg',
  },]
});

/*切换音频*/
//ap.list.switch(0);
//ap.play();