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
  console.log('Service Worker install event');
  event.waitUntil (
    caches.open(cacheName).then(function(cache) {
      console.log('Caching files');
      return chache.addAll(cachedFiles);
    }).then(finction() {
      return self.skipWaiting();
    }).catch(finction(error) {
      console.log("Cache failed", error);
    })
  );
});