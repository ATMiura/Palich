$(document).ready(() => {
	$('.js-tabLink').on('click', (event) => {
		const _this = $(event.currentTarget);
		const parent = _this.parent();
		const tabContent = $('' + _this.attr('href') + '');

		event.preventDefault();

		parent
			.addClass('is-active')
			.siblings()
			.removeClass('is-active');

		tabContent
			.show()
			.siblings()
			.hide();
	});
});
