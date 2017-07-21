 var  BASE_URL = "https://handy-service-server.herokuapp.com/";
var HandyApp = angular.module('HandyApp', ['ui.router','ngStorage']);

HandyApp.run(function($rootScope,AuthService, $location) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        if(AuthService.getUser()){

        }
        else{
           // alert("Please login.")
        $location.path('/login');
        }
    });
});
    HandyApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

     .state('login', {
        url: '/login',
        templateUrl: 'login/login.html'
    })
      .state('admin', {
        url: '/admin',
        templateUrl: '/admin.html'
    })
      //mange User Routes========================================
     .state('admin.manageuser-team', {
        url: '/team',
        templateUrl: 'manageuser/team/inhouse-team-manage.html'
    })
       .state('admin.manageuser-customer', {
        url: '/customers',
        templateUrl: 'manageuser/customers/customer-manage.html'
    })
      .state('admin.manageuser-customercareexecutive', {
       url: '/customerscare',
       templateUrl: 'manageuser/customercare/customercareexecutive.html'
    })
        .state('admin.manageuser-vendor', {
        url: '/vendors',
        templateUrl: 'manageuser/vendors/vendors-servicemen-manage.html'
    })
        .state('admin.manageuser-corporate', {
        url: '/corporate',
        templateUrl: 'manageuser/corporate/corporate-business-manage.html'
    })
            .state('admin.manageuser-role', {
        url: '/roles',
        templateUrl: 'manageuser/roles/role-responcibility-manage.html'
    })

  //mange service Routes========================================

             .state('admin.manageservice', {
        url: '/services',
        templateUrl: 'manageservices/all/all-service-manage.html'
    })
  //mange area Routes========================================

             .state('admin.managearea', {
        url: '/area',
        templateUrl: 'managearea/area_manage.html'
    })


    //CRM Routes ========================================
        .state('admin.crm-orders', {
        url: '/orders',
        templateUrl: 'crm/orders/view_orders.html'
    })

    .state('admin.crm-maintainence-packages', {
        url: '/maintainencepackages',
        templateUrl: 'crm/maintainencepackages/maintainencepackages.html',

    })

    .state('admin.crm-hmp', {
        url: '/hmp',
        templateUrl: 'crm/hmp/hmp.html',

    })
           .state('admin.crm-callback', {
        url: '/callback',
        templateUrl: 'crm/callback/callback-req-manage.html'
    })
      .state('admin.crm-feedback', {
        url: '/feedback',
        templateUrl: 'crm/feedback/feedback.html',

    });


});
