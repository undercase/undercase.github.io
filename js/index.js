$(function() {
	social = $(".social");
	fadetime = 400;
	// Start with it faded out
	social.stop().fadeTo(0, 0.5);
	social.mouseover(function() {
		$(this).stop().fadeTo(fadetime, 1.0);
	});
	social.mouseout(function() {
		$(this).stop().fadeTo(fadetime, 0.5);
	});
});