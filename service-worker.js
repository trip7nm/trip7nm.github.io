if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"ae665396565ae23ee6adcedcbd17e9e8"},{url:"about/index.html",revision:"b91c49f09794c888c284eb0fcc1b6691"},{url:"archives/2020/06/index.html",revision:"d98d18cb33eb6097f03de9b1ee3e761b"},{url:"archives/2020/09/index.html",revision:"8a954a8fbc6d1020a36b2ed8ccdc713d"},{url:"archives/2020/12/index.html",revision:"05e47e0ee697c3dfb93eef055eee14dc"},{url:"archives/2020/index.html",revision:"db618e4bc6689e4b88cf40469ae6c2f7"},{url:"archives/2021/03/index.html",revision:"19291469c995704136af99025de1d87e"},{url:"archives/2021/04/index.html",revision:"7e6aaed07bb9fdb038c97f9bb9124be8"},{url:"archives/2021/07/index.html",revision:"03d70700fb087306b0fa4817b8b0ceb8"},{url:"archives/2021/index.html",revision:"e51f3e9b1e8686fddcd40947722de7ab"},{url:"archives/a1635f0b.html",revision:"d56459d035901903db70b8774ac6971b"},{url:"archives/a43ef6ce.html",revision:"9be517b2f42185eb39a4e98b25eeb38c"},{url:"archives/a6b882cb.html",revision:"0d30bb7e915120be7dd862a7f3eed9b7"},{url:"archives/c4ac2dd2.html",revision:"2e399b1a3997f23dcc597cc8fd33705f"},{url:"archives/e074f02e.html",revision:"b74c1dd51790fa7e740ee3804651781a"},{url:"archives/f62935f1.html",revision:"d7f7daf13b85da4112990ef10fe37098"},{url:"archives/ff1824ec.html",revision:"dcc7087a0d83732cc88b5fbd1ff3da7e"},{url:"archives/index.html",revision:"8d392b390a84f2c981f89c296d3c113a"},{url:"categories/index.html",revision:"bf0f60e2f6db2330680eeffa22b6085a"},{url:"categories/日常/index.html",revision:"d7599b52f54ab08ae3334c410dcf3c5b"},{url:"categories/网络/index.html",revision:"070c719ed7efc849bdfce2039741b4c6"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"0ea0eb384fa9566c4c286969e33061b8"},{url:"img/avatar-non.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar.png",revision:"da549069a78ed8ecfaf27bcc77d9a8f4"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon.png",revision:"a659d17565b7b26bcef231f30f07008e"},{url:"img/icons/icon-144x144.png",revision:"d76b4f4f46ddf3acd25adf3a7768cb6c"},{url:"img/icons/icon-72x72.png",revision:"d086c4808621c7c462b287b33e6f4f34"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/running.gif",revision:"b56aa5c769940e60851084c096f55bc3"},{url:"index.html",revision:"b07d0bd619ae5e336b3f7923651e35ac"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"c6cf5c216322ed487d845c91d004b2a0"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"d5b5f8c32b663e0ee42a21be17585f83"},{url:"js/local-search.js",revision:"94369155d7ed57ddb6e464adaa0fbc0e"},{url:"js/plugins.js",revision:"a21bf058047d0f3a2ee95b8c911e6916"},{url:"js/utils.js",revision:"a19e10303f1fc4143cab109ba27dbf75"},{url:"lib/hint/hint.min.css",revision:"b5f3452bff6af473afc6ec1169990093"},{url:"links/index.html",revision:"942c0b761768ab99353288b8db1843f4"},{url:"tags/CDN/index.html",revision:"3c47c2d1b5bd7f13e97326c1c579cc67"},{url:"tags/Cloudflare/index.html",revision:"9670b6087d7a2a5ea7d6cf913254c465"},{url:"tags/Cloudreve/index.html",revision:"b0c786d72f40886d25f934012532b1de"},{url:"tags/Docker/index.html",revision:"bc7e8b830d951dcd3ad93ce50fcbc218"},{url:"tags/DST/index.html",revision:"951a642ffea734975f9278ff505d1585"},{url:"tags/E5续订/index.html",revision:"750e9ba8cbba9d5a9ae8b9b84c219299"},{url:"tags/Goindex/index.html",revision:"67636520f2108e24cbef471915180d37"},{url:"tags/Google-Drive/index.html",revision:"6a16b825b72351bedb63e5adcc460d02"},{url:"tags/index.html",revision:"2f8695b8658057fadc3752b19a6496cc"},{url:"tags/N1盒子/index.html",revision:"05970b983fc632757343d3c4da3c0f8e"},{url:"tags/NFS/index.html",revision:"f7d5743c1b03722fab1017caa5ac7ddf"},{url:"tags/qbittorrent/index.html",revision:"04aa89c313fa8d27d74025b00e4fe1e0"},{url:"tags/sakurafrp/index.html",revision:"b10170c1447299ce1e96bde4bf6f1835"},{url:"tags/日常/index.html",revision:"f0648fc502079cbdabd029c93f5fc770"},{url:"tags/网易云UWP/index.html",revision:"72486cffeecf33e1b34dae45eb7388d4"},{url:"tags/网盘/index.html",revision:"e0f07101ea6d3947f1d3eb8a50388748"},{url:"tags/群晖/index.html",revision:"4fbaaa418f02bab9df664239d2271a7f"},{url:"tags/阿里云/index.html",revision:"44473464cbcafc26876cfd489ff036d7"},{url:"tags/饥荒/index.html",revision:"7f237999b08b4d265d05f52d9c5dbf99"},{url:"tags/饥荒联机服务器/index.html",revision:"82e3e19dabd56dad7b4e00af8d3354b6"}],{})}));
//# sourceMappingURL=service-worker.js.map
