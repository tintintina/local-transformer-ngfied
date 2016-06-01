angular
	.module('dtApp', [])
	.controller('DtController', DtController)
	.directive('bigInputOutput', BigInputOutput);

function DtController() {
	this.tab = "url-encode";
	this.sections = {
		"url-encode": {
			"title": "URL Encode",
			"inputPlaceholder": "String to URL Encode",
			"functionName": "urlEncode"
		},
		"url-decode": {
			"title": "URL Decode",
			"inputPlaceholder": "String to URL Decode",
			"functionName": "urlDecode"
		},
		"base64-encode": {
			"title": "Base64 Encode",
			"inputPlaceholder": "String to Base64 Encode",
			"functionName": "base64Encode"
		},
		"base64-decode": {
			"title": "Base64 Decode",
			"inputPlaceholder": "String to Base64 Decode",
			"functionName": "base64Decode"
		},
		"xml-format": {
			"title": "XML Format",
			"inputPlaceholder": "XML to format",
			"functionName": "xmlSoPretty"
		},
		"json-format": {
			"title": "JSON Format",
			"inputPlaceholder": "JSON to format",
			"functionName": "jsonSoPretty"
		}
	};

	this.setTab = function(tab) {
		this.tab = tab;
		this.clear();
	}

	this.isTabSet = function(tab) {
		return this.tab === tab;
	}

	this.submit = function(section) {
		this.clear();

		var input = section.input;

		try {
			section.output = window[this.sections[this.tab].functionName](input);
		} catch(e) {
			if (e instanceof FormInputException) {
				this.errorFeedback = e.message;
				section.output = "";
			}
		}
	};

	this.clear = function() {
		this.errorFeedback = "";
	}

}

function BigInputOutput() {
	return {
		restrict: 'E',
		templateUrl: 'big-input-output/bio.template.html'
	}
}
