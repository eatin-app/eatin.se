'use strict';

module.exports = ['$scope', '$route', '$routeParams', 'Booking',
function BookingCtrl ($scope, $route, $routeParams, Booking) {
  $scope.newBooking = {}; // Just used because plain variables does not bind
  $scope.booking = Booking.get({
    type: 'bookings',
    id: $routeParams.id
  });

  $scope.booking.$promise.then(function bookingSuccess () {
    $scope.showAddress = $scope.booking.state !== 'pending';
    $scope.rejectable = $scope.booking.state !== 'rejected';
    $scope.acceptable = $scope.booking.state === 'pending';
  });


  $scope.reject = function reject () {
    $scope.booking.$remove({
      type: 'request',
      id: $scope.booking.id
    }).then(function success () {
      $route.reload();
    }, function fail () {
      $scope.error = 'Something went wrong';
    });
  };

  $scope.accept = function accept (date, time) {
    // Validate date
    // Assume the native types are always used for now
    if(!date || !time) {
      $scope.error = 'You must enter time and date';
      return;
    }

    new Booking({
      date: date + 'T' + time + getTimezone(),
      state: 'accepted'
    }).$save({
      type: 'booking',
      id: $scope.booking.id
    }).then(function () {
      $route.reload();
    }, function () {
      $scope.error = 'Something went wrong';
    });
  };
}];

function getTimezone () {
  // Source: http://stackoverflow.com/a/5114625/1165146
  var offset = new Date().getTimezoneOffset();

  return ((offset < 0 ? '+' : '-') +
    pad(parseInt(Math.abs(offset / 60)), 2) +
    pad(Math.abs(offset % 60), 2));

  function pad(number, length){
      var str = '' + number;

      while (str.length < length) {
          str = '0' + str;
      }

      return str;
  }
}
