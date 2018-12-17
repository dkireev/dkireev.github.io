var cacheName = 'CSv1';

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
  event.waitUntil (
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(cachedFiles);
    }).then(function() {
      return self.skipWaiting();
    }).catch(function(error) {
      console.log("Cache failed", error);
    })
  );
});