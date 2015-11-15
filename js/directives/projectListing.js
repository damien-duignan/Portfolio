app.directive('projectList', function(){
	return {
		restrict: 'E',
		scope: {
			listing: '=',
            alternate: '@'

		},
		/*link: function($even){
			console.log("Hi" + even);
			if($even == true){
				console.log("Even is true");
			}
        },*/
		templateUrl: 'js/directives/projectListing.html'
	};
});