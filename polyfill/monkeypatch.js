var Storage = require('../dist/ministorage');
var store = new Storage();

module.exports = function (storage) {
  ['setItem', 'getItem', 'removeItem', 'clear'].forEach(function each(item) {
    storage[item] = function apply() {
      return store[item].apply(store, arguments);
    };
  });
};
