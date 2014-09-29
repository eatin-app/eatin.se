'use strict';

module.exports = ['$scope', '$routeParams', 'Booking',
function BookingCtrl ($scope, $routeParams, Booking) {
  $scope.booking = Booking.get({
    type: 'bookings',
    id: $routeParams.id
  });
}];
