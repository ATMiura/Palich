import Swiper from 'swiper';

$(document).ready(() => {
	if($('.js-productSlider .swiper-slide').length <= 1){
		$('.js-productSlider .swiper-pagination').hide();
		$('.js-productSlider .slider-button').hide();
	}

	const productSlider = new Swiper('.js-productSlider .swiper-container', {
		observer: true,
		observeParents: true,
		speed: 800,
		spaceBetween: 10,
		loop: ($('.js-productSlider .swiper-slide').length >= 2),
		navigation: {
			nextEl: '.js-productSliderNext',
			prevEl: '.js-productSliderPrev'
		},
		pagination: {
			el: '.js-productSlider .swiper-pagination'
		}
	});

	$('.js-accessoriesSlider').each((index, element) => {
		const container = $(element).find('.swiper-container');
		const prevEl = $(element).find('.js-accessoriesSliderPrev');
		const nextEl = $(element).find('.js-accessoriesSliderNext');
		const pagination = $(element).find('.swiper-pagination');

		const accessoriesSlider = new Swiper(container, {
			observer: true,
			observeParents: true,
			speed: 800,
			spaceBetween: 25,
			slidesPerView: 3,
			navigation: {
				nextEl: nextEl,
				prevEl: prevEl
			},
			pagination: {
				el: pagination
			},
			breakpoints: {
				10000: {
					slidesPerView: 4
				},
				1600: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 3
				},
				767: {
					slidesPerView: 1
				}
			}
		});
	});

	$('.js-productDescToggle').on('click', (event) => {
		const _this = $(event.currentTarget);
		const label = _this.data('label');
		const secondLabel = _this.data('second-label');
		const title = _this.find('span');
		const descToggle = _this.prev();

		_this.toggleClass('is-active');
		descToggle.toggleClass('is_expand');

		(_this.hasClass('is-active')) ? title.text(secondLabel) : title.text(label)
	});

	$('.js-countMinus').on('click', (event) => {
		const _this = $(event.currentTarget);
		const count = _this.parents('.js-count');
		const input = count.find('.js-countInput');

		if(input.val() <= 1) return false;

		input.val(parseFloat(input.val()) - 1);
	});

	$('.js-countPlus').on('click', (event) => {
		const _this = $(event.currentTarget);
		const count = _this.parents('.js-count');
		const input = count.find('.js-countInput');

		input.val(parseFloat(input.val()) + 1);
	});

	$('.js-productGroupToggle').on('click', (event) => {
		const _this = $(event.currentTarget);
		const next = _this.next();

		_this.toggleClass('is-active');
		next.fadeToggle(200);
	});
});
