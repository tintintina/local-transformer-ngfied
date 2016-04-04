var dtApp = angular.module('dtApp', []);

dtApp.controller('dtController', ['$scope', '$location', function($scope, $location) {

	$scope.submit = function() {
		console.log("form submitted");
	};

	$scope.clear = function() {
		console.log("clear it out");
	}

	$scope.isActive = function (location) {
		return (location === $location.path()) || (location === '/url-encode' && $location.path() === '/');
	};

}]);