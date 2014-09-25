'use strict';

module.exports = ['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'UsersCtrl'
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
