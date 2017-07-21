HandyApp.controller("customer_exe_con", function($scope,$http) {
  $http({
          method  : 'GET',
          url     : 'https://handy-service-server.herokuapp.com/all/executive',
          //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
          .success(function(data) {
            $scope.cus_exe_info = data;

            console.log('data',data);
            $scope.preloader=false;
          })
          .error(function(data, status) {
            $scope.message = data;
            console.error('user not found', status, data);
          });


$scope.view_customer_exe = function(id){
  $http({
          method  : 'GET',
          url     : 'https://handy-service-server.herokuapp.com/user?id='+id,
          //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
          .success(function(data) {
            $scope.cus_rep = data;

            console.log(
              $scope.cus_info);
          })
}

});
