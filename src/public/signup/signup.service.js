(function() {
    'use strict';

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;
  var userInfo = null;

  service.saveUserInfo = function (user) {
    userInfo = user;
  };

  service.getUserInfo = function () {
    return userInfo;
  };
}
})();
