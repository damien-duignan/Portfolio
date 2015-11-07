var app = angular.module('PortfolioApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .when('/about', {
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    })
    .when('/projects', {
        controller: 'ProjectsController',
        templateUrl: 'views/projects.html'
    })
    .when('/skills', {
        controller: 'SkillsController',
        templateUrl: 'views/skills.html'
    })
    .when('/experience', {
        controller: 'XPController',
        templateUrl: 'views/experience.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});