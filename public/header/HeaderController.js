(function() {
'use strict';

    angular
        .module('HandyApp')
        .controller('HeaderController', HeaderController);

   HeaderController.inject = ['AuthService','$state'];
    function HeaderController(AuthService,$state) {
        var vm = this;
        vm.logOut=logOut;
        function logOut(){
          AuthService.setUser(false);
          localStorage.removeItem("adminName");
          $state.go('login');
          alert("You are logged out.");
        }


    }
})();
