var bind = require('../../function-bind/index.js');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
