if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const t=e=>s(e,a),o={module:{uri:a},exports:r,require:t};i[a]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-42ce28c6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/777-cc7d00eae690f3ea.js",revision:"cc7d00eae690f3ea"},{url:"/_next/static/chunks/framework-e3af5937d4bc683b.js",revision:"e3af5937d4bc683b"},{url:"/_next/static/chunks/main-daec7e432124e82c.js",revision:"daec7e432124e82c"},{url:"/_next/static/chunks/pages/_app-ce12c227f40905c5.js",revision:"ce12c227f40905c5"},{url:"/_next/static/chunks/pages/_error-dffd65023f03470c.js",revision:"dffd65023f03470c"},{url:"/_next/static/chunks/pages/index-9695977070cda81b.js",revision:"9695977070cda81b"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/b40b9bca8b900de8.css",revision:"b40b9bca8b900de8"},{url:"/_next/static/k4pOZP1tgBDOV1wxzWa2G/_buildManifest.js",revision:"46a6daa67ff65627d9b07826c08fa005"},{url:"/_next/static/k4pOZP1tgBDOV1wxzWa2G/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/manifest.json",revision:"7d670e96bdbb84fda438bd484bfea54e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200})]}),"GET")}));
