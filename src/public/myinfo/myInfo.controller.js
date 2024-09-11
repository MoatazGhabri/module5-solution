(function() {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'SignUpService'];
  function MyInfoController(MenuService, SignUpService) {
    var myInfoCtrl = this;

    myInfoCtrl.user = SignUpService.getUserInfo();

    if (myInfoCtrl.user && myInfoCtrl.user.favoriteDish) {
      var favoriteDish = myInfoCtrl.user.favoriteDish;

      var categoryShortName = favoriteDish.charAt(0);  
      var menuNumber = parseInt(favoriteDish.slice(1)) - 1;  

      MenuService.getItem(categoryShortName, menuNumber)
      .then(function(response) {
        myInfoCtrl.menuItem = response; 
        myInfoCtrl.categoryShortName = categoryShortName; 
      })
      .catch(function(error) {
        console.log("Error retrieving menu item:", error);
      });
    }
  }
})();
