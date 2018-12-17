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