$(document).ready( function() {
	var myPassWordifier = new PassWordifier();
	$("#submit-button").click( function(e) {
		e.preventDefault();
		var strFromForm = $.trim($('#password').val());
		var computed = myPassWordifier.passWordify(strFromForm);
		$('#output').text(computed);
	});
});