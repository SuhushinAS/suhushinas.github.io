const cacheName="cache_v1",urlList=[];function attachEvent(n,t,e){n.removeEventListener(t,e),n.addEventListener(t,e)}function onInstall(n){caches.open(cacheName).then((function(n){n.addAll(urlList)}))}function cacheLite(n){return new Promise((function(t){fetch(n).then((function(e){caches.open(cacheName).then((function(t){t.put(n,e)})),t(e.clone())})).catch((function(){caches.match(n).then((function(n){n&&t(n),t(caches.match("/"))}))}))}))}function onFetch(n){const{request:t}=n;new URL(t.url).origin===location.origin&&n.respondWith(cacheLite(t))}attachEvent(self,"install",onInstall),attachEvent(self,"fetch",onFetch);