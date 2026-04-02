var CACHE_NAME = 'veliq-games-v2';
var ASSETS = [
  '/Logical-Detox-/',
  '/Logical-Detox-/veliq-games/',
  '/Logical-Detox-/veliq-games/index.html',
  '/Logical-Detox-/veliq-games/manifest.json',
  '/Logical-Detox-/veliq-games/games/game-001/index.html',
  '/Logical-Detox-/veliq-games/games/game-002/index.html',
  '/Logical-Detox-/veliq-games/games/game-003/index.html'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(response) {
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      }).catch(function() {
        return caches.match('/Logical-Detox-/veliq-games/');
      });
    })
  );
});
