// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('calc-cache').then(cache => {
      return cache.addAll([
        '/',
        '/calculator.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
