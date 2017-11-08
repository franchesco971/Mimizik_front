angular.module('mimizik.controllers', [])

.controller('ListCtrl', function($scope, $http, BackEnd) {
    $http.get(BackEnd.backUrl+'videos',{header: {'Access-Control-Allow-Origin': '*'}})
    .then(function(data) {
       console.log(data); 
    }, function(error) {
        console.log(error); 
    });
});