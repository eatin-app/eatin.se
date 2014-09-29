'use strict';

module.exports = ['$scope', 'Booking',
function ($scope, Booking) {
  $scope.who = 'guest';
  $scope.bookings = Booking.query({
    type: 'bookins'
  });
}];
