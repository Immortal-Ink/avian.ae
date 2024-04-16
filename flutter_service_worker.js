'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7f097a0f66f2ba80267348362d735a40",
".git/config": "52f751022c964dea301d8a63fb59cc5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6b90f2e3207ebe8ee61c1199a468537a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15eb7cbb1537447787d7271cb74de7c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9eb230624f1548e983c08ca3e182cbd9",
".git/logs/refs/heads/main": "9eb230624f1548e983c08ca3e182cbd9",
".git/logs/refs/remotes/origin/HEAD": "2d7a3123beeaa8e03c66c108c6806780",
".git/logs/refs/remotes/origin/main": "2c11c55c39ea05d45cf463ddaedaaf65",
".git/objects/02/5203c298d43a885a1f18c020ceec504fce68d1": "f1cf464677ecb7e39eaf38634e51e6f5",
".git/objects/21/8125c0094f0c39e75aa5d8686a71b43f474898": "25b7f82353d4a04de68efd960bedc5ce",
".git/objects/28/477e9f49746f5acfbfb457d673b7e9216877b7": "4a7123298c39f13088b4e5d57a382a6e",
".git/objects/38/aceeba770fa235e105752426cf8a119030b144": "c56f6372c0e038e3059000516a07b700",
".git/objects/3a/0f4b7395f05a319d350ba24ff05ce8bfe140d0": "aa069ba077dce136d133897ae51ea9e0",
".git/objects/3f/7d3c0cad7e42a08762914cb707e95fc9289884": "5789e70d39bddb6d9176f3ef5d826ec3",
".git/objects/47/3ffeabeaeee5819daf643e373ea8976c8fbfef": "622ed500422f35734688b16747206ce9",
".git/objects/47/bce618aac10fc0826a064b658548b9877b7302": "f343db00678b65bb98e5542fe12e3c64",
".git/objects/4a/60a8175056ce2ebbe67b60fd022f749130881f": "ab919c701ad71fbc549bf91cb3dc670a",
".git/objects/52/7de8a01667d187f24d2b5d7abdf4760b0b4032": "32f7a553485201879d035e68e95023a9",
".git/objects/55/028bd38ea6fc9756d53b9b6a944510617f9911": "4581bb40abe9f765069b272dff1525ab",
".git/objects/57/2c9bda6daa526c6a996536ffc9d70cbe08ae6e": "b8cdc11a7720b403267f8f0045df3eb2",
".git/objects/72/3d878727de19fe5ce79722afe4af0933e689b7": "2dead870082bca6c443f7bd20ecbd5ef",
".git/objects/7d/dbafb5f907c5dc61892e95df838688ab3be32f": "7f7aa2f92443ea1b6640906f067f7283",
".git/objects/7f/bd8e1e1ce416676f8ed265a2586b09d34da162": "f5017cd1d9d98cfd5efc160ac7972f13",
".git/objects/81/a8663a5cdd3305fc3b12e5b3e19623301cbe20": "8b772b56549e5c08179703be24034f78",
".git/objects/95/2f1129aa4ce75bbfe3eafde65243dc7e2893c3": "57917f7b15d533bd1d3c8372f2bf27d6",
".git/objects/a8/ea710a32947ea0567eab0c662d01dd14d5df13": "c029eb5a6cea8dd70f4c7c8d4411ed5d",
".git/objects/a9/d8fb58f37d50682b01d622184969d93a590a99": "10833ed0955d496d6ac3168539219f70",
".git/objects/af/b0670cbb885d1469154e705c6baf431ba87c92": "0f2b50bbd42c2a4a274b31c8ac5a673f",
".git/objects/b0/f5570e613341934dea70a2b0747b62e1c619ee": "be09ca6c6f7d3dfb1cc1f72e9fc4d5e7",
".git/objects/b2/f29f7634e94e129e2595a0ca2bf051ce16eb1c": "289338149b84c65a4078deb1bc0e5d29",
".git/objects/b4/277d63a1dda7b922b0b4ffbd3e03e8ea844356": "60ac9b561ee2f9da9ae4f1dd65ebf7bf",
".git/objects/b5/c30121cfb448fdb3487d6c229cfe3ff3453b4d": "c7d05be79c4f19dbca7a093491966f40",
".git/objects/c4/e9955e40c7d80516d80c08c90976a2afbbb365": "8f182b6a4bf199ba62ee76a54a385752",
".git/objects/cc/9b81fae0e9c2360b263f271f1a3db15101bee7": "fc22c88b0710da3b875f471c9dc5560b",
".git/objects/d8/e5c3113663aa9400f8a9668756e3c6534f7ac1": "e88c6af1f17dee6fb91a32ddb7f6aad2",
".git/objects/e3/234232a68f6259786635b86ec493cce7aace0c": "5d6df9ec70ac727d1cfbdf0f3e4127c0",
".git/objects/e5/028fd48ad939d561add385ab1c4f5cc9d31930": "15f663973a7b40fe4879af6e5dd338bf",
".git/objects/e6/15661d34307f158410eee702ea631243abf013": "7aaf3b6779444f632e2c904ec4e78598",
".git/objects/ef/86475f4d102bbc85d41764b7c86464623f46a1": "24510ae92d8faeaacaa531adc7ea8e2b",
".git/objects/ff/e427d2a2fbd6d875b19186204be5feb295a47f": "b54c873ccd51083115d781ae30df53cc",
".git/objects/pack/pack-51283c962d07bfaa67252732b1ee7d8b33b0972a.idx": "3855395b62b18ded8624bec8d48fecad",
".git/objects/pack/pack-51283c962d07bfaa67252732b1ee7d8b33b0972a.pack": "25aefdc01a1532f8b0aea8c9cd5bf71d",
".git/objects/pack/pack-51283c962d07bfaa67252732b1ee7d8b33b0972a.rev": "2529ab3f731b503792d149a0312e21f5",
".git/ORIG_HEAD": "eefac66f3d95b0fb0436ac67f26ffac2",
".git/packed-refs": "e9aa27795bc20b3592eccbe04564dddd",
".git/refs/heads/main": "936973515eac3f500f4867249d0f50cc",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "936973515eac3f500f4867249d0f50cc",
"assets/AssetManifest.bin": "0014f589cd7b33afdfeccf4fbb70ab4f",
"assets/AssetManifest.bin.json": "825ba3398075563763da404635a28f76",
"assets/AssetManifest.json": "13ee375411081fa0fd99fc280aa291e8",
"assets/assets/assets.zip": "902be72c058be9fd6d46e7e54ff1d46c",
"assets/font/font.ttf": "b10d4926030980795c744349562a93fa",
"assets/FontManifest.json": "fbc77c519462b753bafbabd6da444168",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "43df597cf8026cbc7159f0b0d795af6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "98d9b2be71cdb82f9cfa0d898d0def72",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2baf47a4c775f9129bf8ba76b8ac0bb2",
"/": "2baf47a4c775f9129bf8ba76b8ac0bb2",
"main.dart.js": "9a66f7d1d43e630cdc40a09763590526",
"manifest.json": "7cbaa3e9b10d46d4b73ca30fd90a60c5",
"version.json": "d0e443ee86167bb1c025a530c168201b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
