'use strict';

module.exports = 'services';

var angular = require('angular');
var services = angular.module(module.exports, ['ngResource']);

services.factory('Auth', require('./Auth'));
services.factory('Booking', require('./Booking'));
services.factory('SessionStorage', require('./SessionStorage'));
services.factory('User', require('./User'));
