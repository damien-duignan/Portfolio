app.factory('skills', ['$http', function($http){
    return $http.get("data/skills.json")
        .success(function(data){
            return data;
        }).error(function(error){
            return error;
        });
}]);