'use strict';

module.exports = ['$resource', 'CONFIG', function ($resource, CONFIG) {
  return $resource(CONFIG.apiUrl + '/bookings/:id.json');
}];
