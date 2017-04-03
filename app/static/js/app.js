// Your JavaScript Code here
/*global angular*/


var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){
    $http.get('/api/thumbnails').then(function(response){
        $scope.image = response.data.thumbnails;
        
        
    });
});


