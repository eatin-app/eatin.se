'use strict';

module.exports = ['$scope', 'Booking',
function ($scope, Booking) {
  $scope.bookins = Booking.query({
    type: 'bookins'
  });
}];
