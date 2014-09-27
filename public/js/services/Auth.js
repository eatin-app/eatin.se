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
      return $http.get(CONFIG.apiUrl + '/users/' + username, {
        password: password
      }).then(function (result) {
        self.user = result.data;
      }, function () {
        self.user = {};
      }).then(function () {
        self.isLoggedIn = !!self.user.id;
        SessionStorage.set('user', self.user);
        $rootScope.$broadcast(AUTH_EVENTS.userUpdated);
      });
    }
  };

  return service;
}];
