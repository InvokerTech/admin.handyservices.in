HandyApp.controller("AreaController", function($scope,$http,$window,$timeout) {
    
var init = function () {
    $http({
          method  : 'GET',
          url     : 'https://handy-service-server.herokuapp.com/locations',
          beforeSend: function() {
                $scope.preloader = true;
                console.log('$scope.preloader');
            },
          //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            console.log(data);
$scope.locations_list = data;
$scope.preloader=false;
          })
          .error(function(data, status) {
            $scope.message = data;
  console.error('user not found', status, data);

});
        };


      $scope.disable_location = function(location_id){
console.log(location_id);
swal({
  title: "Are you sure? ",
  text: "Location Will Be Disabled",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Yes, enable it!",
  cancelButtonText: "No, cancel plx!",
  closeOnConfirm: false,
  closeOnCancel: false 
},
function(isConfirm){
  if (isConfirm) {
      $http({
          method  : 'POST',
          url     : 'https://handy-service-server.herokuapp.com/disable/location',
          data    : {id:location_id}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            console.log(data);
swal("Disabled!", "Location Has Been Disabled", "success");
$timeout(function () {
        $window.location = "";
    }, 1000);
          })
          .error(function(data, status) {
            $scope.message = data;
  console.error('user not found', status, data);

});
  } else {
   swal("Cancelled", "Location Has Not Been Disabled :)", "error"); 
  }
});
       
      };

$scope.enabled_location = function(location_id){
console.log(location_id);
swal({
  title: "Are you sure? ",
  text: "Location Will Be Enabled",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Yes, enable it!",
  cancelButtonText: "No, cancel plx!",
  closeOnConfirm: false,
  closeOnCancel: false 
},
function(isConfirm){
  if (isConfirm) {
      $http({
          method  : 'POST',
          url     : 'https://handy-service-server.herokuapp.com/enable/location',
          data    : {id:location_id}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            console.log(data);
swal("Disabled!", "Location Has Been Enabled", "success");
$timeout(function () {
        $window.location = "";
    }, 1000);
          })
          .error(function(data, status) {
            $scope.message = data;
  console.error('user not found', status, data);

});
  } else {
   swal("Cancelled", "Location Has Not Been Enabled :)", "error"); 
  }
});
       
      };
$scope.del_location = function(location_id){
console.log(location_id);
swal({
  title: "Are you sure? ",
  text: "Location Will Be Delete",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel plx!",
  closeOnConfirm: false,
  closeOnCancel: false 
},
function(isConfirm){
  if (isConfirm) {
      $http({
          method  : 'POST',
          url     : 'https://handy-service-server.herokuapp.com/delete/location',
          data    : {id:location_id}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            console.log(data);
swal("Disabled!", "Location Has Been Deleted", "success");
$timeout(function () {
        $window.location = "";
    }, 1000);
          })
          .error(function(data, status) {
            $scope.message = data;
  console.error('user not found', status, data);

});
  } else {
   swal("Cancelled", "Location Has Not Been Delete :)", "error"); 
  }
});
       
      };

$scope.add_location = function(){
console.log($scope.cityname);
if($scope.cityname!==undefined){
      $http({
          method  : 'POST',
          url     : 'https://handy-service-server.herokuapp.com/add/location',
          data    : {city:$scope.cityname}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            console.log(data);
swal("Saved!", "Location Has Been Added", "success");
$timeout(function () {
        $window.location = "";
    }, 1000);
          })
          .error(function(data, status) {
            $scope.message = data;
  console.error('user not found', status, data);

});
}

};
$scope.show_location_info = function(){
    /* $http({
          method  : 'POST',
          url     : 'https://handy-service-server.herokuapp.com/add/location',
          data    : {city:$scope.cityname}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            console.log(data);
swal("Saved!", "Location Has Been Added", "success");
$timeout(function () {
        $window.location = "";
    }, 1000);
          })
          .error(function(data, status) {
            $scope.message = data;
  console.error('user not found', status, data);

});*/
};
       init();
});