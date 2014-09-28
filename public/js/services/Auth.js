'use strict';

module.exports = ['$rootScope', '$http', 'SessionStorage', 'CONFIG', 'AUTH_EVENTS',
function ($rootScope, $http, SessionStorage, CONFIG, AUTH_EVENTS) {
  var user = SessionStorage.get('user', {});

  var service = {
    user: user,
    isLoggedIn: !!user.id,
    login: function login(username, password) {
      var userData = {};

      //## While prototyping, disregard password
      //## Should be post
      var request = $http.get(CONFIG.apiUrl + '/users/' + username, {
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
      return $http.post(CONFIG.apiUrl + '/logout').finally(function () {
        $rootScope.$broadcast(AUTH_EVENTS.userUpdated, {});
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      });
    }
  };

  $rootScope.$on(AUTH_EVENTS.userUpdated, function (e, data) {
    service.user = data;

    service.isLoggedIn = !!service.user.id;
    SessionStorage.set('user', data);
  });

  return service;
}];
