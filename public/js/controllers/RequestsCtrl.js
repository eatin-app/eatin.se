'use strict';

module.exports = ['$scope', 'Booking',
function ($scope, Booking) {
  $scope.requests = Booking.query({
    type: 'requests'
  });
}];
