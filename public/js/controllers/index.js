'use strict';

module.exports = 'readerControllers';

var angular = require('angular');
var controllers = angular.module(module.exports, []);

controllers.controller('UsersCtrl', require('./UsersCtrl'));
