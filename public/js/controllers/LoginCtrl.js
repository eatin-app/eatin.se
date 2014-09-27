'use strict';

module.exports = ['$scope', 'Auth', '$location',
  function ($scope, Auth, $location) {
    $scope.username = '';
    $scope.password = '';
    $scope.error = '';

    if(Auth.isLoggedIn) {
      $location.path('/');
    }

    $scope.login = function (username, password) {
      Auth.login(username, password).then(function loginSuccess () {
        $scope.error = '';
        $location.path('/');
      }, function loginFail () {
        // Show error message
        $scope.error = 'Du har skrivit fel!';
      });
    };
  }
];
