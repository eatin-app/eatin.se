'use strict';

module.exports = ['$scope', 'User', 'Auth',
function ($scope, User, Auth) {
  User.Booking.query({
    type: 'bookings',
    userid: Auth.user._id
  })
  .$promise.then(function (bookings) {
    $scope.bookings = bookings.map(function (booking) {
      booking.showInList = booking.guest._id === Auth.user._id && booking.host || booking.guest;
      return booking;
    });
  });
}];
