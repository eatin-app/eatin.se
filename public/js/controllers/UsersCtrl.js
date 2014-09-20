'use strict';

module.exports = ['$scope', '$http', 'User',
  function ($scope, $http, User) {
    $scope.hosts = User.query({
      host: true
    });
  }
];
