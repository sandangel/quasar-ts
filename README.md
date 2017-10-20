# Quasar PWA App with Typescipt support

> Develope Quasar PWA App with Typescript with webpack auto compress to gzip and Lighthouse score > 90%

## Webpack plugin:
This repo is base on quasar init pwa template plus some webpack plugins:

1/ prerender-spa-plugin
2/ compression-webpack-plugin
3/ preload-webpack-plugin

## Dev server
There is a dev server in build/server.js which is configured to serve gzip file for testing with Lighthouse.

## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:8081
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint

# serve from disk
$ yarn serve:prod
```

<div align="center">
  <img width="100%" height="auto"
    src="https://github.com/sandangel/quasar-ts/blob/master/lighthouse.png">
  <h1>PWA with Quasar and TS</h1>
</div>
