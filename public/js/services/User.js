'use strict';

//var config = require('../config');

module.exports = ['$resource', function ($resource) {
  return $resource('testdata/users.json');
}];
