'use strict';

var mapBase = 'https://www.google.com/maps/embed/v1/place';

module.exports = ['CONFIG', '$sce', function (CONFIG, $sce) {
  return {
    scope: {
      user: '=user'
    },
    controller: function ($scope) {
      var user = $scope.user;

      //## This is retarded
      if(user.$promise && !user.$promise.$resolved) {
        user.$promise.then(setUrl);
      }
      else {
        setUrl();
      }

      function setUrl () {
        $scope.mapUrl = $sce.trustAsResourceUrl(mapBase + '?key=' + CONFIG.googleMapsApiKey +
          '&q=' + user.address + ',' + user.city + '+Sweden');
      }
    },
    templateUrl: 'views/directives/user-map.html'
  };
}];
