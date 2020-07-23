import Swiper from '../../../node_modules/swiper/dist/js/swiper.min.js';
import Parallax from 'parallax-js';

$(document).ready(() => {
	if($('.js-heroTopPartnersClone').length > 0 && $('.js-heroPartnersSlider').length > 0) {
		$('.js-heroTopPartnersClone').append($('.js-heroPartnersSlider').get(0).outerHTML);
	}

	const heroSlider = new Swiper('.js-heroSlider .swiper-container', {
		observer: true,
		observeParents: true,
		speed: 800,
		spaceBetween: 0,
		slidesPerView: 1,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.js-heroSliderNext',
			prevEl: '.js-heroSliderPrev'
		},
		pagination: {
			el: '.js-heroSlider .swiper-pagination',
			clickable: true
		}
	});

	const heroPartnersSlider = new Swiper('.js-heroPartnersSlider .swiper-container', {
		observer: true,
		observeParents: true,
		speed: 800,
		spaceBetween: 0,
		slidesPerView: 6,
		loop: true,
		navigation: {
			nextEl: '.js-heroPartnersSliderNext',
			prevEl: '.js-heroPartnersSliderPrev'
		},
		breakpoints: {
			10000: {
				slidesPerView: 6
			},
			1600: {
				slidesPerView: 5
			},
			1400: {
				slidesPerView: 4
			},
			1199: {
				slidesPerView: 'auto'
			}
		}
	});

	$('.js-parallax').each((index, element) => {
		const scene = $(element)[0];
		const parallaxInstance = new Parallax(scene, {
			selector: '.js-parallaxLayer',
			pointerEvents: true
		});
	});
});
