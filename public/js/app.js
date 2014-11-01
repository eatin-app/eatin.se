'use strict';

var _ = require('underscore');
var angular = require('angular');
_.extend(angular, window.angular); // Hack until proper npm support...
var controllers = require('./controllers');
var routes = require('./routes');
var services = require('./services');
var config = require('./config');

var app = module.exports = exports = angular.module('readerApp', [
  'ngRoute',
  'angularFileUpload',
  controllers,
  services
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
