'use strict';

module.exports = ['$resource', 'CONFIG', function ($resource, CONFIG) {
  return $resource(CONFIG.apiUrl + '/:type/:id.json');
}];
