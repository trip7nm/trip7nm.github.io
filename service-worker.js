if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6ac253cb04abba3c09890175b21a5aed"},{url:"about/index.html",revision:"8a4c28985fb568b8ab95ff093ec20292"},{url:"archives/2020/06/index.html",revision:"bf6a68a43f76e1fec7d0dfe8936646f6"},{url:"archives/2020/09/index.html",revision:"e8614ec961ce3c12f3065398c05f4b81"},{url:"archives/2020/12/index.html",revision:"5a5132084c58088c67dd970d303bdbdf"},{url:"archives/2020/index.html",revision:"53a1238bbff4ab92537ad02a4ab77551"},{url:"archives/2021/03/index.html",revision:"7d61e3a58d2ee47930587301838dd077"},{url:"archives/2021/04/index.html",revision:"926f1fe5da194e0b9919fc016214110b"},{url:"archives/2021/07/index.html",revision:"8067390ea56efd330fffca7cf15ea5ab"},{url:"archives/2021/11/index.html",revision:"d85a714f45510de6aec6a961da15ce99"},{url:"archives/2021/index.html",revision:"affb89e63a22f2adeef707e5380900e3"},{url:"archives/5d588603.html",revision:"30b7e340f3f8ff65cf03dbe74d1227f3"},{url:"archives/a1635f0b.html",revision:"e5fe5af398dcc74fec988a35a3b90127"},{url:"archives/a43ef6ce.html",revision:"3e1fa416170046795a730d8edd5cb6d1"},{url:"archives/a6b882cb.html",revision:"bfa381f8b3026927597ca66ece271025"},{url:"archives/c4ac2dd2.html",revision:"83a078ea5000b769c0ede04690289be5"},{url:"archives/e074f02e.html",revision:"edb1c20257d1e0ccae69be517eb1f8fd"},{url:"archives/f62935f1.html",revision:"3016fb06f3b1c935f324c42ff66db337"},{url:"archives/ff1824ec.html",revision:"dec5eab6a5a31439eedc0e209c2c3d64"},{url:"archives/index.html",revision:"1a156c0789c29d2432395adb18a84df5"},{url:"categories/index.html",revision:"e6343c0d4a21058131cdffe485218990"},{url:"categories/日常/index.html",revision:"48fdfa7585803597ee17377bb48cf37d"},{url:"categories/网络/index.html",revision:"916b99ba1b21b98c4585a36537e88b80"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"c256e7029e28a63f19a7b7a5535bc71e"},{url:"img/avatar-non.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar.png",revision:"da549069a78ed8ecfaf27bcc77d9a8f4"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon.png",revision:"a659d17565b7b26bcef231f30f07008e"},{url:"img/icons/icon-144x144.png",revision:"d76b4f4f46ddf3acd25adf3a7768cb6c"},{url:"img/icons/icon-72x72.png",revision:"d086c4808621c7c462b287b33e6f4f34"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/running.gif",revision:"b56aa5c769940e60851084c096f55bc3"},{url:"index.html",revision:"19fc1a8e20430117da0df48a45d0da1e"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"024c71b09cc4a45a5dbc4becf1c44271"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"6648c3222ac4462eda6bc75529bc142d"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"af5299d7b1b3be6149ac30c9208e2323"},{url:"js/utils.js",revision:"047ce31e8b0ba3d8356401107632234c"},{url:"lib/hint/hint.min.css",revision:"b5f3452bff6af473afc6ec1169990093"},{url:"links/index.html",revision:"7a8d99ddd8d8b69523eddbfc2150d5f1"},{url:"tags/CDN/index.html",revision:"c33dbf70b47fd73c77e4f2b69cd7805d"},{url:"tags/Cloudflare/index.html",revision:"ee7855fa2fff380a81888b38dde19f70"},{url:"tags/Cloudreve/index.html",revision:"9c5df57149cdc41ca3d9b452c48ea60a"},{url:"tags/Docker/index.html",revision:"f8c44ccb101f300d55e0fc3a76de2782"},{url:"tags/DST/index.html",revision:"faff68edb79b379d8fbd4ae8a299c381"},{url:"tags/E5续订/index.html",revision:"d998addeedbbb992269cfbabf302b4b0"},{url:"tags/Goindex/index.html",revision:"944685f61acaa2c58b907b88aad95e83"},{url:"tags/Google-Drive/index.html",revision:"71ac88191babce75ef4a7ff6b8012218"},{url:"tags/index.html",revision:"53a5343eb2a5239ab4592cfe838e9e28"},{url:"tags/LinuxGSM/index.html",revision:"98736fc2df84a6e3eb4876bb2129901b"},{url:"tags/N1盒子/index.html",revision:"3025ade4ff05e41654d0cddba2c888e9"},{url:"tags/NFS/index.html",revision:"5cf240f17a7d74251b63bc06600908cc"},{url:"tags/qbittorrent/index.html",revision:"cde00b13a06f870d31f70707bc47740b"},{url:"tags/sakurafrp/index.html",revision:"db1dbb12b0353bd2dd7801b68f51d62d"},{url:"tags/日常/index.html",revision:"4f763248b1f434c51fb16bc815e8a7c5"},{url:"tags/网易云UWP/index.html",revision:"57eed827a250c31805603690c5c953ca"},{url:"tags/网盘/index.html",revision:"ce13c14dd75ca67b11062bc6b23f7d6d"},{url:"tags/群晖/index.html",revision:"802736bfe2bb2818ef6c5507384de26e"},{url:"tags/阿里云/index.html",revision:"69b857db1bdbb002f22f11ecc7456e2f"},{url:"tags/饥荒/index.html",revision:"493caabdb473bca5d212b921f2ff7d0b"},{url:"tags/饥荒联机服务器/index.html",revision:"797e6d5d3bee5692a2c8523a31910150"}],{})}));
//# sourceMappingURL=service-worker.js.map
