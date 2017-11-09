angular.module('videos.controllers', [])

.controller('VideosListCtrl', function($scope, $http, BackEnd) {
    $http.get(BackEnd.backUrl+'videos')
    .then(function(data) {
       console.log(data); 
    }, function(error) {
        console.log(error); 
    });
});