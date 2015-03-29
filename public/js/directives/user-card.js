'use strict';

module.exports = [function () {
  return {
    scope: {
      user: '=user'
    },
    link : function ($scope) {
      if($scope.user && $scope.user.profileImageUrl) {
        $scope.preparedUrl = $scope.user.profileImageUrl.replace(/\{\{size\}\}/, '50x50');
      }
      else if($scope.user && $scope.user.$promise) {
        //## This is retarded
        $scope.user.$promise.then(function () {
          $scope.preparedUrl = $scope.user.profileImageUrl.replace(/\{\{size\}\}/, '50x50');
        });
      }
    },
    templateUrl: 'views/directives/user-card.html'
  };
}];
