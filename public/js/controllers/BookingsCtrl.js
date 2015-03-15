'use strict';

module.exports = ['$scope', 'User', 'Auth',
function ($scope, User, Auth) {
  User.Booking.query({
    type: 'bookings',
    userid: Auth.user._id
  })
  .$promise.then(function (bookings) {
    $scope.bookings = bookings.map(function (booking) {
      var userIsGuest = booking.guest._id === Auth.user._id;

      booking.showInList = userIsGuest && booking.host || booking.guest;
      booking.separatorText = userIsGuest && 'ska du till' || 'tar du emot';

      return booking;
    });
  });
}];
