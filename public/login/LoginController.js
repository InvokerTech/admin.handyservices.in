/* Controllers */


HandyApp.controller('LoginController', function ($scope, $http, $state, AuthService) {
  // create a blank object to handle form data.
  var BASE_URL = "https://handy-service-server.herokuapp.com";
  $scope.user = {};
  // calling our submit function.
  $scope.submitForm = function () {
    // Posting data to php file
    $http({
      method: 'POST',
      url: BASE_URL + '/admin/login',
      data: { email: $scope.user.email, password: $scope.user.password }, //forms user object
      //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
      .success(function (data) {

        if (data.errors) {
          // Showing errors.

          $scope.errorEmail = data.errors.email;
          $scope.errorPassword = data.errors.password;

        } else {
          AuthService.setUser(true);
          alert("You are logged in.");
          console.log(data);
          localStorage.setItem("adminName", data.name);


          $state.go('admin.crm-orders');
        }
      })
      .error(function (data, status) {
        $scope.message = data;
        console.error('user not found', status, data);

      });
  };
});
