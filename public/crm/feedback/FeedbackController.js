(function() {
'use strict';

    angular
        .module('HandyApp')
        .controller('FeedbackController', FeedbackController);

    FeedbackController.inject = ['$http'];
    function FeedbackController($http) {
        var vm = this;
        
        vm.feedbacks=null;
getData().then(function(res){
vm.feedbacks=res.data;
console.log(vm.feedbacks);
});

   function  getData(){

    return $http.get(BASE_URL+'feedback');
   }
      
    
    }
})();



/*app.controller("inhouse_controller", function($scope,$http) {
   
var init = function () {
$http({
         method  : 'GET',
         url     : 'https://handy-service-server.herokuapp.com/feedbacka',
          //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
         //headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
        })
         .success(function(service_info) {
          
      $scope.services = service_info;
    console.log(service_info);
   
     
         });

       };*/

/*$scope.edit_package = function(id){
$http({
         method  : 'POST',
         url     : 'https://handy-service-server.herokuapp.com/update/package',
          data    : {id:id}, //forms user object
         //headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
        })
         .success(function(data) {
          
    
   
     
         });
};


       init();
});*/