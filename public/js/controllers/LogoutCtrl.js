'use strict';

module.exports = ['Auth', '$location',
function (Auth, $location) {
  Auth.logout().finally(function () {
    $location.path('/');
  });
}];
