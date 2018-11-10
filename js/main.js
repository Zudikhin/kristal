$(document).ready(function () {
	"use strict";

	/*==============================
	Scroll
	==============================*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 0){
			$('.header__logo').addClass("header__logo--active");
		} else {
			$('.header__logo').removeClass("header__logo--active");
		}
	});

	/*==============================
	Header
	==============================*/
	$('.header__btn').on('click', function() {
		$(this).toggleClass('open');
		$('.header__nav').toggleClass('header__nav--active');
		$('.body').toggleClass('body--active');
	});

	$('.header__basket, .basket__close').on('click', function(e) {
		$('.basket').toggleClass('basket--active');
		$('.body').toggleClass('body--active');
		e.preventDefault();
	});

	$('.header__nav > li > a').on('click', function() {
		$(this).find("~ ul").stop().slideToggle(600);
	});

	/*==============================
	Description
	==============================*/
	$('.description__production, .production__close').on('click', function(e) {
		$('.production').toggleClass('production--active');
		$('.body').toggleClass('body--active');
		e.preventDefault();
	});

	/*==============================
	Datepicker
	==============================*/
	$('.datepicker').daterangepicker({
		"singleDatePicker": true,
		"locale": {
			"format": "DD/MM/YYYY",
			"separator": " - ",
			"applyLabel": "Apply",
			"cancelLabel": "Cancel",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
				"Вс",
				"Пн",
				"Вт",
				"Ср",
				"Чт",
				"Пт",
				"Сб"
			],
			"monthNames": [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь"
			],
			"firstDay": 1
		},
		"autoApply": true,
		"linkedCalendars": false,
		"showCustomRangeLabel": false,
		"opens": "left"
		}, function(start, end, label) {
			console.log("New date range selected: ' + start.format('L') + ' to ' + end.format('L') + ' (predefined range: ' + label + ')");
	});

	/*==============================
	Spinner
	==============================*/
	$('#spinner').spinner({
		min: 0,
		max: 10
	});

	/*==============================
	Modal
	==============================*/
	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true 
	});

	/*==============================
	Home
	==============================*/
	$('.home__carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 500,
		dots: true,
	});

	/*==============================
	Bg
	==============================*/
	$('.photo, .home__carousel .item').each(function(){
		if ($(this).attr('data-bg')){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	/*==============================
	Scroll bar
	==============================*/
	$('.example-scroll').mCustomScrollbar({
		axis:"x",
		scrollbarPosition:"outside",
		theme:"custom-bar1",
		advanced:{autoExpandHorizontalScroll:true}
	});

	$('.basket__content').mCustomScrollbar({
		axis:"y",
		scrollbarPosition:"outside",
		theme:"custom-bar2",
	});
});