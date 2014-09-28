'use strict';

module.exports = ['$scope', '$http', '$routeParams', 'User',
  function ($scope, $http, $routeParams, User) {
    $scope.user = User.get({
      id: $routeParams.id
    });
  }
];
