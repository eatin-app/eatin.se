'use strict';

module.exports = ['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'UsersCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/host/:id', {
        templateUrl: 'views/host.html',
        controller: 'HostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
];
