app.controller('ProjectsController', ['$scope', function($scope){
    $scope.description = 'In my spare time, I try to keep active to keep my skills updated ' +
    					'and keeping with current trends. Below are some examples of what I am doing.'
    $scope.tech = [
		{
			name: 'AngularJS',
			description: 'AngularJS is an open source MVC JavaScript Framework maintained by Google. ' +
			'It provides client-side MVC architectures, which aid in the development of single page applications.',
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
