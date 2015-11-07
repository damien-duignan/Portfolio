app.directive('navPath', function(){
    return {
        restrict: 'E',
        scope: {
            link: '='
        },
        templateUrl: 'js/directives/navLink.html'
    }
});