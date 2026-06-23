  const CACHE_NAME = 'daisy-home-v1';
  self.addEventListener('install', () => { self.skipWaiting(); });
  self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
  self.addEventListener('fetch', e => {
    if (e.request.url.includes('/api/') || e.request.url.includes('onrender.com') || e.request.url.includes('supabase.co')) return;
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { if (res.ok) { const clone = res.clone();
  caches.open(CACHE_NAME).then(c => c.put(e.request, clone)); } return res; })));
  });
