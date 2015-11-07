app.directive('workListing', function(){
    return {
        restrict: 'E',
        scope: {
            listing: '='
        },
        templateUrl: 'js/directives/workListing.html'
    }
});