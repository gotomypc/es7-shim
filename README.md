#es7-shim <sup>[![Version Badge][2]][1]</sup>

[![npm badge][9]][1]

[![Build Status][3]][4] [![dependency status][5]][6]  [![dev dependency status][7]][8]

ECMAScript 7 compatibility shims for legacy JavaScript engines.

`es7-shim.js` exports an object that contains shims that can be used to monkeypatch a JavaScript context to contain all ECMAScript 7 methods that can be faithfully emulated with a legacy JavaScript engine.
`es7-shim.browser.js` calls the “shim” method on the export of `es7-shim.js` which actually modifies the global object, including replacing native methods when engine-specific bugs exist.
Published on npm are `dist/es7-shim.js` and `dist/es7-shim.min.js` which are pre-prepared browserified versions of `es7-shim.browser.js`.

## Source for shims
Every shim in this module is a separate, independent `npm` module.
To be included, all shims must have a ".shim()" method that installs the shim into the global object whenever it is necessary. It should also handle any engine-specific specific to the method it is shimming.

## Tests
Simply clone the repo, `npm install`, and run `npm test`

## Shims

`Array.prototype`:
 * `includes` [standalone][npm-includes-url]

`Object`:
 * `getOwnPropertyDescriptors` [standalone][npm-get-descriptors-url]

## Shams

* :warning: None yet!

[1]: https://npmjs.org/package/es7-shim
[2]: http://vb.teelaun.ch/es-shims/es7-shim.svg
[3]: https://travis-ci.org/es-shims/es7-shim.svg
[4]: https://travis-ci.org/es-shims/es7-shim
[5]: https://david-dm.org/es-shims/es7-shim.png
[6]: https://david-dm.org/es-shims/es7-shim
[7]: https://david-dm.org/es-shims/es7-shim/dev-status.png
[8]: https://david-dm.org/es-shims/es7-shim#info=devDependencies
[9]: https://nodei.co/npm/es7-shim.png?downloads=true&stars=true
[npm-includes-url]: https://www.npmjs.com/package/array-includes
[npm-get-descriptors-url]: https://www.npmjs.com/package/object.getownpropertydescriptors

