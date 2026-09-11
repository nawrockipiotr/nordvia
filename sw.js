/* Czytnik Nordvia — bufor offline.
   Wersja w nazwie pamięci: nowy build unieważnia stary bufor.
   Dokument i dane biorą najpierw sieć, bufor jest awaryjny — poprawiony kejs.json
   dociera do studenta przy pierwszym otwarciu z internetem. */
const WERSJA = '2026-09-11-1';
const C = 'nordvia-' + WERSJA;
const POWLOKA = ['./', './index.html', './manifest.webmanifest', './ikona-192.png', './ikona-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(C)
      .then(c => c.addAll(POWLOKA).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(n => n !== C).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'nordvia-wyczysc') {
    caches.keys().then(k => Promise.all(k.map(n => caches.delete(n))));
  }
});

function zSieci(req) {
  return fetch(req).then(res => {
    if (res && res.ok && req.method === 'GET') {
      const kopia = res.clone();
      caches.open(C).then(c => c.put(req, kopia).catch(() => {}));
    }
    return res;
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  /* Buildy z parametrami (podglądy, cache-bustery) zostawiamy sieci. */
  if (url.search) return;

  const dokument = req.mode === 'navigate' || (req.headers.get('accept') || '').indexOf('text/html') >= 0;
  const dane = /(kejs\.json|dane\.js)$/.test(url.pathname);

  if (dokument || dane) {
    e.respondWith(zSieci(req).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || zSieci(req).catch(() => r)));
});
