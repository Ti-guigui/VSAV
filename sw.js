/* Service worker : pré-cache complet → l'application fonctionne hors ligne. */
const CACHE = 'pulsar-vsav-v2';
const ASSETS = [
  "./",
  "./css/app.css",
  "./icon.svg",
  "./img/fiches/boa-extraction-1.jpg",
  "./img/fiches/boa-extraction-2.jpg",
  "./img/fiches/boa-pose.jpg",
  "./img/fiches/hemorragie-logigramme.jpg",
  "./img/fiches/nouveau-ne-logigramme.jpg",
  "./img/fiches/pelvienne.jpg",
  "./img/fiches/rachis-criteres.jpg",
  "./img/fiches/sr-logigramme.jpg",
  "./img/fiches/wallace.jpg",
  "./img/fiches/xabcde.jpg",
  "./img/fiches/xcollar.jpg",
  "./index.html",
  "./js/app.js",
  "./js/data/essentiel.js",
  "./js/data/foad.js",
  "./js/data/partie1.js",
  "./js/data/partie2.js",
  "./js/data/partie3.js",
  "./js/data/parts.js",
  "./js/data/socle.js",
  "./js/data/tutorat.js",
  "./js/svg.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(ASSETS.map((u) => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // cache d'abord (hors ligne), mise à jour en arrière-plan
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => {
    const net = fetch(req).then((res) => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); } return res; }).catch(() => hit || caches.match('./index.html'));
    return hit || net;
  }));
});
