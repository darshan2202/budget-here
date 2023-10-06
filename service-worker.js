importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
      );

workbox.routing.registerRoute(
        ({request}) => request.destination ==='document',
        new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
        ({request}) => ['font','script','style'].includes(request.destination),
        new workbox.strategies.NetworkFirst()
);