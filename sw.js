const C="gym-v8",F=["./", "index.html", "manifest.webmanifest", "apple-touch-icon.png", "icon-512.png", "barlow-condensed-latin-600-normal.woff2", "barlow-condensed-latin-700-normal.woff2", "ibm-plex-mono-latin-500-normal.woff2", "ibm-plex-mono-latin-600-normal.woff2", "ibm-plex-sans-latin-400-normal.woff2", "ibm-plex-sans-latin-500-normal.woff2", "ibm-plex-sans-latin-600-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match("index.html"))))});
