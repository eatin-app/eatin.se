'use strict';

module.exports = ['$scope', 'Booking',
function ($scope, Booking) {
  $scope.bookouts = Booking.query({
    type: 'bookouts'
  });
}];
