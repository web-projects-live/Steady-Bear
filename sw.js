// Steady Bear service worker: instant start from a saved copy, then refresh in the background.
const CACHE = 'steady-bear-v4';
const SHELL = [
  './', './index.html', './journey.js', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('supabase.co')) return; // live data never comes from cache
  const key = req.mode === 'navigate' ? './index.html' : req;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(key, { ignoreSearch: req.mode === 'navigate' });
    const net = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(key, res.clone());
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
