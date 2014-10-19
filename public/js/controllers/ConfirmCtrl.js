'use strict';

module.exports = ['Auth', '$location', '$scope',
function (Auth, $location, $scope) {
  Auth.confirm($location.search().token).then(function () {
    $location.url('/');
  }, function () {
    $scope.error = 'Something went wrong';
  });
}];
