import Swiper from 'swiper';

$(document).ready(() => {
	const productDaySlider = new Swiper('.js-productDaySlider .swiper-container', {
		observer: true,
		observeParents: true,
		// effect: 'fade',
		speed: 800,
		spaceBetween: 10,
		loop: ($('.js-productDaySlider .swiper-slide').length >= 2),
		navigation: {
			nextEl: '.js-productDaySliderNext',
			prevEl: '.js-productDaySliderPrev'
		},
		pagination: {
			el: '.js-productDaySlider .swiper-pagination'
		}
	});
});
