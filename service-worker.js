if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,c)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2d4523a9354b9e235015cb4bcde400b3"},{url:"about/index.html",revision:"eea2cb6998c00522ead283ef42bd1bcf"},{url:"archives/2020/06/index.html",revision:"86827f4cfd979e7c911f9fb09e03877a"},{url:"archives/2020/09/index.html",revision:"757c825110277bcbd9251a2b3d1dc6a2"},{url:"archives/2020/12/index.html",revision:"d0c4546179f3c35505652aada5fe365c"},{url:"archives/2020/index.html",revision:"46b28e7637cca67733eb7c01fa07b44d"},{url:"archives/2021/03/index.html",revision:"bfb63384278289b5fdc86f0b0f074a23"},{url:"archives/2021/04/index.html",revision:"ad65747c6a7aac09429e8df4a97f9707"},{url:"archives/2021/07/index.html",revision:"53695870f5a8291ac51d24735b378e3b"},{url:"archives/2021/11/index.html",revision:"5b5fcd97e92827cd30d4c5497719d1d0"},{url:"archives/2021/index.html",revision:"4b65eb0147c4072d183b81f25bc963f8"},{url:"archives/5d588603.html",revision:"fa39ef777edf7aa8064419cf86401f8e"},{url:"archives/a1635f0b.html",revision:"ab5be69fc832f7bb0b27fe338b8cb6f4"},{url:"archives/a43ef6ce.html",revision:"693877a2c3433227f5d19e7c67b57a15"},{url:"archives/a6b882cb.html",revision:"2fdd12e557ffaf3d00c8840eb1bc73c5"},{url:"archives/c4ac2dd2.html",revision:"42176dd14469f32a766dd96160d9e04c"},{url:"archives/e074f02e.html",revision:"d851c7db16bbe7a4dfe62cbdd969a111"},{url:"archives/f62935f1.html",revision:"44be50ad44640c4d97f7e7caf0411f8c"},{url:"archives/ff1824ec.html",revision:"e87190c4573b5b4d40db2fc237c271e0"},{url:"archives/index.html",revision:"670fa7bea738b82525c40ef94e631f93"},{url:"categories/index.html",revision:"8d87bbc536fbbcd0c02c16476238020b"},{url:"categories/日常/index.html",revision:"0aca2ebeb5616ba7feb52291354aa0a8"},{url:"categories/网络/index.html",revision:"ef49c1aca3b849d5bb73e6b9dafd9337"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"b3fb990a9389cf71a429658bed5e4d9e"},{url:"css/highlight.css",revision:"e9ef75cee9c48957511133aee7ae4484"},{url:"css/macpanel.css",revision:"8d1612c7140d541017157c828c85baa1"},{url:"css/main.css",revision:"4e1a1ea4845b91ebd016c961373051e1"},{url:"img/ava.jpg",revision:"01a5136051b11f73743b015c3363dc3f"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/favicon.png",revision:"a659d17565b7b26bcef231f30f07008e"},{url:"img/icons/icon-144x144.png",revision:"d76b4f4f46ddf3acd25adf3a7768cb6c"},{url:"img/icons/icon-72x72.png",revision:"d086c4808621c7c462b287b33e6f4f34"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"3ae0450cccf5caa8b00ebb144ff2753d"},{url:"js/boot.js",revision:"9a954f041665f6c6dd239e94803cd150"},{url:"js/color-schema.js",revision:"6552e853a9a711bc68ba3319a7ddfdff"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"26ff27e9c7abf1d66d5bf0acab1a5d76"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"017e220f2a03605608af09e6f8464323"},{url:"js/utils.js",revision:"8a0ef4d80a973a1514c6d22a24fac883"},{url:"links/index.html",revision:"6740fb4cc71ab07b6b990fe984058e9e"},{url:"tags/CDN/index.html",revision:"f0df8871f425d111e64de6402cbb1e13"},{url:"tags/Cloudflare/index.html",revision:"f7e4248fef2f420accef075722620c14"},{url:"tags/Cloudreve/index.html",revision:"9746b15b1d25a2125b4b78df87214215"},{url:"tags/Docker/index.html",revision:"fe073d88cc8e176509f7b3d3f2dec6c1"},{url:"tags/DST/index.html",revision:"604cf18a050f2ddfdfa22a54c21c2310"},{url:"tags/E5续订/index.html",revision:"6fb3010f3d942fead8aeaf9301c29b8d"},{url:"tags/Goindex/index.html",revision:"9bb06f8220d345a5b066950b8e26ea9a"},{url:"tags/Google-Drive/index.html",revision:"049b0c0dfb293d6b560c6447c6dacca8"},{url:"tags/index.html",revision:"c33952c92cd1c9ae45f6b464366f1b63"},{url:"tags/LinuxGSM/index.html",revision:"5afc541604270d0cf610d8f996012980"},{url:"tags/N1盒子/index.html",revision:"c97547205898b49719202abb91742385"},{url:"tags/NFS/index.html",revision:"b5858d0689b97bf0ea0d2782bf7bfc6c"},{url:"tags/qbittorrent/index.html",revision:"842548d2aed8dfe7a7f24e192f940eb7"},{url:"tags/sakurafrp/index.html",revision:"ed6300e2dd387a46bbd0a23bd7476402"},{url:"tags/日常/index.html",revision:"727545851525b81c5109dbafc0a459fb"},{url:"tags/网易云UWP/index.html",revision:"7759e3ec224a98cdfcf5a80586ce3b3c"},{url:"tags/网盘/index.html",revision:"94d0eb7ef2591949753b3a6d726552eb"},{url:"tags/群晖/index.html",revision:"5c74191597ab218d52bbfcabdaa2e8cb"},{url:"tags/阿里云/index.html",revision:"02ead15b6b44427977cf9a6a4be2f714"},{url:"tags/饥荒/index.html",revision:"8e1cbd1f7c728574e611eaaa9e032adb"},{url:"tags/饥荒联机服务器/index.html",revision:"c44260ac8e1abed2d760b7d7a514daec"}],{})}));
//# sourceMappingURL=service-worker.js.map
