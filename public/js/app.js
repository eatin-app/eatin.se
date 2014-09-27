'use strict';

var angular = require('angular');
var controllers = require('./controllers');
var routes = require('./routes');
var services = require('./services');
var config = require('./config');

var app = module.exports = exports = angular.module('readerApp', [
  'ngRoute',
  controllers,
  services
]);

require('angular-route');
require('npm-angular-resource')(window, angular);

app.config(routes);

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
