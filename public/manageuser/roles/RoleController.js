HandyApp.controller("home_controller", function ($scope, $http, $timeout) {

  var init = function () {
    $scope.cus_review = [];
    $http({
      method: 'GET',
      url: 'https://handy-service-server.herokuapp.com/role/all',
      crossDomain: true,
      //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
      //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function (role_info) {
      $scope.role = role_info;
    });

    $http({
      method: 'GET',
      url: 'https://handy-service-server.herokuapp.com/responsibilities',
      crossDomain: true,
      //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
      //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function (resp_info) {
      $scope.resp = resp_info;
    });
  };

  $scope.update_resp = function () {
    console.log($scope.response_id);
    $http({
      method: 'POST',
      url: 'https://handy-service-server.herokuapp.com/responsibility',
      data: { table_name: $scope.table_name, create: $scope.create, update: $scope.update, delete: $scope.delete, assign: $scope.assign },
      //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
      //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function (resp_info) {
      $scope.resp = resp_info;
      if (resp_info.message == 'Created') {
        swal('Success', 'Responsibility Added', 'success');
        setTimeout(function () {
          window.location.href = '';
        }, 2000)
      }
    });
  };


  $scope.save_resp = function () {
    if ($scope.table_name) {
      $http({
        method: 'POST',
        url: 'https://handy-service-server.herokuapp.com/responsibility',
        data: { table_name: $scope.table_name, create: $scope.create, update: $scope.update, delete: $scope.delete, assign: $scope.assign },
        //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
        //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .success(function (resp_info) {
        $scope.resp = resp_info;
        if (resp_info.message == 'Created') {
          swal('Success', 'Responsibility Added', 'success');
          setTimeout(function () {
            window.location.href = '';
          }, 2000)
        }
      });
    } else {
      swal('Error', 'Please Select The Table', 'error');
      alert("sdd");
    }
  };
  init();
});
