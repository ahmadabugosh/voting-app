( function () {

	var app= angular.module('app', ['ngRoute', 'angular-jwt']);

	app.config(function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);
		$routeProvider.when('/', {

			templateURL:'./templates/main.html'
			controller:'MainController',
			controllerAs:'vm'
		});

		$routeProvider.when('/login', {

		templateURL:'./templates/login.html'
		controller:'LoginController',
		controllerAs:'vm'
		});

		$routeProvider.when('/register', {

		templateURL:'./templates/register.html'
		controller:'RegisterController',
		controllerAs:'vm'
		});

			$routeProvider.when('/polls', {

		templateURL:'./templates/polls.html'
		controller:'PollController',
		controllerAs:'vm'
		});

		$routeProvider.when('/profile', {

		templateURL:'./templates/profile.html'
		controller:'ProfileController',
		controllerAs:'vm'
		});


	});

	app.controller('MainController', MainController);

	function MainController($location, $window) {
		
	}


}())