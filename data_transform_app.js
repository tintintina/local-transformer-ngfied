var myAng = angular.module('dtApp', []);

myAng.controller('dtController', ['$scope', function($scope) {
	$scope.sections = [
		{name: 'url-encode', title: 'URL Encode', inputPlaceholder: 'String to URL Encode', buttonName: 'URL Encode'}
	];
	
	$scope.submit = function() {
		console.log("form submitted");
	};

	$scope.clear = function() {
		console.log("clear it out");
	}

}]);