$(document).ready(() => {
	const body = $('body');

	$('.js-menuBurger').on('click', (event) => {
		body.toggleClass('is-menu-open');

		if(body.hasClass('is-menu-open')){
			disableBodyScroll(true, '.menu');
			if($(window).width() <= 767 && body.hasClass('is-search-form-show')) body.removeClass('is-search-form-show');
		}
		else {
			disableBodyScroll(false);
		}
	});
});
