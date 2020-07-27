import Swiper from 'swiper';

$(document).ready(function () {
	//if($('.js-productSlider .swiper-slide').length <= 1){
	//	$('.js-productSlider .swiper-pagination').hide();
	//	$('.js-productSlider .slider-button').hide();
	//}

	$('.section-slider').each(function () {
		//var $hero = $(this),
		var data_slider_name = $(this).find('.swiper-container').data('slider-name');
		//console.log(data_slider_name);
		var $slides = $(this).find('[data-slider-name="'+data_slider_name+'"] .swiper-slide');

		if (data_slider_name=="stock-slider"){
			var heroSwiper = new Swiper('[data-slider-name="'+data_slider_name+'"].swiper-container', {
				effect: "slide",
				speed: 250,
				slidesPerView:'auto',
				spaceBetween: 0,
				loop: true,
				autoplay: {
					delay: 5000,
				},
				delay: 4000,
				navigation: {
					nextEl: '[data-slider-name="'+data_slider_name+'"] .swiper-button-next',
					prevEl: '[data-slider-name="'+data_slider_name+'"] .swiper-button-prev'
				}
			});
		} else {

			var heroSwiper = new Swiper('[data-slider-name="'+data_slider_name+'"].swiper-container', {
				effect: "slide",
				speed: 250,
				spaceBetween: 0,
				loop: true,
				autoplay: {
					delay: 5000,
				},
				delay: 4000,
				navigation: {
					nextEl: '[data-slider-name="'+data_slider_name+'"] .swiper-button-next',
					prevEl: '[data-slider-name="'+data_slider_name+'"] .swiper-button-prev'
				}
			});
		}

		var $progress = $('[data-slider-name="'+data_slider_name+'"] .progress'),
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
