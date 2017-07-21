(function () {
    'use strict';

    angular
        .module('HandyApp')
        .factory('AuthService', AuthService);

    AuthService.inject = [' $localStorage'];
    function AuthService( $localStorage) {
        var user = $localStorage.$default({
          status: false
        });
        var service = {
            getUser: getUser,
            setUser: setUser
        };

        return service;
        function setUser(status) {
       user.status=status;
            //console.log(user.status);
        }
        function getUser() {
            return user.status;
        }


    }
})();