addEventListener("install", () => {
  console.log("Hello from the service worker");
});

addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
