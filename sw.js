const CACHE_NAME = 'buzzfeed-clone-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/images/hero.jpg',
  // ...other assets
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
