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


	})


}())