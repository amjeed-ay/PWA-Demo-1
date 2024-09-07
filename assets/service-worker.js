const CACHE_NAME = "music-cache-v1";
const assets = [
  "./",
  "../index.html",
  "./style.css",
  "./app.js",
  "./album-photo.jpg",
  "./icon.png",
  "./djab.mp3",
  "./khadija.mp3",
  "./sia.mp3",
];

// Install Service Worker and Cache Assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets");
      return cache.addAll(assets);
    })
  );
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

// Fetch assets from the cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
