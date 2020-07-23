import Swiper from 'swiper';

$(document).ready(() => {
	const body = $('body');

	$('.js-searchInput').on('change input', (event) => {
		const _this = $(event.currentTarget);
		const val = _this.val();

		(val.length > 0)
			? body.addClass('is-search-buttons-show is-search-result-open')
			: body.removeClass('is-search-buttons-show is-search-result-open is-search-form-show');
	});

	$('.js-searchClear').on('click', (event) => {
		$('.js-searchInput').val('').trigger('change');
	});

	$('.js-searchToggle').on('click', (event) => {
		body.toggleClass('is-search-form-show');
		if($(window).width() <= 767 && body.hasClass('is-search-form-show')){
			body.removeClass('is-menu-open');
			disableBodyScroll(false);
		}
	});

	$(document).on('searchSliderInit', () => {
		if($('.js-searchSlider').length){
			const searchSlider = new Swiper('.js-searchSlider .swiper-container', {
				observer: true,
				observeParents: true,
				speed: 600,
				spaceBetween: 25,
				slidesPerView: 3,
				loop: ($('.js-searchSlider .swiper-slide').length > 2),
				navigation: {
					nextEl: '.js-searchSliderNext',
					prevEl: '.js-searchSliderPrev'
				}
			});
		}
	});

	$(document).trigger('searchSliderInit');
});
