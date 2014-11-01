'use strict';

module.exports = ['$window', function($window) {
  var store = $window.localStorage;

  return {
    set: function set (key, value) {
      store.setItem(key, JSON.stringify(value));
      return this;
    },
    get: function get (key, fallback) {
      return JSON.parse(store.getItem(key) || JSON.stringify(fallback));
    },
    remove: function remove (key) {
      store.removeItem(key);
      return this;
    }
  };
}];
