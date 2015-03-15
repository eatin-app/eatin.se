'use strict';

module.exports = ['$scope', 'User', 'Auth',
function ($scope, User, Auth) {
  User.Booking.query({
    type: 'requests',
    userid: Auth.user._id
  }).$promise.then(function (bookings) {
    $scope.bookings = bookings.map(function (booking) {
      booking.who = booking.guest;
      return booking;
    });
  });
}];
