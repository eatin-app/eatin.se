'use strict';

module.exports = ['$rootScope', '$http', 'SessionStorage', 'CONFIG', 'AUTH_EVENTS', 'User',
function ($rootScope, $http, SessionStorage, CONFIG, AUTH_EVENTS, User) {
  var user = SessionStorage.get('user', {});

  var service = {
    user: user,
    isLoggedIn: !!user._id,
    login: function login(username, password) {
      var request = $http.post(CONFIG.apiUrl + '/sessions', {
        email: username,
        password: password
      });

      return service.updateUserData(request);
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
    },
    confirm: function (token) {
      SessionStorage.set('user', {
        token: token
      });

      return service.updateUserData();
    },
    updateUserData: function (request) {
      var userData = {};

      if(!request) {
        request = $http.get(CONFIG.apiUrl + '/sessions');
      }

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
    getProfileImageUrl: function () {
      return CONFIG.apiUrl + '/users/' + this.user._id + '/profileImage';
    }
  };

  // Refetch user data on update
  service.updateUserData();

  $rootScope.$on(AUTH_EVENTS.userUpdated, function (e, data) {
    service.user = data;

    service.isLoggedIn = !!service.user._id;
    SessionStorage.set('user', data);
  });

  return service;
}];
