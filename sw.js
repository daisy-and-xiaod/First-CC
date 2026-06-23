self.addEventListener('install', () => { self.skipWaiting(); console.log('SW installed'); });  
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); console.log('SW active'); });
self.addEventListener('fetch', e => {});
