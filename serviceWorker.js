const staticTCH = "TCH-PWA-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/sidenav_menu.css",
    "/js/myscript.js",
    "/images/3glass.png",
    "/images/announce.png",
    "/images/bottlegreen.png",
    "/images/cafesua.JPG",
    "/images/cafesuatrungmuoi.JPG",
    "/images/coldbrewcamvang.JPG",
    "/images/coldbrewphucbontu.JPG",
    "/images/tradaocamsa.JPG",
    "/images/tradenmachiato.JPG",
    "/images/tralaisentrungmuoi.JPG",
    "/images/trasuakhoaimon.JPG",
    "/images/trasuamacatct.JPG",
    "/images/whitebubble.png",
    "/images/caramel.png",
    "/images/logoTCH.png",
    "/images/store.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticTCH).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})

