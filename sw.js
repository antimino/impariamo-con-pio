const V='pio-v3',FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./audio/index.json'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{
  const c=await caches.open(V);await c.addAll(FILES);
  try{const idx=await (await fetch('./audio/index.json')).json();await c.addAll([...new Set(Object.values(idx))].map(f=>'./audio/'+f))}catch(err){}
})());self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
