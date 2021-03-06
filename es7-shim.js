/*!
 * https://github.com/es-shims/es7-shim
 * @license es7-shim Copyright 2014 by contributors, MIT License
 * see https://github.com/es-shims/es7-shim/blob/master/LICENSE
 */

var $Array = require('./Array');
var $Object = require('./Object');

module.exports = {
	Array: $Array,
	Object: $Object,
	shim: function shimES7() {
		$Array.shim();
		$Object.shim();
	}
};
