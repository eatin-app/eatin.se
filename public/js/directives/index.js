'use strict';

module.exports = 'directives';

var angular = require('angular');
var directives = angular.module(module.exports, []);

directives.directive('userCard', require('./user-card'));
directives.directive('userMap', require('./user-map'));
