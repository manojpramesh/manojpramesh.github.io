(function($) {
	'use strict';

	$(".header-img").height($(window).height());
	
	new WOW().init();

	var topMenu = $("#top-menu");			   
	$(window).scroll(function() {
		if ($(window).scrollTop() > topMenu.position().top) topMenu.addClass("stick");
		else topMenu.removeClass("stick");
	});

})($);

