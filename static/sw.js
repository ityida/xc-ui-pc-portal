importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "xc-portal",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.9d26d9a7446b0f72a158.js",
    "revision": "d08d6bd705f6730f84c3a4744291f181"
  },
  {
    "url": "/_nuxt/layouts_default.6fb856b21e680607ab78.js",
    "revision": "8ec41e687e1331a6dec31e9746bfcaaa"
  },
  {
    "url": "/_nuxt/layouts_default1.d4ce03a1a33993ad5685.js",
    "revision": "9bd7230d15cab5ebdf1fbd53b1ababf4"
  },
  {
    "url": "/_nuxt/layouts_empty-page.af010ee98c67e59d4b06.js",
    "revision": "27698d775bb1d9768a77ca5a360f3a65"
  },
  {
    "url": "/_nuxt/layouts_test.4895965af245c2033dea.js",
    "revision": "3709c72f4861067cd29ad7dd970bffb2"
  },
  {
    "url": "/_nuxt/manifest.5d912eece50c93e6da19.js",
    "revision": "7bcdcc120a69457f716601dcfa257a74"
  },
  {
    "url": "/_nuxt/pages_about.b3cc3dd5482389ddef98.js",
    "revision": "5fb9b0bc7b3164d76a3e61898d73d767"
  },
  {
    "url": "/_nuxt/pages_course_search_index.88f20f8f2758160bcd25.js",
    "revision": "21435c2d2c61625395a4404f2579f209"
  },
  {
    "url": "/_nuxt/pages_user_index.723239b89d2c3fd9a893.js",
    "revision": "1168ec737476e8ea26bb8d3156710728"
  },
  {
    "url": "/_nuxt/vendor.ccc383c853df53a0b76d.js",
    "revision": "ceaefb19b9f7c8773b6db62554002c3e"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

