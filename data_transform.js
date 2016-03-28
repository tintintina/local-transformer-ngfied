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
$("#url-encode").submit(function(event){
	var str = $("#url-encode-input").val();
	var encoded = urlEncode(str);
	$("#url-encode-output").val(encoded);
	event.preventDefault();
});

$("#url-decode").submit(function(event){
	var str = $("#url-decode-input").val();
	var decoded = urlDecode(str);
	$("#url-decode-output").val(decoded);
	event.preventDefault();
});

$("#base64-encode").submit(function(event){
	resetForm(this);
	var str = $("#base64-encode-input").val();

	try {
		var encoded = base64Encode(str);
		$("#base64-encode-output").val(encoded); 
		$("#base64-encode .form-feedback").removeClass("alert alert-danger");
		$("#base64-encode .form-feedback").empty();
	} catch(e) {
		if (e instanceof FormInputException) {
			showError(this, e.message);
		}
	}
	event.preventDefault();
});

$("#base64-decode").submit(function(event){
	var str = $("#base64-decode-input").val();
	var decoded = base64Decode(str);
	$("#base64-decode-output").val(decoded);
	event.preventDefault();
});

$("#xml-format").submit(function(event){
	var str = $("#xml-format-input").val();
	var prettyfied = xmlSoPretty(str);
	$("#xml-format-output").val(prettyfied);
	event.preventDefault();
});

$("#json-format").submit(function(event){
	resetForm(this);
	var str = $("#json-format-input").val();
	try {
		var prettyfied = jsonSoPretty(str);
		$("#json-format-output").val(prettyfied);
		$("#json-format .form-feedback").removeClass("alert alert-danger");
		$("#json-format .form-feedback").empty();
	} catch (e) {
		if (e instanceof FormInputException) {
			$("#json-format .form-feedback").addClass("alert alert-danger");
			$("#json-format .form-feedback").text(e.message);
		}
	}
	event.preventDefault();
});
$("form").on("reset", function(e) {
	resetForm(this);
});