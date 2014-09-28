'use strict';

module.exports = 'controllers';

var angular = require('angular');
var controllers = angular.module(module.exports, []);

controllers.controller('HostCtrl', require('./HostCtrl'));
controllers.controller('LoginCtrl', require('./LoginCtrl'));
controllers.controller('LogoutCtrl', require('./LogoutCtrl'));
controllers.controller('NavigationCtrl', require('./NavigationCtrl'));
controllers.controller('ProfileCtrl', require('./ProfileCtrl'));
controllers.controller('UsersCtrl', require('./UsersCtrl'));
