if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/06/02/netease/index.html",revision:"367716b3796a316cf4cb170fef2e415c"},{url:"2020/09/28/googledrive/index.html",revision:"07e068d8afa84ccb269a92a4f3970ab4"},{url:"2020/12/13/cdn/index.html",revision:"2f2045580d9fd763ef6aa70557ea4acc"},{url:"2021/03/25/dst/index.html",revision:"04260540a7d14160cf38c1ab010e6e82"},{url:"2021/04/13/sakurafrp/index.html",revision:"0d53b4d1b9242a48a9cc12ed978ee3e2"},{url:"2021/07/09/n1/index.html",revision:"1f7b20b94cd4825b64fbb3eb43353bd7"},{url:"2021/07/31/E5/index.html",revision:"87eaf9fc3f9243433d92ca390fd71937"},{url:"404.html",revision:"ae665396565ae23ee6adcedcbd17e9e8"},{url:"about/index.html",revision:"b91c49f09794c888c284eb0fcc1b6691"},{url:"archives/2020/06/index.html",revision:"595882a11a4099df7e99c5675b35e2bf"},{url:"archives/2020/09/index.html",revision:"5e23f07f8316e08d9a7fc3764e672634"},{url:"archives/2020/12/index.html",revision:"032fe357ea017eee5ba513169a1ee42b"},{url:"archives/2020/index.html",revision:"cff05ad860040f766c5b427bedfe0efd"},{url:"archives/2021/03/index.html",revision:"f24fa0e522085652e937f9d4b6ecab63"},{url:"archives/2021/04/index.html",revision:"541820ea2d76bcb75a7559ab39573f7f"},{url:"archives/2021/07/index.html",revision:"c570a757d9b0ceee4c022279b4faa480"},{url:"archives/2021/index.html",revision:"2d0b76061dcdb93dc5215c429cadf82f"},{url:"archives/index.html",revision:"107aa255fbf5b3931284cb6a38751c5c"},{url:"categories/index.html",revision:"34b1fab16a6b393b5f795772bc732097"},{url:"categories/日常/index.html",revision:"229d1989357fb46b68322843c4659e67"},{url:"categories/网络/index.html",revision:"67d9a7b7ddaa03a7036ae9900a708ae5"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"0ea0eb384fa9566c4c286969e33061b8"},{url:"img/avatar-non.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar.png",revision:"da549069a78ed8ecfaf27bcc77d9a8f4"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon.png",revision:"a659d17565b7b26bcef231f30f07008e"},{url:"img/icons/icon-144x144.png",revision:"d76b4f4f46ddf3acd25adf3a7768cb6c"},{url:"img/icons/icon-72x72.png",revision:"d086c4808621c7c462b287b33e6f4f34"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/running.gif",revision:"b56aa5c769940e60851084c096f55bc3"},{url:"index.html",revision:"a8e119f205d637c0e0d627aae944e60d"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"c6cf5c216322ed487d845c91d004b2a0"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"d5b5f8c32b663e0ee42a21be17585f83"},{url:"js/local-search.js",revision:"94369155d7ed57ddb6e464adaa0fbc0e"},{url:"js/plugins.js",revision:"a21bf058047d0f3a2ee95b8c911e6916"},{url:"js/utils.js",revision:"a19e10303f1fc4143cab109ba27dbf75"},{url:"lib/hint/hint.min.css",revision:"b5f3452bff6af473afc6ec1169990093"},{url:"links/index.html",revision:"942c0b761768ab99353288b8db1843f4"},{url:"tags/5T/index.html",revision:"c503ebd5a280397bc4303fe758aebab7"},{url:"tags/CDN/index.html",revision:"78c61fefe58213e127cf7e555ab21bf7"},{url:"tags/Cloudflare-Workers/index.html",revision:"048368c52975d0bfecd0faafd15f9eaf"},{url:"tags/Cloudflare/index.html",revision:"46d738d42c4a9e240ab2678b53c60bd0"},{url:"tags/Cloudreve/index.html",revision:"5c8932c4fd002bb0848cf979ced7ddf3"},{url:"tags/CNAME/index.html",revision:"2d7a078243be2e3dfd7d12895a1a96af"},{url:"tags/Docker/index.html",revision:"397323209b8aef5e0760eaea80b1fa89"},{url:"tags/DST/index.html",revision:"c0e247222c592e3648edade441fb5768"},{url:"tags/E5续订/index.html",revision:"bd31d85fb05d09b2bf6619941ae2b4ea"},{url:"tags/Goindex/index.html",revision:"7947b57b2e7b22e1897a3f1a2b78eb6d"},{url:"tags/Google-Drive/index.html",revision:"e44c4a887933307ffd4b86803d96bcf9"},{url:"tags/index.html",revision:"659996319aee2d80cf6f628ae1306ff3"},{url:"tags/linux/index.html",revision:"8adec36068e02dd8ed1dbb27e5f12278"},{url:"tags/N1盒子/index.html",revision:"9407f2e0c6d3e7826412119e31dc2233"},{url:"tags/NFS/index.html",revision:"b703bc2513ddb1c930d34d4b7bb4151b"},{url:"tags/qbittorrent/index.html",revision:"af9ebfbe52199e4c0e70bab1bf341a1b"},{url:"tags/sakurafrp/index.html",revision:"2eb2fcc1849d4fa18d4531cca76b2c16"},{url:"tags/windows/index.html",revision:"b0e3e7d12271eb930255f67318e59395"},{url:"tags/公网IP/index.html",revision:"29e376feafbf91d0ca699fd181259e5c"},{url:"tags/日常/index.html",revision:"001e5a1d53c60cf5444ab6bab2b283f5"},{url:"tags/网易云UWP/index.html",revision:"dc4219b5f33dff742d24cfe88bb7c134"},{url:"tags/网盘/index.html",revision:"9a9d72b09cb38ece5a328de37d11858b"},{url:"tags/群晖/index.html",revision:"b1dab5bc99b851d571614e4dd0d69dfe"},{url:"tags/阿里云/index.html",revision:"2244191610151df5503ae1b4cc809c9e"},{url:"tags/饥荒/index.html",revision:"593a8e14195e786f403cc46591ad4c95"},{url:"tags/饥荒联机服务器/index.html",revision:"307279ff3732900ad7cd3d98efd03dc5"}],{})}));
//# sourceMappingURL=service-worker.js.map
