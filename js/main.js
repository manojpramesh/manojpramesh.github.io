(function ($) {
	'use strict';

	$(".header-img").height($(window).height());
	$(window).resize(function () {
		$(".header-img").height($(window).height());
	});

	new WOW().init();

	var topMenu = $("#top-menu");
	$(window).scroll(function () {
		if ($(window).scrollTop() > topMenu.position().top) topMenu.addClass("stick");
		else topMenu.removeClass("stick");
	});

	$(".main-menu ul.navbar-nav li ").on('click', function () {
		$(".main-menu ul.navbar-nav li").removeClass("active");
		$(this).addClass("active");
	});


	$('a.page-scroll').bind('click', function (event) {
		var _this = $(this);
		$('html, body').stop().animate({
			scrollTop: $(_this.attr('href')).offset().top - 55
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	$('#portfolio-content').mixItUp({
		animation: {
			animation: {
				duration: 400,
				effects: 'fade translateX(10%) stagger(34ms) translateY(10%) scale(0.01)',
				easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
			}
		}
	});

})($);

