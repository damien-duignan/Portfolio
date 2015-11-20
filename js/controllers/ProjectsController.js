app.controller('ProjectsController', ['$scope', function($scope){
    $scope.description = 'In my spare time, I try to keep active to keep my skills updated ' +
    					'and keeping with current trends. Below are some examples of what I am working on.'
    $scope.tech = [
		{
			name: 'Django',
			description: [
				'Django is an open source MVC framework written and developed in Python. ' +
				'It comes with a lot of built in features to aid in the set up of your web application. ',
				'I am currently working through some books on Python & Django - <a href="http://' +
				'twoscoopspress.org/products/two-scoops-of-django-1-8">Two Scoops of Django</a>' +
				' and <a href="http://chimera.labs.oreilly.com/books/1234000000754">Test Driven Development with Python</a>.'
			]
		},
		{
			name: 'AngularJS',
			description: [
				'AngularJS is an open source MVC JavaScript Framework maintained by Google. ' +
				'It provides client-side MVC architectures, which aid in the development of single page applications.',
				'This site is built on the AngularJS framework. I plan to create more web applications using' +
				' AngularJS to broaden my knowledge.'
			]
		},
		{
			name: 'Bootstrap',
			description: [
				'Bootstrap is a responsive design framework built by Twitter. It simplifies the ' +
				'creation of responsive websites.',
				'I have learned the fundamentals of Responsive Design with Bootstrap, and I\'ll be creating more ' +
				'responsive websites in the coming months.'
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
				'The system utilizes technologies such as MySQL, Apache HTTP Server, PHP and JSON.'
			]
		}
	];
}]);
