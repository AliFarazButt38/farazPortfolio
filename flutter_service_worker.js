'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5e68589ce4b5a594664a38fd811690f0",
"index.html": "04fcc79808a0293dd4447f94690169c8",
"/": "04fcc79808a0293dd4447f94690169c8",
"main.dart.js": "e0aad091308f36efbfb3d4da90a4c194",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "277b54325c1aaeab22f1dc7eeba36934",
".git/config": "402c78411ec3373ba769c0b945962728",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/60/97a9fdad5b0ed73114d643040b108610b6d4d2": "5e64d09cc661fc92863d917e00ca53a8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/bd/2246a8acb0dafe2e5feb121f35424f209dd060": "79ed9a3717d3b7c99f55b113e2000476",
".git/objects/bd/c50e82c7f38ff092a5ecf846825b77f4253fbc": "a793d0d2d7c714ba5fbdc60477805107",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/08288a6c86eed18929734ea96893208a3132cf": "ea3642b73ea3b7d82a8c38f5fa3d1363",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e4/b9ca0a27982b29b66ed69607a1a7a44cbcb269": "63fb7ad624c8404bad47bd04c2261862",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/ec/a8cb0a6694a4f3ca6ed3ad64bd8701986dc863": "fd9da5654f960216b01db0ab0ec9606c",
".git/objects/7c/022acc9c7687ac09b9b8d5c1ff4d8fc5c1a354": "e3c798cf80d6e720005cb3d07691bffd",
".git/objects/42/7c27d2f4da3a7d903c427047d647bf6b749408": "4da68bb8375aca646748fae9770433b7",
".git/objects/80/6c255023fc3c85473a359d8030594ec45b69ac": "550a691c38e0262063fac131526b2763",
".git/objects/1a/d0ef6cf43d8f4626fd91b45dc57e6fdd61ed2c": "fbb928ed7edab789961421c70f8a70d6",
".git/objects/7b/832b6a46ce3a6013da58b204300ae56536bbf4": "b7f9b88224619fdc541756c6fee06dd8",
".git/objects/8a/d2e5ba2c3650ebf1a8e25eecda5c154c1ab023": "ce62f3dbefec60dffb78f9dab7254ddd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/81/5c4845870251f4be2648e6bf78d5265b4ef5b2": "74397dba624a5f00b80149f127b781a2",
".git/objects/81/eaf9419b6071e6e081fc2e710e7c4d8ba657ef": "8eef069f3e62f8b25bd442e1285ea441",
".git/objects/81/e8e89235f66fae25cc2b88a19b058c47392081": "526a4cd541e21def3cf58a821f00d192",
".git/objects/43/8a185dad0c40f23433b31432202e8c6418b818": "18affa394b5a95a93edd068162cff38c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/62/e58f19ea327cc01f39b0543009d97d5766c6b5": "9c4fdc7f598e7e29a1bb77cb25e1cea0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/39/990936c8fe4ed2afe91cd5224ed73816095777": "81ffd8249b138ea868fed86adb5d87f8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/09e71dc142f55409cc065bacaef033bf89362e": "685b04442c10f90d85c561a853e89126",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/ddca0ddbf4afda95c839a1ed434463d5c1c80d": "b5ab4fc01807b23bed840337868118fd",
".git/objects/f1/f14c2e001e4ca1dc654d2e84f6da3e5854b1b8": "2abeeb2b8a5c9d07f9da9fbe3b2b86f0",
".git/objects/46/43149b74d5534dbb59b48b3f68e47112324259": "ae937b5bc4716acaeab27c990987d36a",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/48/2d2b5b546d761b9415fefdd320ac22fc8b0af5": "3a2122ed337b963f303b53f01c076247",
".git/objects/48/c01316cc3e12b59190901fa6972ca5f618f8b7": "248238a45ce9743d74fa536c75343d17",
".git/objects/8c/aa221603f658682c44e3e02446f8ec5920e387": "326e11cd10454ccd836a9e129ce4078e",
".git/objects/49/77028d132b681c035d427748f74afab9fd70bf": "7f99c84bbaa6727b6cddcec7686867ec",
".git/objects/8b/5e0720125946645ffdf1dd343f8d5ad0a007b5": "735b0fdfe3bf4b127c2c643815e4cd31",
".git/objects/22/993b2626d2f751ec48b232a8ca741b0ff034d3": "64f531c12fd9f5fdab64069ebfe4c79a",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3af9024616a8d829abab43466ac9c0cb",
".git/logs/refs/heads/main": "906fb72ce31eda104cc0dc099285ac40",
".git/logs/refs/remotes/origin/main": "6541df578f15eb3bd69f86b75fdf0c83",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "70f1b68a5c69a076167fd0c6e00b915c",
".git/refs/remotes/origin/main": "70f1b68a5c69a076167fd0c6e00b915c",
".git/index": "a0f3c2505c9a18b9d43cca7ab5f2ec7c",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/images/showcase_5.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/showcase_4.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/showcase_6.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/Dashboard.png": "959fd50f989e392bec31bd49317eccc3",
"assets/images/Home.svg": "069a97377898cd185f7836a260ed6842",
"assets/images/showcase_3.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/showcase_3.png": "b35383842cc9888cc09ba9d5ed440682",
"assets/images/showcase_2.png": "c211fff085f4a87466b61bc3f9cc3557",
"assets/images/showcase_2.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/showcase_1.png": "07e91b8d4a0f41164ce7405128e1ce80",
"assets/images/showcase_1.jpg": "411984b81b7e280caa2ba5c0ae84c7ce",
"assets/images/Explore%2520Investment.svg": "40c579e6ffafbc504ec500cc0be200df",
"assets/images/Untitled%2520design.png": "3b971aa37a80a0e463627b71670a6e07",
"assets/images/profile.jpg": "4ea9a886c504ad83978df7d900ed47c6",
"assets/images/kbook.png": "869b393e3341b2df93c1537fb3102422",
"assets/images/KBook1.jpg": "311ddb624f4896bb7fee53edee3ae2c2",
"assets/images/babar_ali_profile_pic.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "f583557d32c2283a87283c7cdd27cf63",
"assets/NOTICES": "4e0104479055e894f547b0f537044ca7",
"assets/FontManifest.json": "2d4debca7a881ad14aa65cffc0ac3cdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d7e085fdfb4053d55a38013ea310c718",
"assets/fonts/UbuntuMono-Regular.ttf": "c8ca9c5cab2861cf95fc328900e6f1a3",
"assets/fonts/MaterialIcons-Regular.otf": "a1c599019a8e63ec27d1eec1dffbaac0",
"assets/fonts/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
