import Swiper from 'swiper';

$(document).ready(function () {
	//if($('.js-productSlider .swiper-slide').length <= 1){
	//	$('.js-productSlider .swiper-pagination').hide();
	//	$('.js-productSlider .slider-button').hide();
	//}
	var $hero = $(this),
		$slides = $hero.find(".main-slider .swiper-slide");

	var heroSwiper = new Swiper('.main-slider .swiper-container', {
		effect: "slide",
		speed: 250,
		//spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		delay: 4000,
		navigation: {
			nextEl: ".main-slider .swiper-button-next",
			prevEl: ".main-slider .swiper-button-prev"
		}
	});

	var $progress = $(".progress"),
		$progressIndex = $progress.find("span.index"),
		$progressSlides = $progress.find("span.slides"),
		$progressBar = $progress.find(".progress-bar .back");

	var slides = $slides.length,
		progressSlides = slides;

	if (progressSlides < 10) {
		progressSlides = "0" + progressSlides;
	}

	$progressSlides.text(progressSlides);

	heroSwiper.on('slideChange', function () {
		var progressIndex = heroSwiper.realIndex + 1,
			progress = heroSwiper.realIndex / (slides - 1) * 100;

		if (progressIndex < 10) {
			progressIndex = "0" + progressIndex;
		}

		$progressIndex.text(progressIndex);
		$progressBar.css("width", progress + "%");
	});


	/* в списке товаров */
	var products_list_big = new Swiper('.products__list .swiper-container', {
		observer: true,
		observeParents: true,
		speed: 400,
		//spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: '.products__list .swiper-button-next',
			prevEl: '.products__list .swiper-button-prev',
		},
	});


});
