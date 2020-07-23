$(document).ready(() => {
	const subnav = $('.aside-subnav');
	const asideToggleControl = $('.js-asideToggleControl');
	const body = $('body');

	$('.js-asideToggleControl').on('click', (event) => {
		const _this = $(event.currentTarget);
		const currentSubnav = _this.next();
		const windowWidth = $(window).width();

		if(windowWidth >= 768){
			subnav.not(currentSubnav).removeClass('is-open');
			asideToggleControl.not(_this).removeClass('is-active');
			_this.toggleClass('is-active');
			currentSubnav.toggleClass('is-open');

			currentSubnav.hasClass('is-open')
				? body.addClass('is-aside-subnav-open')
				: body.removeClass('is-aside-subnav-open');
		}
		else {
			_this.toggleClass('is-active');
			currentSubnav.toggleClass('is-open');
		}
	});

	$('.js-asideSubnavClose').on('click', (event) => {
		body.removeClass('is-aside-subnav-open');
		subnav.removeClass('is-open');
		asideToggleControl.removeClass('is-active');
	});

	$('.js-asideBurger').on('click', (event) => {
		const _this = $(event.currentTarget);
		body.toggleClass('is-aside-open');

		body.hasClass('is-aside-open')
			? disableBodyScroll(true, '.aside-menu')
			: disableBodyScroll(false);
	});

	$('.js-asideClose').on('click', (event) => {
		body.removeClass('is-aside-open');
		disableBodyScroll(false);
	});
});
