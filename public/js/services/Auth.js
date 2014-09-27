'use strict';

module.exports = ['$rootScope', '$http', 'SessionStorage', 'CONFIG', 'AUTH_EVENTS',
function ($rootScope, $http, SessionStorage, CONFIG, AUTH_EVENTS) {
  var user = SessionStorage.get('user', {});

  var service = {
    user: user,
    isLoggedIn: !!user.id,
    login: function login(username, password) {
      var self = this;

      //## While prototyping, disregard password
      //## Should be post
      return $http.get(CONFIG.apiUrl + '/users/' + username, {
        password: password
      }).then(function (result) {
        self.user = result.data;
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      }, function () {
        self.user = {};
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      }).then(function () {
        self.isLoggedIn = !!self.user.id;
        SessionStorage.set('user', self.user);
        $rootScope.$broadcast(AUTH_EVENTS.userUpdated);
      });
    },
    logout: function () {
      var self = this;

      return $http.post(CONFIG.apiUrl + '/logout').finally(function () {
        self.user = {};
        self.isLoggedIn = !!self.user.id;
        SessionStorage.set('user', self.user);
        $rootScope.$broadcast(AUTH_EVENTS.userUpdated);
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      });
    }
  };

  return service;
}];
