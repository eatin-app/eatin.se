'use strict';

module.exports = ['$scope', '$route', '$routeParams', 'Booking',
function BookingCtrl ($scope, $route, $routeParams, Booking) {
  $scope.newBooking = {}; // Just used because plain variables does not bind
  $scope.booking = Booking.get({
    id: $routeParams.id
  });

  $scope.booking.$promise.then(function bookingSuccess () {
    $scope.showAddress = $scope.booking.status !== 'pending';
    $scope.rejectable = $scope.booking.status !== 'rejected';
    $scope.acceptable = $scope.booking.status === 'pending';
  });


  $scope.reject = function reject () {
    new Booking($scope.booking).$remove().then(function success () {
      $route.reload();
    }, function fail () {
      $scope.error = 'Something went wrong';
    });
  };

  $scope.accept = function accept (date, time) {
    var datetime = new Date(date + 'T' + time + getTimezone());

    new Booking({
      _id: $scope.booking._id,
      datetime: datetime.toJSON(),
      status: 'accepted'
    }).$save().then(function () {
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
