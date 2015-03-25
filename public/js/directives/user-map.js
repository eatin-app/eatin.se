'use strict';

var mapBase = 'https://www.google.com/maps/embed/v1/place';

module.exports = ['CONFIG', '$sce', function (CONFIG, $sce) {
  return {
    scope: {
      user: '=user'
    },
    controller: function ($scope) {
      var user = $scope.user;

      $scope.mapUrl = $sce.trustAsResourceUrl(mapBase + '?key=' + CONFIG.googleMapsApiKey +
        '&q=' + user.address + ',' + user.city + '+Sweden');
    },
    templateUrl: 'views/directives/user-map.html'
  };
}];
