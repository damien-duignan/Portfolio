app.controller('HomeController', ['$scope', '$interval', function($scope, $interval){
    $scope.clock = Date.now();
    $interval(function () { $scope.clock = Date.now(); }, 1000);

    $scope.location = 'Dublin';
}]);
