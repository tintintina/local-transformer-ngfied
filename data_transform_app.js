angular
	.module('dtApp', [])
	.controller('DtController', DtController);

DtController.$inject = ['$location'];

function DtController($location) {

	this.submit = function() {
		console.log("form submitted");
	};

	this.clear = function() {
		console.log("clear it out");
	}

	this.isActive = function (location) {
		return (location === $location.path()) || (location === '/url-encode' && $location.path() === '/');
	};	
}