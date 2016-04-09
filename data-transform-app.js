angular
	.module('dtApp', [])
	.controller('DtController', DtController)
	.directive('bigInputOutput', BigInputOutput);

function DtController() {
	this.tab = "url-encode";
	this.sections = {
	    "url-encode": {
	        "inputPlaceholder": "String to URL Encode",
	        "functionName": "urlEncode"
	    },
	    "url-decode": {
	        "inputPlaceholder": "String to URL Decode",
	        "functionName": "urlDecode"
	    },
	    "base64-encode": {
	        "inputPlaceholder": "String to Base64 Encode",
	        "functionName": "base64Encode"
	    },
	    "base64-decode": {
	        "inputPlaceholder": "String to Base64 Decode",
	        "functionName": "base64Decode"
	    },
	    "xml-format": {
	        "inputPlaceholder": "XML to format",
	        "functionName": "xmlSoPretty"
	    },
	    "json-format": {
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
		var input = section.input;
		try {
			section.output = window[this.sections[this.tab].functionName](input);
		} catch(e) {
			if (e instanceof FormInputException) {
				this.errorFeedback = e.message;
			}
		}
	};

	this.clear = function(section) {
		this.errorFeedback = "";
	}
}

function BigInputOutput() {
	return {
		restrict: 'E',
		templateUrl: 'big-input-output/bio.template.html'
	}
}
