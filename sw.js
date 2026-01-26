const CACHE_NAME = 'blend-builder-v2';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './data/ingredientes.js',
    './data/productos.js',
    './images/logo.jpg'
];

// Instalación del service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch con cache-first strategy
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
