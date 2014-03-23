/**
 * Singleton for Component Emitter
 * (https://github.com/component/emitter)
 *
 * It allow to share messages between features
 */

var Emitter = require('component-emitter');
module.exports = new Emitter();
