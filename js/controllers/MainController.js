app.controller('MainController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
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
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
}]);
