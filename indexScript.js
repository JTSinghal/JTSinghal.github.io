$(document).ready(function() {
	// all custom jQuery will go here
	$("#projectButton").click(function() {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top - $("#header").height()}, 'slow');
	})

	$("#webGameButton").click(function() {
		$('html, body').animate({
			scrollTop: $("#webGame").offset().top - $("#header").height()}, 'slow');
	})

	$("#contactButton").click(function() {
		$('html, body').animate({
			//scrollTop: $(document).offset().top - $("#footer").height()}, 'slow');
			scrollTop: $(document).height()}, 'slow');
			//scrollBottom: $("#footer").height()}, 'slow');
	})
});