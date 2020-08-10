import Swiper from 'swiper';

$(document).ready(function () {
	//if($('.js-productSlider .swiper-slide').length <= 1){
	//	$('.js-productSlider .swiper-pagination').hide();
	//	$('.js-productSlider .slider-button').hide();
	//}

	$('.section-slider').each(function () {
		//var $hero = $(this),
		var data_slider_name = $(this).find('.swiper-container').data('slider-name');
		console.log(data_slider_name);
		//console.log(data_slider_name);
		var $slides = $(this).find('[data-slider-name="'+data_slider_name+'"] .swiper-slide');

		var $slides_no_dublicate = $slides.not('.swiper-slide-duplicate').length;
		//console.log($slides_no_dublicate);

		var $loop;

		if($slides_no_dublicate > 1){
			$loop = true;
		} else {
			$loop = false;
		}

		if (data_slider_name=="slider-stock"){
			var heroSwiper = new Swiper('[data-slider-name="'+data_slider_name+'"].swiper-container', {
				effect: "slide",
				speed: 250,
				slidesPerView: 'auto',
				spaceBetween: 70,
				loop: $loop,
				//loopedSlides: $slides_no_dublicate,
				autoplay: {
					delay: 5000,
				},
				delay: 4000,
				navigation: {
					nextEl: '[data-slider-name="'+data_slider_name+'"] .swiper-button-next',
					prevEl: '[data-slider-name="'+data_slider_name+'"] .swiper-button-prev'
				},
				breakpoints: {

				},
				on: {
					init: function() {
						checkArrow();
					},
					resize: function () {
						checkArrow();
					}
				}
			});
		} else {

			var heroSwiper = new Swiper('[data-slider-name="'+data_slider_name+'"].swiper-container', {
				effect: "slide",
				speed: 250,
				spaceBetween: 70,
				loop: true,
				//loopedSlides: $slides_no_dublicate,
				autoplay: {
					delay: 5000,
				},
				delay: 4000,
				navigation: {
					nextEl: '[data-slider-name="'+data_slider_name+'"] .swiper-button-next',
					prevEl: '[data-slider-name="'+data_slider_name+'"] .swiper-button-prev'
				},

			});
		}

		var $progress = $('[data-slider-name="'+data_slider_name+'"] + .options .progress'),
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

		function checkArrow() {
			var swiperPrev = $('[data-slider-name="'+data_slider_name+'"] .swiper-button-prev');
			var swiperNext = $('[data-slider-name="'+data_slider_name+'"] .swiper-button-next');
			if($slides_no_dublicate > 1){
				swiperPrev.show();
				swiperNext.show();
				$('options').show();
			} else {
				swiperPrev.hide();
				swiperNext.hide();
				$('[data-slider-name="'+data_slider_name+'"] .options').hide();
			}
		}
	});


	/* в списке товаров */
	var products_list_big = new Swiper('.products__item__slider .swiper-container', {
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

	/* где еще купить продукци "У Палыча" */
	var slider_web = new Swiper('.slider-web .swiper-container', {
		effect: "slide",
		observer: false,
		observeParents: false,
		speed: 400,
		slidesPerView: 'auto',
		loopedSlides: 5,
		spaceBetween: 70,
		loop: true,
		navigation: {
			nextEl: '.slider-web .swiper-button-next',
			prevEl: '.slider-web .swiper-button-prev',
		},
	});


});
