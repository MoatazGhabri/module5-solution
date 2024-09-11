(function() {
  'use strict';
  
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController(MenuService, SignUpService) {
    var signUpCtrl = this;
    signUpCtrl.user = {};

    signUpCtrl.submit = function () {
      var favoriteDish = signUpCtrl.user.favoriteDish;
      
      var categoryShortName = favoriteDish.charAt(0);  
      var menuNumber = favoriteDish.slice(1);          

      var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '/menu_items/' + menuNumber + '.json';

      MenuService.getFavoriteDish(url)
      .then(function (response) {
        if (response === null) {
          signUpCtrl.error = true;
          signUpCtrl.success = false;
        } else {
          SignUpService.saveUserInfo(signUpCtrl.user);
          signUpCtrl.success = true;
          signUpCtrl.error = false;

        }
      })
      .catch(function () {
        signUpCtrl.error = true;
        signUpCtrl.success = false;
      });
    };
  }
})();
