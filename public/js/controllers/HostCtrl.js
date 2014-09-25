'use strict';

module.exports = ['$scope', '$http', '$routeParams', 'User',
  function ($scope, $http, $routeParams, User) {
    $scope.host = User.get({
      id: $routeParams.id
    });
  }
];
