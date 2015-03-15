'use strict';

module.exports = ['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'UsersCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl'
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
      .when('/bookings', {
        templateUrl: 'views/bookings.html',
        controller: 'BookingsCtrl'
      })
      .when('/requests', {
        templateUrl: 'views/bookings.html',
        controller: 'RequestsCtrl'
      })
      .when('/booking/:id', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
];
