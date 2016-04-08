function urlEncode(s) {
	return encodeURIComponent(s);
}

function urlDecode(s) {
	return decodeURIComponent(s);
}

function base64Decode(s) {
	return atob(s);
}

function base64Encode(s) {
	try {
		return btoa(s);
	} catch(e) {
		if (e.name == "InvalidCharacterError") {
			throw new FormInputException("So sorry, can't handle unicode just yet");
		}
	}
}

function xmlSoPretty(xmlString) {
	return vkbeautify.xml(xmlString);
}

function jsonSoPretty(jsonString) {
	try {
		var json = JSON.parse(jsonString);
		return JSON.stringify(json, null, 4);
	} catch(e) {
		if (e instanceof SyntaxError) {
			throw new FormInputException("Oopsie, invalid json");
		}
	}
}
function FormInputException(message) {
	this.message = message;
}
function showError(section, errorMessage) {
	$(".form-feedback", section).addClass("alert alert-danger");
	$(".form-feedback", section).text(errorMessage);
}
function resetForm(section) {
	$(".form-feedback", section).removeClass("alert alert-danger");
	$(".form-feedback", section).empty();
}