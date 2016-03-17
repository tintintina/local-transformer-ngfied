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
	return btoa(s);
}

function xmlSoPretty(xmlString) {
	return vkbeautify.xml(xmlString);
}

function jsonSoPretty(jsonString) {
	var json = JSON.parse(jsonString);
	return JSON.stringify(json, null, 4);
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
	var str = $("#base64-encode-input").val();
	var encoded = base64Encode(str);
	$("#base64-encode-output").val(encoded);
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
	var str = $("#json-format-input").val();
	var prettyfied = jsonSoPretty(str);
	$("#json-format-output").val(prettyfied);
	event.preventDefault();
});