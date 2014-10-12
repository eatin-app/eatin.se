'use strict';

module.exports = ['$scope', 'User', 'Auth',
function ($scope, User, Auth) {
  $scope.who = 'host';

  $scope.bookings = User.Booking.query({
    type: 'bookouts',
    userid: Auth.user._id
  });
}];
