const CACHE_NAME = 'larofit-v3';

const STATIC_ASSETS = [
  '/index.html',
  '/workout.html',
  '/programs.html',
  '/builder.html',
  '/progress.html',
  '/measurements.html',
  '/profile.html',
  '/signup.html',
  '/onboarding.html',
  '/login.html',
  '/larofit.css',
  '/larofit-nav.js',
  '/larofit-exercises.js',
  '/supabase-client.js',
  '/supabase.min.js',
  '/manifest.json',
  '/sw.js',
  '/icon192.png',
  '/icon512.png',
  '/appletouchicon.png'
];

// Install — cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
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
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then(cached => cached || caches.match('/index.html'))
      )
  );
});
