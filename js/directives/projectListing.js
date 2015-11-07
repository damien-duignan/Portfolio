app.directive('projectList', function(){
	return {
		restrict: 'E',
		scope: {
			listing: '='
		},
		templateUrl: 'js/directives/projectListing.html'
	};
});