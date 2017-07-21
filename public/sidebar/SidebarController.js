(function () {
    'use strict';

    angular
        .module('HandyApp')
        .controller('SideCtrl', SideCtrl);

    SideCtrl.inject = [''];
    function SideCtrl() {
        var vm = this;

        vm.crm = false;
        vm.mail = false;
        vm.user = false;
        vm.service=false;
        vm.area=false;
           vm.showService = function () {
            vm.service = !vm.service;
           vm.crm = false;
        vm.mail = false;
        vm.user = false;
        vm.area=false;
        };
        
        vm.showArea = function () {
            vm.area = !vm.area;
         vm.crm = false;
        vm.mail = false;
        vm.user = false;
        vm.service=false;
  
        };
           vm.showUser = function () {
            vm.user = !vm.user;
      vm.crm = false;
        vm.mail = false;
        vm.service=false;
        vm.area=false;
        };
        vm.showCrm = function () {
            vm.crm = !vm.crm;
         
        vm.mail = false;
        vm.user = false;
        vm.service=false;
        vm.area=false;

        };
        vm.showMail = function () {
            vm.mail = !vm.mail;
             vm.crm = false;
        vm.user = false;
        vm.service=false;
        vm.area=false;
        };
    }
})();