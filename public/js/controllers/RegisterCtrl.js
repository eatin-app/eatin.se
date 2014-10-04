'use strict';

module.exports = ['$scope', 'Auth',
function ($scope, Auth) {
  $scope.user = {};
  $scope.error = '';
  $scope.success = '';

  $scope.onSubmit = function onSubmit (user) {
    $scope.error = '';
    $scope.success = '';

    if(user.password !== user.confirmPassword) {
      $scope.error = 'Confirmed password is not equal to the password';
      return;
    }

    Auth.register(user).then(function () {
      $scope.success = 'Follow the link in the email to verify that it belongs to you';
    }, function () {
      $scope.error = 'Something went wrong';
    });
  };
}];
