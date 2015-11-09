app.directive('educationListing', function(){
    return {
        restrict: 'E',
        scope: {
            listing: '='
        },
        templateUrl: 'js/directives/educationListing.html'
    }
});