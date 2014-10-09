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
      $scope.error = '';

      Auth.login(username, password).success(function loginSuccess () {
        $location.path('/');
      }).error(function loginFail (status, code) {
        // Show error message
        switch(code) {
          case 401:
            $scope.error = 'Wrong username or password';
            break;
          default:
            $scope.error = 'Something wen\'t wrong';
            break;
        }
      });
    };
  }
];
