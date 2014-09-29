'use strict';

module.exports = ['$scope', 'Booking',
function ($scope, Booking) {
  $scope.who = 'host';
  $scope.bookings = Booking.query({
    type: 'bookouts'
  });
}];
