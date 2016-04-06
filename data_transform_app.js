angular
	.module('dtApp', [])
	.controller('dtController', DtController);

DtController.$inject = ['$scope', '$location'];

function DtController($scope, $location) {

	$scope.submit = function() {
		console.log("form submitted");
	};

	$scope.clear = function() {
		console.log("clear it out");
	}

	$scope.isActive = function (location) {
		return (location === $location.path()) || (location === '/url-encode' && $location.path() === '/');
	};	
}