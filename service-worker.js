const CACHE_NAME = 'ruangobat-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/pages/farmakologi-dasar.html',
  '/pages/bentuk-penggunaan.html',
  '/pages/bahan-herbal.html',
  '/pages/farmakope.html',
  '/pages/farmakognosi.html',
  '/pages/pustaka.html',
  '/pages/istilah.html',
  '/pages/studi-kasus.html',
  '/pages/flashcard.html',
  '/pages/bookmarks.html',
  '/pages/tentang.html',
  '/pages/privasi.html',
  '/pages/aksesibilitas.html',
  '/404.html',
  '/data/materi.json',
  '/data/istilah.json',
  '/assets/images/hero-background.webp',
  '/assets/images/logo-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});