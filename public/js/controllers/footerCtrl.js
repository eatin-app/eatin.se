'use strict';

module.exports = ['$scope',
  function ($scope) {
    $scope.items = [
      {
        url: 'login',
        text: 'Logga in'
      },
      {
        url: 'register',
        text: 'Registrera'
      }
    ];
  }
];
