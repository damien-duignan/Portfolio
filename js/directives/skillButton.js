app.directive('skillButton', function(){
    return {
        restrict: 'E',
        scope: {
            skill: '='
        },
        templateUrl: 'js/directives/skillButton.html'
    };
});