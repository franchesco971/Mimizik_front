angular.module('mimizik')

.factory('videoModel', ['$http', 'BackEndParameters', function($http, BackEndParameters) {
    return {
        getPaginatedVideos : function(page) { 
            return $http.get(BackEndParameters.backUrl+'videos',{params:{page:page}});
        }
    };
}]);