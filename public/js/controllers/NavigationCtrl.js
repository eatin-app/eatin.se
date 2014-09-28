'use strict';

var loggedOutItems = [
  {
    url: '/login',
    text: 'Logga in'
  },
  {
    url: '/register',
    text: 'Registrera'
  }
];
var loggedInItems = [
  {
    url: '/',
    text: 'Hosts'
  },
  {
    url: '/profile',
    text: 'Profil'
  },
  {
    url: '/logout',
    text: 'Logga ut'
  }
];

module.exports = ['$scope', '$location', 'Auth', 'AUTH_EVENTS',
function ($scope, $location, Auth, AUTH_EVENTS) {
  $scope.isActive = function isActive (viewPath) {
    return viewPath === $location.path();
  };

  $scope.$on(AUTH_EVENTS.userUpdated, setItems);
  setItems();

  function setItems () {
    $scope.items = Auth.isLoggedIn && loggedInItems || loggedOutItems;
  }
}];
