'use strict';

module.exports = ['$scope', 'User', 'Auth',
function ($scope, User, Auth) {
  $scope.who = 'guest';

  $scope.bookings = User.Booking.query({
    type: 'requests',
    userid: Auth.user._id
  });
}];
