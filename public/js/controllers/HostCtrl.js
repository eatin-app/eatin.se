'use strict';

module.exports = ['$scope', '$http', '$routeParams', 'User', 'Booking',
function ($scope, $http, $routeParams, User, Booking) {
  $scope.user = User.get({
    id: $routeParams.id
  });

  $scope.bookable = true;
  $scope.booking = false;
  $scope.bookingError = '';

  $scope.showBooking = function showBooking () {
    $scope.booking = true;
  };

  $scope.hideBooking = function hideBooking () {
    $scope.booking = false;
  };

  $scope.book = function book (message) {
    var booking = new Booking({
      message: message,
      host: $scope.user._id
    });

    $scope.bookingError = '';

    booking.$save().then(function bookSuccess () {
      $scope.hideBooking();
    }, function bookFail () {
      $scope.bookingError = 'Booking failed';
    });
  };
}];
