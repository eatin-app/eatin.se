'use strict';

var loggedOutItems = [
  {
    url: 'login',
    text: 'Logga in'
  },
  {
    url: 'register',
    text: 'Registrera'
  }
];
var loggedInItems = [
  {
    url: '',
    text: 'Hosts'
  },
  {
    url: 'profile',
    text: 'Profile'
  }
];

module.exports = ['$scope', 'Auth', 'AUTH_EVENTS',
function ($scope, Auth, AUTH_EVENTS) {
  $scope.$on(AUTH_EVENTS.userUpdated, setItems);
  setItems();

  function setItems () {
    $scope.items = Auth.isLoggedIn && loggedInItems || loggedOutItems;
  }
}];
