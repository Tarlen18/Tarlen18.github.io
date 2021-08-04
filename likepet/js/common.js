$(function() {

	// Custom JS
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".mouse-icon").click(function(){
		$("html, body").animate({
			scrollTop : $(".s-adv").offset().top
		}, 800);
	});

});
