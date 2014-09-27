'use strict';

module.exports = ['$window', function($window) {
  return {
    set: function save (key, value) {
      $window.sessionStorage[key] = JSON.stringify(value);
      return this;
    },
    get: function (key, fallback) {
      return JSON.parse($window.sessionStorage[key] || JSON.stringify(fallback));
    },
    remove: function remove (key) {
      delete $window.sessionStorage[key];
      return this;
    }
  };
}];
