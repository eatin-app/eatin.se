'use strict';

module.exports = ['$resource', 'CONFIG', function ($resource, CONFIG) {
  var User = $resource(CONFIG.apiUrl + '/users/:id', {
    id: '@_id'
  });

  User.Booking = $resource(CONFIG.apiUrl + '/users/:userid/:type/:id', {
    type: 'bookings',
    id: '@_id'
  });

  return User;
}];
