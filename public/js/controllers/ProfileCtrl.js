'use strict';

module.exports = ['$rootScope', '$scope', 'Auth', 'User', 'AUTH_EVENTS',
function ($rootScope, $scope, Auth, User, AUTH_EVENTS) {
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
      //## Fetch stored user instead of using the local one?
      $scope.user = newUser;
      $scope.editing = false;
      $rootScope.$broadcast(AUTH_EVENTS.userUpdated, newUser);
    }, function saveFail () {
      $scope.error = 'Save failed';
    });
  };
}];
