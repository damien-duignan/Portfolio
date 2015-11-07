app.directive('skillButton', function(){
    return {
        restrict: 'E',
        scope: {
            skills: '='
        },
        templateUrl: 'js/directives/skillButton.html'
    };
});