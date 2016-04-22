var myApp = angular.module('myApp', [])

myApp.controller('testController', function($scope) {
    $scope.showinfo = function(){
        $('#bounce').addClass('animated slideInLeft');
    }

    $scope.dismiss = function(){
        $('#bounce').addClass('animated slideOutLeft');
        setTimeout(function(){ $("#bounce").removeClass("animated slideOutLeft slideInLeft");},2000)
    }    

    $scope.showinfo2 = function(){
        $('#bounce2').addClass('animated slideInLeft');
    }

    $scope.dismiss2 = function(){
        $('#bounce2').addClass('animated slideOutLeft');
        setTimeout(function(){ $("#bounce2").removeClass("animated slideOutLeft slideInLeft");},2000)
    }

});