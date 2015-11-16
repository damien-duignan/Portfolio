app.controller('ProjectsController', ['$scope', function($scope){
    $scope.description = 'In my spare time, I try to keep active to keep my skills updated ' +
    					'and keeping with current trends. Below are some examples of what I am doing.'
    $scope.tech = [
		{
			name: 'Django',
			description: [
				'Django is an open source MVC framework written and developed in Python. ' +
				'It comes wth a lot of built in features to aid in the set up of your web application.'
			]
		},
		{
			name: 'AngularJS',
			description: [
				'AngularJS is an open source MVC JavaScript Framework maintained by Google. ' +
				'It provides client-side MVC architectures, which aid in the development of single page applications.'
			]
		},
		{
			name: 'Bootstrap',
			description: [
				'Bootstrap is a responsive design framework built by Twitter. It simplifies the ' +
				'creation of responsive websites.',
			]
		}
	];

    $scope.projects = [
		{
			name: 'Attendance App',
			description: [
				'For my final year project I created an Android application which allows the ' +
				'parent to track their children\'s progress in national or secondary school. ' +
				'The application provides a real-time representation of the progress being made by the student.' +
				'The system utilizes technologies such as MySQL, Apache HTTP Server, PHP and JSON'
			]
		}
	];
}]);
