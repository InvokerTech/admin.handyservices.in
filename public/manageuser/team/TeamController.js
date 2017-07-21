HandyApp.controller("inhouse_controller", function($scope,$http) {

  $scope.edit_inhouse = function(id){
    $scope.inhouse_id = id;
    jQuery('#inhouse_id').val(id);
    $http({
      method  : 'GET',
      url     : 'https://handy-service-server.herokuapp.com/inhouse?id='+id,
      //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
      //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(inhouse_info) {

      $scope.editinhouse_info = inhouse_info;
      // $scope.services = service_info;
      //console.log(inhouse_info.name);
      $('#e_first_name').val(inhouse_info.name.split(' ')[0]);
      $('#e_last_name').val(inhouse_info.name.split(' ')[1]);
      $('#e_mobile').val(inhouse_info.number);
      $('#e_gender').val(inhouse_info.gender);
      $('#e_email').val(inhouse_info.email);
      $('#e_pass').val(inhouse_info.pass);
      $('#e_photo').attr('src',inhouse_info.photo);
      $('#e_vphoto').val(inhouse_info.photo);
      $('#e_role').val(inhouse_info.role);
      var birth_date = inhouse_info.dob.split('-');
      var month = birth_date[1].toString();
      $("#e_dob").empty();
      $("#e_dob").birthdayPicker({
        "defaultDate": inhouse_info.dob,
        "maxYear": "2000",
        "maxAge": 90,
        "monthFormat":"short"
      });
      jQuery('#edit_inhouse').modal('show');

    });
  };

  $scope.show_inhouseinfo = function(id){
    $http({
      method  : 'GET',
      url     : 'https://handy-service-server.herokuapp.com/inhouse?id='+id,
      //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
      //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(inhouse_info) {
      $scope.inhouse_info = inhouse_info;
      // $scope.services = service_info;
      console.log(inhouse_info);
      $('#l_first_name').text(inhouse_info.name);
      $('#l_number').text(inhouse_info.number);
      $('#l_email').text(inhouse_info.email);
      $('#l_photo').attr('src',inhouse_info.photo);
      $('#l_dob').text(inhouse_info.dob);
      $('#l_gender').text(inhouse_info.gender);
      // $('#l_add').text(inhouse_info.name);
      $.each(inhouse_info.role,function(index, el) {
        console.log(el);
        roles = el;
      });
      $('#l_role').text(inhouse_info.role.toString());

      jQuery('#view_inhouse').modal('show');

    });
  };
  $scope.del_inhouse = function(id){
    var isConfirm = confirm("Are you sure?Inhouse Will Be Deleted For Ever");


      if (isConfirm) {
        $http({
          method  : 'POST',
          url     : 'https://handy-service-server.herokuapp.com/delete/inhouse/',
          data    : {id:id}, //forms user object
          //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .success(function(data) {
          if(data.message == 'Member deleted.'){
            swal("Deleted!", "Inhouse Has Been Deleted", "success");
            window.location.reload();
          }
        });
      } else {
        swal("Cancelled", "Inhouse Has Not Been Deleted :)", "error");
      }


  }
  var init = function () {
    $http({
      method  : 'GET',
      url     : 'https://handy-service-server.herokuapp.com/inhouse/all',
      //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
      //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(service_info) {
      $scope.services = service_info.reverse();
      console.log(service_info);
    });

    $http({
      method  : 'GET',
      url     : 'https://handy-service-server.herokuapp.com/responsibilities',
      //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
      //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(role) {
      $scope.role = role;
      console.log(role);
    });
  };
  init();
});
