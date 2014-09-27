'use strict';

module.exports = ['$scope', 'Auth',
  function ($scope, Auth) {
    $scope.username = '';
    $scope.password = '';

    $scope.login = function (username, password) {
      Auth.login(username, password);
    };
  }
];
