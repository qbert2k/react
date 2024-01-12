# Frontend MERN - Calendar

````shell
npm install
npm run build
````

## Run PWA

Install serve

````shell
npm install --global serve
serve --version
````

Run

````shell
serve -s build
````

## Making a Progressive Web App

````shell
npx create-react-app my-app --template cra-template-pwa
````

## Workbox

```shell
npm install workbox-cli --global
workbox --version
```

```shell
workbox wizard

workbox generateSW workbox-config.js
```

```shell
workbox injectManifest
```

## Run

```shell
npm run build
serve -s build

npm run build && serve -s build
```

## Links

- https://create-react-app.dev/docs/making-a-progressive-web-app/
- https://web.dev/articles/service-worker-lifecycle?hl=es
- https://developer.chrome.com/docs/workbox/
- https://developer.chrome.com/docs/workbox/modules/workbox-cli
- https://developer.chrome.com/docs/workbox/modules/workbox-sw
- https://developer.chrome.com/docs/workbox/modules/workbox-background-sync
- https://www.npmjs.com/package/react-detect-offline