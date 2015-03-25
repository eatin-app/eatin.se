'use strict';

module.exports = [function () {
  return {
    scope: {
      user: '=user'
    },
    controller: function ($scope) {
      $scope.user.profileImageUrl = $scope.user.profileImageUrl.replace(/\{\{size\}\}/, '50x50');
    },
    templateUrl: 'views/directives/user-card.html'
  };
}];
