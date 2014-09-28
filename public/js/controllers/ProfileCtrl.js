'use strict';

var angular = require('angular');

module.exports = ['$scope', 'Auth', 'User',
function ($scope, Auth, User) {
  $scope.user = Auth.user;
  $scope.editable = true;

  $scope.edit = function edit () {
    $scope.editedUser = new User($scope.user);
    $scope.editing = true;
  };

  $scope.cancel = function cancel () {
    $scope.editing = false;
  };

  $scope.save = function save (newUser) {
    $scope.error = '';

    newUser.$save().then(function saveSuccess () {
      angular.extend($scope.user, newUser);
      $scope.editing = false;
    }, function saveFail () {
      $scope.error = 'Save failed';
    });
  };
}];
