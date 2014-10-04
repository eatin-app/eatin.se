'use strict';

module.exports = ['$resource', 'CONFIG', function ($resource, CONFIG) {
  return $resource(CONFIG.apiUrl + '/users/:id.json', {
    id: '@id'
  });
}];
