"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},precacheConfig=[["/2015/01/17/python-format-string/index.html","0ba9f53312f967111ab2bff6e24cd29a"],["/2015/01/23/SublimeText-Shortcuts-Cheatsheet/index.html","264d957f5aa0f8ad3a51e0a508f21089"],["/2015/01/28/ORA-00904-标识符无效解决办法/index.html","1fc79ae64b590b582aabf0c8b89b871b"],["/2015/01/29/diff-xrange-range/index.html","5633c7996de53c21b9ec8d4b2b4ef478"],["/2015/01/30/python-how-to-sorting/index.html","c2288ae89e002dcc7d005637fee5833d"],["/2015/02/05/about-gitignore-problem/index.html","95941497be2046b4c3b602458de7ccae"],["/2018/06/25/Managin-Oneself/index.html","5f61f0aef116645da2f64e450faa7eb9"],["/about/index.html","b4c91c0a27edce60baa817d558595391"],["/archives/2015/01/index.html","b2ddeea9d0ce2574f410bb36a7b58c1b"],["/archives/2015/02/index.html","5a8b88a33be32c4be2805f91efe0adf0"],["/archives/2015/index.html","602f1daf4f303da06e27c58c10939804"],["/archives/2018/06/index.html","677318533cf0140a1be7e8bb81f45529"],["/archives/2018/index.html","172a352325870ad149fe30c89e912e0a"],["/archives/index.html","88dbaa9665b635eb8229a96191a42eb0"],["/atom.xml","5fc16573602c51cecb0e266d74e5ea65"],["/categories/Database/index.html","d12832697407acbad3d0b2866d5aec5f"],["/categories/Editer/index.html","e27ce5f11ec54e39ce73d7c262f36bf0"],["/categories/Git/index.html","b12ce1b208a72d1913fb903930b7b603"],["/categories/Python/index.html","ffc0c279ff887769b8606d7cec6ce236"],["/categories/index.html","7c7c9f78530563208febef5734eb544a"],["/categories/成长/index.html","38d2761df774089e34349c9343f03814"],["/css/main.css","deca9bd9140ac84d89b9fb669cf5d946"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","b8e410a1de0e9bcfd3af2ce3c53db1e7"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","6d4e97a9b7fbea233d6cc166bd69ab81"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icons/icon-128x128.png","78965246275ea23fbc0bf2bb5c9f8005"],["/images/icons/icon-144x144.png","966ffe8e47e8ace9ea76e0acfe11fdb0"],["/images/icons/icon-152x152.png","be7c1ca42c71d0f15f80d01a5041be58"],["/images/icons/icon-192x192.png","c5864f5efdef75e92a583ae7f5c0e782"],["/images/icons/icon-384x384.png","c5864f5efdef75e92a583ae7f5c0e782"],["/images/icons/icon-512x512.png","c5864f5efdef75e92a583ae7f5c0e782"],["/images/icons/icon-72x72.png","56fb80c17e0e61ad3969af1ef2bc5ef5"],["/images/icons/icon-96x96.png","b111057fd3847cda8e9fef0206040024"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","39db6d47b0ec4257e2926d10fb1f4679"],["/index.html","f072ac47e349ec9bcbf047584c6d02e3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","87117606c2221466e24180903a59c6a3"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","902748b461786b60ebcaf181d490d702"],["/js/src/post-details.js","f4986086aceedc850d3790bb06e66065"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","9dbd61090ab42a397a87c0ff2725cfbb"],["/lib/canvas-nest/README.html","cb21a2e25274c7eb2da1e050435a45a2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","1571296a04366a3dc3fe89ae813296b4"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fastclick/README.html","579c2c94cd9578100b77f35fb97d6b75"],["/lib/fastclick/bower.json","50ebebf43ccc629c814281e60fd049f0"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","d79823ea7ce78b2380bdfed5171042ba"],["/lib/jquery_lazyload/bower.json","5f8449c87f33671904615bb63d8283cf"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/README.html","9cbfa7b88c0769a98d62cf943581c01a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","1160351a13df7eee6b8114c7cdac97c8"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","a465f594dadd9461b17b6f861ee9084d"],["/search.xml","b8f36a2efc7d0405246cd25db4b627af"],["/tags/Git/index.html","72b538c06c9e9585a09a17e93733b624"],["/tags/Oracle/index.html","d2d24d71cb90d32d85ce8f2e3d707b49"],["/tags/Python/index.html","2bda0dc0171defe59e3ceca83394829e"],["/tags/SublimeText/index.html","259b34e938aea3fa9965a45fd58934d9"],["/tags/index.html","6e434541a3cd5458c1a70ab3882f0db7"],["/tags/成长/index.html","2d83de9828cdefc7ee3e8c73965920f2"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}}),function(e){if("object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function c(o,i,s){function f(n,e){if(!i[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var a=i[n]={exports:{}};o[n][0].call(a.exports,function(e){var t=o[n][1][e];return f(t||e)},a,a.exports,c,o,i,s)}return i[n].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)f(s[e]);return f}({1:[function(e,t,n){function s(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,i=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:s,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||i.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||i.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,i=Date.now();return s("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,r,i)}).then(function(e){return f.expireEntries(e,c,a,i)}).then(function(e){s("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){s("Done with cache cleanup.")})}).catch(function(e){s(e)})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return s("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,f="store",u="url",d="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:u}).createIndex(d,d,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return(o=e,i=t,s=r,i?new Promise(function(e,t){var r=1e3*i,a=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(d).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&s-r>t.value[d]){var n=t.value[u];a.push(n),c.delete(n),t.continue()}},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return(r=e,s=n,s?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(d),i=o.count();o.count().onsuccess=function(){var r=i.result;s<r&&(o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[u];a.push(n),c.delete(n),r-a.length>s&&t.continue()}})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,s});var o,i,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var a=new URL("./",self.location).pathname,c=e("path-to-regexp"),r=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n};r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){var f=e("./route"),u=e("./helpers"),i=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},t instanceof RegExp?a=RegExp:a=(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var i=o.get(e),s=c.regexp||c.fullUrlRegExp;i.has(s.source)&&u.debug('"'+t+'" resolves to same regex as existing route.'),i.set(s.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,i(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=i(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),u=e("./cacheOnly");t.exports=function(o,i,s){return f.debug("Strategy: fastest ["+o.url+"]",s),new Promise(function(t,n){var r=!1,a=[],c=function(e){a.push(e.toString()),r?n(new Error('Both cache and network failed: "'+a.join('", "')+'"')):r=!0},e=function(e){e instanceof Response?t(e):c("No result returned")};f.fetchAndCache(o.clone(),s).then(e,c),u(o,i,s).then(e,c)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var u=e("../options"),d=e("../helpers");t.exports=function(o,e,i){var s=(i=i||{}).successResponses||u.successResponses,f=i.networkTimeoutSeconds||u.networkTimeoutSeconds;return d.debug("Strategy: network first ["+o.url+"]",i),d.openCache(i).then(function(e){var t,n,r=[];if(f){var a=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=i.cache||u.cache,n=Date.now(),r=t.maxAgeSeconds;d.isResponseFresh(e,r,n)&&a(e)})},1e3*f)});r.push(a)}var c=d.fetchAndCache(o,i).then(function(e){if(t&&clearTimeout(t),s.test(e.status))return e;throw d.debug("Response was an HTTP error: "+e.statusText,i),n=e,new Error("Bad response")}).catch(function(t){return d.debug("Network or response error, fallback to cache ["+o.url+"]",i),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(c),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,r=[],a=0,c=0,o="",i=t&&t.delimiter||"/";null!=(n=k.exec(e));){var s=n[0],f=n[1],u=n.index;if(o+=e.slice(c,u),c=u+s.length,f)o+=f[1];else{var d=e[c],l=n[2],h=n[3],b=n[4],p=n[5],m=n[6],g=n[7];o&&(r.push(o),o="");var v=null!=l&&null!=d&&d!==l,x="+"===m||"*"===m,y="?"===m||"*"===m,w=n[2]||i,j=b||p;r.push({name:h||a++,prefix:l||"",delimiter:w,optional:y,repeat:x,partial:v,asterisk:!!g,pattern:j?(E=j,E.replace(/([=!:$\/()])/g,"\\$1")):g?".*":"[^"+R(w)+"]+?"})}}var E;return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(u){for(var d=new Array(u.length),e=0;e<u.length;e++)"object"==_typeof(u[e])&&(d[e]=new RegExp("^(?:"+u[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?l:encodeURIComponent,c=0;c<u.length;c++){var o=u[c];if("string"!=typeof o){var i,s=r[o.name];if(null==s){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(p(s)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(i=a(s[f]),!d[c].test(i))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===f?o.prefix:o.delimiter)+i}}else{if(i=o.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(s),!d[c].test(i))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+i+'"');n+=o.prefix+i}}else n+=o}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function h(e,t){return e.keys=t,e}function b(e){return e.sensitive?"":"i"}function o(e,t,n){p(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var i=e[o];if("string"==typeof i)c+=R(i);else{var s=R(i.prefix),f="(?:"+i.pattern+")";t.push(i),i.repeat&&(f+="(?:"+s+f+")*"),c+=f=i.optional?i.partial?s+"("+f+")?":"(?:"+s+"("+f+"))?":s+"("+f+")"}}var u=R(n.delimiter||"/"),d=c.slice(-u.length)===u;return r||(c=(d?c.slice(0,-u.length):c)+"(?:"+u+"(?=$))?"),c+=a?"$":r&&d?"":"(?="+u+"|$)",h(new RegExp("^"+c,b(n)),t)}function i(e,t,n){return p(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return h(e,t)}(e,t):p(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(i(e[a],t,n).source);return h(new RegExp("(?:"+r.join("|")+")",b(n)),t)}(e,t,n):(r=t,o(c(e,a=n),r,a));var r,a}var p=e("isarray");t.exports=i,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=o;var k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdnjs.cloudflare.com"});