( function () {

	var app= angular.module('app', ['ngRoute', 'angular-jwt']);

	app.config(function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		

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
		var vm=this;
		vm.title="MainController";

	}

		app.controller('LoginController', LoginController);

	function LoginController($location, $window) {
		var vm=this;
		vm.title="LoginController";
		
	}

		app.controller('RegisterController', RegisterController);

	function RegisterController($location, $window) {
		var vm=this;
		vm.title="RegisterController";
		
	}

		app.controller('ProfileController', ProfileController);

	function ProfileController($location, $window) {

		var vm=this;
		vm.title="ProfileController";
		
	}

		app.controller('PollsController', PollsController);

	function PollsController($location, $window) {
		var vm=this;
		vm.title="PollsController";
		
	}

		app.controller('PollController', PollController);

	function PollController($location, $window) {

		var vm=this;
		vm.title="PollController";
		
	}


}())