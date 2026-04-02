var CACHE_NAME = 'veliq-games-v1';
var ASSETS = [
  '/veliq-games/',
  '/veliq-games/manifest.json',
  '/veliq-games/shared/analytics.js',
  '/veliq-games/shared/ads.js',
  '/veliq-games/shared/share.js',
  '/veliq-games/games/game-001/index.html',
  '/veliq-games/games/game-002/index.html',
  '/veliq-games/games/game-003/index.html'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.filter(function (name) {
          return name !== CACHE_NAME;
        }).map(function (name) {
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return cached || fetch(event.request).then(function (response) {
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function () {
        // Offline fallback - return cached version if available
        return caches.match('/veliq-games/');
      });
    })
  );
});
