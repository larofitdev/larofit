const CACHE_NAME = 'larofit-v1';

const STATIC_ASSETS = [
  '/larofit-dashboard.html',
  '/larofit-today.html',
  '/larofit-builder.html',
  '/larofit-library.html',
  '/larofit-progress.html',
  '/larofit-measurements.html',
  '/larofit-diet.html',
  '/larofit-programs.html',
  '/larofit-profile.html',
  '/larofit-ai-coach.html',
  '/larofit-congrats.html',
  '/larofit-group.html',
  '/larofit-find-trainer.html',
  '/larofit-home.html',
  '/larofit-signup.html',
  '/larofit-trainer.html',
  '/larofit-trainer-builder.html',
  '/larofit-trainer-diet.html',
  '/larofit-trainer-library.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png'
];

// Install — cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — clear old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', event => {
  // Skip non-GET and cross-origin requests
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache fresh copy on successful network fetch
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Network failed — serve from cache
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Fallback to dashboard if page not in cache
          return caches.match('/larofit-dashboard.html');
        });
      })
  );
});
