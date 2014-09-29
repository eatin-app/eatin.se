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
      .when('/logout', {
        resolve: {
          redirect: require('./controllers/LogoutCtrl')
        }
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/host/:id', {
        templateUrl: 'views/profile.html',
        controller: 'HostCtrl'
      })
      .when('/bookins', {
        templateUrl: 'views/bookings.html',
        controller: 'BookinsCtrl'
      })
      .when('/bookouts', {
        templateUrl: 'views/bookings.html',
        controller: 'BookoutsCtrl'
      })
      .when('/requests', {
        templateUrl: 'views/bookings.html',
        controller: 'RequestsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
];
