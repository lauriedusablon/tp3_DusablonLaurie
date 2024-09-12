//update cache names any time of the cached files change
const CACHE_NAME = 'static-cache-v1';
//add list of files to cache here
const FILES_TO_CACHE = [
    'index.html',
    'blogue.html',
    'tarte.html',
    'validationJs.js',
    'tailwind.config.js',
];

//INSTALLATION
self.addEventListener('install', (evt) => { 
    console.log('[ServiceWorker] Install'); 
    // Precache static resources here. 
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => { 
            console.log('[ServiceWorker] Pre-caching offline page'); 
            return cache.addAll(FILES_TO_CACHE);
        }) 
    );
    self.skipWaiting(); 
});

//ACTIVATION
self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    //remove prevuiys cached data from disk
    self.clients.claim();
});

//ACCÈS À UNE RESSOURCE
self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    //add fetch event handler
});
self.addEventListener('fetch', (evt) => { console.log('[ServiceWorker] Fetch', evt.request.url); //Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
        return;
    } 
    evt.respondWith(
        fetch(evt.request) // on tente de récuperer la ressource
        .catch(() => {
            return caches.open(CACHE_NAME) //si echec, on renvoie la page offline
                .then((cache) => {
                    return cache.match('/Cochenille/PointNClick/offline.html'); 
                });
        })

    );
});