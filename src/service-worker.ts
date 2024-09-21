/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

console.log({build, files, version})



const CACHE_NAME = `period-tracker-${version}`;
const ASSETS =[
    ...build,
    ...files
]

// const APP_STATIC_RESOURCES = [
//     "http://127.0.0.1:5173",
//     // "/index.html",
//     "/src/app.css",
//     "cycletracker.json",
//     "icons/wheel.svg",
//     "icons/tire.svg",
//     "icons/circle.svg",
// ];

self.addEventListener("install", (event) => {
    async function addFilesTouches() {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(ASSETS);
    }

    event.waitUntil(addFilesTouches())
});


self.addEventListener('activate', event =>{
    async  function deleteOldCaches () {
        for ( const key of await caches.keys()){
            if(key !== CACHE_NAME ){
                await caches.delete(key)
            }
        }
    }

    event.waitUntil(deleteOldCaches())
})


self.addEventListener('fetch', event =>{
    if (event.request.method !== 'GET') return

    async function respond(){
            const url = new URL(event.request.url)
            const cache = await caches.open(CACHE_NAME)

            //serve build files fromm the cache
            if(ASSETS.includes(url.pathname)){
                const cachedResponse = await cache.match(url.pathname)
                if (cachedResponse) {
                    return cachedResponse
                }
            }

            try {
                const response = await fetch(event.request)

                const isNotExtension = url.protocol === 'http:'
                const isSuccess = response.status === 200

                if (isNotExtension && isSuccess) {
                    cache.put(event.request, response.clone())
                }

                return response
            } catch {
                //fall back to cache
                const cachedResponse = await cache.match(url.pathname)
                if (cachedResponse) {
                    return cachedResponse
                }
            }

            return new Response('not found', {status: 404})
    }
    
 event.respondWith(respond())
})


self.addEventListener('message', (event)=>{
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting()
    }
})
