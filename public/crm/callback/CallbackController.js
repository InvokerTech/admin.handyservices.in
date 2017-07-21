(function() {
'use strict';

    angular
        .module('HandyApp')
        .controller('CallbackController', CallbackController);

    CallbackController.inject = ['$http'];
    function CallbackController($http) {
        var vm = this;
        vm.callbacks=null;
getData().then(function(res){
vm.callbacks=res.data;
console.log(vm.callbacks);
});

   function  getData(){

    return $http.get(BASE_URL+'callbacks');
   }
      
    }
})();

