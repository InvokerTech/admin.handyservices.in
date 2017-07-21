 HandyApp.controller("Orders", function ($scope, $http) {

            var init = function () {
                    $http({
                        method: 'GET',
                        url: 'https://handy-service-server.herokuapp.com/services',
                        //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
                        //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                    .success(function (service_info) {
                        $scope.servicenames = [];
                        $scope.order_list = [];
                        angular.forEach(service_info, function (value, key) {
                            $scope.servicenames[value._id] = value.name;
                        });
                        // console.log($scope.servicenames);
                        $http({
                            method: 'GET',
                            url: 'https://handy-service-server.herokuapp.com/orders/all',
                            //data    : {email:'pchemistry.35@gmail.com',password:'abcd'}, //forms user object
                            //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                        })
                            .success(function (data) {
                                $scope.order_list.data = data;
                                console.log(data);
                                $scope.preloader = false;
                            })
                            .error(function (data, status) {
                                $scope.message = data;
                                console.error('user not found', status, data);

                            });
                    });
            };

            $scope.show_userinfo = function (user_id) {
                console.log(user_id);
                //
                $http({
                    method: 'GET',
                    url: 'https://handy-service-server.herokuapp.com/user',
                    params: { "id": user_id }, //forms user object
                    //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                    .success(function (data) {
                        $scope.user_info = [];
                        $scope.user_info = data;
                        console.table($scope.user_info);
                    })
                    .error(function (data, status) {
                        $scope.message = data;
                        console.error('user not found', status, data);
                        $('#userinfommodal').modal('show');

                    });
            };
            init();
        });
