'use strict';

module.exports = 'controllers';

var angular = require('angular');
var controllers = angular.module(module.exports, []);

controllers.controller('BookingCtrl', require('./BookingCtrl'));
controllers.controller('BookinsCtrl', require('./BookinsCtrl'));
controllers.controller('BookoutsCtrl', require('./BookoutsCtrl'));
controllers.controller('ConfirmCtrl', require('./ConfirmCtrl'));
controllers.controller('HostCtrl', require('./HostCtrl'));
controllers.controller('LoginCtrl', require('./LoginCtrl'));
controllers.controller('LogoutCtrl', require('./LogoutCtrl'));
controllers.controller('NavigationCtrl', require('./NavigationCtrl'));
controllers.controller('ProfileCtrl', require('./ProfileCtrl'));
controllers.controller('RegisterCtrl', require('./RegisterCtrl'));
controllers.controller('RequestsCtrl', require('./RequestsCtrl'));
controllers.controller('UsersCtrl', require('./UsersCtrl'));
