HandyApp.controller("customer_con", function($scope,$http) {
  $http({
          method  : 'GET',
          url     : 'https://handy-service-server.herokuapp.com/users',
          //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
          .success(function(data) {
            console.log(data);
$scope.cus_info = data;


$scope.preloader=false;
          })
          .error(function(data, status) {
            $scope.message = data;
            console.error('user not found', status, data);
});


$scope.view_customer = function(id){
  $http({
          method  : 'GET',
          url     : 'https://handy-service-server.herokuapp.com/user?id='+id,
          //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
          .success(function(data) {
$scope.cus_rep = data;

console.log(data.photo);
$('#l_first_name').text(data.name);
$('#l_number').text(data.number);
$('#l_email').text(data.email);
$('#l_photo').attr('src',data.photo);
$('#l_dob').text(data.dob);
$('#l_ref_code').text(data.referal_code);
$('#l_gender').text(data.gender);
$('#l_ref_by').text(data.refered_code);
$.each(data.address,function(index, el) {
  console.log(el);
  addre = el.houseno+', '+el.society+', '+el.city+', '+el.landmark+', '+el.zip_code+', '+el.state+'<br/><br/>';
  $('#l_add').append(addre);
});
// $('#l_add').text(addre);
jQuery('#view_customer').modal('show');

})
}

});
