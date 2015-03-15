'use strict';

var loggedOutItems = [
  {
    url: '/login',
    text: 'Logga in',
    icon: 'account-login'
  },
  {
    url: '/register',
    text: 'Registrera',
    icon: 'clipboard'
  }
];
var loggedInItems = [
  {
    url: '/',
    text: 'Hosts',
    icon: 'list'
  },
  {
    url: '/profile',
    text: 'Profil',
    icon: 'person'
  },
  {
    url: '/bookings',
    text: 'Bookings',
    icon: 'calendar'
  },
  {
    url: '/requests',
    text: 'Förfrågningar',
    icon: 'question-mark'
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
