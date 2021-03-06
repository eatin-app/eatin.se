'use strict';

// Hack until proper npm support...
var angular = require('angular');
Object.keys(window.angular).forEach(function (key) {
  angular[key] = window.angular[key];
});

var filters = require('./filters');
var controllers = require('./controllers');
var routes = require('./routes');
var services = require('./services');
var directives = require('./directives');
var config = require('./config');

var app = module.exports = exports = angular.module('readerApp', [
  'ngRoute',
  'angularFileUpload',
  filters,
  controllers,
  services,
  directives
]);

require('angular-route');
require('npm-angular-resource')(window, angular);
require('angular-file-upload');

app.config(routes);

app.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push(['CONFIG', 'SessionStorage',
  function (CONFIG, SessionStorage) {
    return {
      request: function (config) {
        var user = SessionStorage.get('user', {});

        // Add Authorization header to all requests to api
        if(config.url.indexOf(CONFIG.apiUrl) === 0 && user.token) {
          config.headers.Authorization = user.token;
        }

        // Add X-Client header to all requests to api
        if(config.url.indexOf(CONFIG.apiUrl) === 0) {
          config.headers['X-Client'] = CONFIG.client;
        }

        return config;
      }
    };
  }]);
}]);

app.constant('CONFIG', config);
app.constant('AUTH_EVENTS', {
  userUpdated: 'auth-user-updated',
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});
