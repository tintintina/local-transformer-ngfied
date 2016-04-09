angular
	.module('dtApp', [])
	.controller('DtController', DtController)
	.directive('bigInputOutput', BigInputOutput);

function DtController() {
	this.tab = "url-encode";

	this.setTab = function(tab) {
		this.tab = tab;
	}

	this.isTabSet = function(tab) {
		return this.tab === tab;
	}

	this.submit = function() {
		console.log("form submitted");
	};

	this.clear = function() {
		console.log("clear it out");
	}
}

function BigInputOutput() {
	return {
		restrict: 'E',
		templateUrl: 'big-input-output/bio.template.html'
	}
}
