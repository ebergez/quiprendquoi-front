addEventListener("install", () => {
  event.waitUntil(
    caches.open("offline").then(cache => {
      cache.add("offline.html");
    })
  );
});

addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match("offline.html"))
  );
});
