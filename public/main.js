var myApp = angular.module('myApp', [])


// myApp.config(function($routeProvider) {

//     $routeProvider

//         // home page
//         .when('/test', {
//             templateUrl: 'page-home.html',
//             controller: 'testController'
//         })

// });


myApp.controller('mainController', function($scope) {
});

myApp.controller('testController', function($scope) {
    $scope.showinfo = function(){
        $('#bounce').addClass('animated slideInLeft');
        // $scope.hidden = true;
    }

    $scope.dismiss = function(){
        $('#bounce').addClass('animated slideOutLeft');
        setTimeout(function(){ $("#bounce").removeClass("animated slideOutLeft slideInLeft");},2000)
        
    }
});