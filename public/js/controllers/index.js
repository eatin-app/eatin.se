'use strict';

module.exports = 'readerControllers';

var angular = require('angular');
var controllers = angular.module(module.exports, []);

controllers.controller('UsersCtrl', require('./UsersCtrl'));
controllers.controller('HostCtrl', require('./HostCtrl'));
controllers.controller('LoginCtrl', require('./LoginCtrl'));
controllers.controller('footerMenuCtrl', require('./footerCtrl'));
