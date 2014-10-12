'use strict';

module.exports = ['$rootScope', '$http', 'SessionStorage', 'CONFIG', 'AUTH_EVENTS', 'User',
function ($rootScope, $http, SessionStorage, CONFIG, AUTH_EVENTS, User) {
  var user = SessionStorage.get('user', {});

  var service = {
    user: user,
    isLoggedIn: !!user._id,
    login: function login(username, password) {
      var userData = {};

      var request = $http.post(CONFIG.apiUrl + '/sessions', {
        email: username,
        password: password
      });

      request.then(function (result) {
        userData = result.data;
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      }).finally(function () {
        $rootScope.$broadcast(AUTH_EVENTS.userUpdated, userData);
      });

      return request;
    },
    logout: function () {
      return $http.delete(CONFIG.apiUrl + '/sessions').then(function logoutSuccess () {
        $rootScope.$broadcast(AUTH_EVENTS.userUpdated, {});
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      }, function logoutFail () {
        console.log('Logout failed');
      });
    },
    register: function (user) {
      return new User(user).$save();
    }
  };

  $rootScope.$on(AUTH_EVENTS.userUpdated, function (e, data) {
    service.user = data;

    service.isLoggedIn = !!service.user._id;
    SessionStorage.set('user', data);
  });

  return service;
}];
