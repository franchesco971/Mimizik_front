angular.module('videos.controllers', [])

.controller('VideosListCtrl', function($scope, videoModel) {
//.controller('vListCtrl', function($scope) {
    $scope.test='dazdzada2';
    $scope.testFunction=function() {};
    
    videoModel.getPaginatedVideos(3)
    .then(function(data) {
       $scope.videos = data.data.videos;       
    }, function(error) {
        console.log(error); 
    });
    
//    $http({
//        method: 'GET',
//        url: BackEnd.backUrl+'videos',
//        headers: { 'Content-type': 'application/json','Authorization':'Basic bWltaXppa19mcm9udDptaW1pemlrX2FwaTk3MQ=='}
//    })
//            .then(function(data) { console.log(data); });

})
.controller('VideosShowCtrl', function($scope, $stateParams, videoModel) {
    $scope.video = videoModel.getVideo($stateParams.videoId)
    .then(function(data) {
        $scope.video = data.data;
    });
})
;