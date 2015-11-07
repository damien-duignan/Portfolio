app.controller('MainController', ['$scope', function($scope){
	$scope.name = 'Damien Duignan';
	$scope.job = 'Software Developer';
	$scope.about = 'Software Developer based in Dublin';
 	$scope.navs = [
 		{
 			name: 'Home',
 			path: 'home'
 		},
 		{
 			name: 'About',
 			path: 'about'
 		},
 		{
 			name: 'Experience',
 			path: 'experience'
 		},
 		{
 			name: 'Projects',
 			path: 'projects'
 		},
 		{
 			name: 'Skills',
 			path: 'skills'
 		}
 	];
}]);
