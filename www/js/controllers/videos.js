angular.module('videos.controllers', [])

.controller('VideosListCtrl', function($scope, $http, BackEnd) {
//.controller('vListCtrl', function($scope) {
    $scope.test='dazdzada2';
//    $http.get(BackEnd.backUrl+'videos',{header: {'Access-Control-Allow-Origin': '*'}})
//    $http.get(BackEnd.backUrl+'videos')
//    .then(function(data) {
//       console.log(data); 
//    }, function(error) {
//        console.log(error); 
//    });
    $http({
        method: 'GET',
        url: BackEnd.backUrl+'videos',
        headers: { 'Content-type': 'application/json'}
    })
            .then(function(data) { console.log(data); });
});