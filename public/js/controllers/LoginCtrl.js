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
      }).error(function loginFail (data) {
        $scope.error = data.error || 'Something wen\'t wrong';
      });
    };
  }
];
