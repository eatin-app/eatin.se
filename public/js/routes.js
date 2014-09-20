'use strict';

module.exports = ['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/index.html',
        controller: 'UsersCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
];
