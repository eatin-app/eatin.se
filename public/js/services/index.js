'use strict';

module.exports = 'readerServices';

var angular = require('angular');
var services = angular.module(module.exports, ['ngResource']);

services.factory('User', require('./User'));
