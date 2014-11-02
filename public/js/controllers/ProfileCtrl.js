'use strict';

module.exports = ['$rootScope', '$scope', '$route', 'Auth', 'User', 'AUTH_EVENTS', '$upload',
function ($rootScope, $scope, $route, Auth, User, AUTH_EVENTS, $upload) {
  $scope.user = Auth.user;
  $scope.editable = true;
  $scope.canSeeAddress = true;
  $scope.canSeeEmail = true;
  $scope.canSeePhone = true;
  $scope.canLogout = true;
  $scope.editedUser = new User($scope.user);

  $scope.edit = function edit () {
    $scope.editing = true;
  };

  $scope.cancel = function cancel () {
    $scope.editing = false;
  };

  $scope.save = function save (newUser) {
    $scope.error = '';

    newUser.$save().then(function saveSuccess () {
      Auth.updateUserData().then($route.reload);
    }, function saveFail () {
      $scope.error = 'Save failed';
    });
  };

  $scope.onFileSelect = function ($files) {
    //## Show spinner
    $scope.upload = $upload.upload({
      url: Auth.getProfileImageUrl(),
      file: $files
    }).success(function () {
      //## Handle error?
      Auth.updateUserData().then($route.reload);
    });
  };
}];
