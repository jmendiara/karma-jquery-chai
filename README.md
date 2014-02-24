karma-jquery-chai
=================


[Chai](http://chaijs.com) + [Jquery](https://github.com/jquery/jquery) + [chai-jquery](https://github.com/chaijs/chai-jquery) for [Karma](http://karma-runner.github.io)

*What makes this plugin different from `karma-chai-jquery`?*
* It uses (and will always use) the latest compatible versions of every library.
* It uses `peerDependencies` only.
* No `bower` dependency.

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-jquery-chai --save-dev
```

Add `jquery-chai` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    // frameworks to use
    frameworks: ['mocha', 'jquery-chai']

    // ...
```

It can coexist with others plugins based on peerDependencies without any trouble. Wanna have the magic combo of `sinon` + `chai` + `sinon-chai` + `jquery` + `chai-jquery`?

install [karma-chai-sinon](https://github.com/tubalmartin/karma-chai-sinon) and add it as a framework
```bash
$ npm install karma-chai-sinon --save-dev
```


```js
module.exports = function(config) {
  config.set({

    // frameworks to use
    frameworks: ['mocha',  'chai-sinon', 'jquery-chai']

    // ...
```
---
Thanks to [Túbal Martín](https://github.com/tubalmartin) for the inspiration of this plugin and the Very Obvious C&P of his README.md

MIT Licensed
