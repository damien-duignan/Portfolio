app.controller('ProjectsController', ['$scope', function($scope){
    $scope.projects = [
		{
			name: 'Angular',
			description: 'Trying Angular from Proj',
			img: 'img/angularjs.png'
		},
		{
			name: 'Django',
			description: 'Not Django Unchained',
			img: 'img/django.png'
		},
		{
			name: 'Bootstrap',
			description: 'Responsive Design'
		}
	];
}]);

/*app.controller('ProjectsController', ['$scope', 'books', function($scope, books) {
    books.success(function(data){
        $scope.projects = data;
    });
}]);*/