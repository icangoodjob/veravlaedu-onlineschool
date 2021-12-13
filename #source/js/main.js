// Раскрывающийся список
$(document).ready(function() {
	$('.structure__head').click(function(event) {
		if($('.structure__items').hasClass('items')){
			$('.structure__head').not($(this)).removeClass('active');
			$('.structure__arrow').not($(this)).toggleClass('transform');
			$('.structure__list').not($(this).next()).slideUp(800);
		}
		$(this).toggleClass('active').next().slideToggle(800);
	});
});

// Sliders
const sliders = document.querySelectorAll('.slider__container');
sliders.forEach(function(el) {
	const swiper = new Swiper(el, {
		loop: true,
		slidesPerGroup: 1,
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed: 1000,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		grabCursor: true,
		watchOverflow: true,
		loopAdditionalSlides: 2,
		preloadImages: false,
		slideClass: "slider__item",
		wrapperClass: "slider__wrapper",
		navigation: {
			nextEl: el.querySelector('.slider__controls .slider-arrow-next'),
			prevEl: el.querySelector('.slider__controls .slider-arrow-prev'),
		},
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 'auto',
			},
			767: {
				slidesPerView: 'auto',
			},
			992: {
				slidesPerView: 'auto',
			},
		},
	});
});

// Маска на телефон
window.addEventListener("DOMContentLoaded", function() {
	[].forEach.call( document.querySelectorAll('input[name="tel"]'), function(input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___-__-__",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, ""),
			new_value = matrix.replace(/[_\d]/g, function(a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a
			});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function(a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5)  this.value = ""
		}
	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false)
});
});

	// Запрещаем вводить цифры
	function noDigits(event) {
		if ("1234567890".indexOf(event.key) != -1){
			event.preventDefault();
		}
	}

	// Календарь
	$('.datepicker-here').each(function() {
		$(this).datepicker({
			format: "dd/mm/yyyy",
			weekends: [6,0],
			inline: true,
			autoclose: true,
		});
	});
	$('.datepicker-here').click(function(e) {
		e.stopPropagation();
		$('.datepicker').addClass('active');
		$('.popup-form__date-arrow').addClass('transform');
	});
	$('.datepicker--cells').click(function(){
		$('.datepicker').removeClass('active');
		$('.popup-form__date-arrow').removeClass('transform');
	});

// Фиксированная шапка при скролле
const header = document.querySelector('header');
window.addEventListener('scroll', function(){
	if (window.scrollY >= 50 && !header.classList.contains('scrolled')){
		header.classList.add('scrolled');
	}
	else if (window.scrollY <= 50 && header.classList.contains('scrolled')){
		header.classList.remove('scrolled');
	}
})