'use strict';

module.exports = 'filters';

var angular = require('angular');
var filters = angular.module(module.exports, []);

filters.filter('excerpt', require('./ExcerptFilter'));
filters.filter('longdate', require('./longdate'));
