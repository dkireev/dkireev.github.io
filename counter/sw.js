var cacheName = 'CSv2';

var cachedFiles = [
    '/',
    'index.html',
    'manifest.json',
    'script.js',
    'style.css',
    'settings.png',
    'edit.png',
    'close.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(cachedFiles);
        }).then(function() {
            return self.skipWaiting();
        }).catch(function(error) {
            console.log("Cache failed", error);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('Fetch event occured ' + event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
    );
});