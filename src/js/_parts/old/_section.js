import Swiper from 'swiper';

$(document).ready(() => {
	const sectionSlider = new Swiper('.js-sectionSlider .swiper-container', {
		observer: true,
		observeParents: true,
		speed: 800,
		spaceBetween: 0,
		slidesPerView: 4,
		loop: true,
		navigation: {
			nextEl: '.js-sectionSliderNext',
			prevEl: '.js-sectionSliderPrev'
		},
		pagination: {
			el: '.js-sectionSlider .swiper-pagination',
			clickable: true
		},
		breakpoints: {
			10000: {
				slidesPerView: 4
			},
			1400: {
				slidesPerView: 3
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	});
});
