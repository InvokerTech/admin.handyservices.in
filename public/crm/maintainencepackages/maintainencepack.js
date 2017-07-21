(function() {
  'use strict';

  angular
  .module('HandyApp')
  .controller('maintainenceController', HmpController);

  HmpController.inject = ['$http'];
  function HmpController($http) {
    var vm = this;
    vm.packages=null;
    getData().then(function(res){
      vm.packages=res.data;
      console.log(vm.packages);
    });

    function  getData(){
      return $http.get(BASE_URL+'packages');
    }

  }
})();
