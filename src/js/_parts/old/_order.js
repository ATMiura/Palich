$(document).ready(() => {
	$('.js-orderElemToggle').on('click', (event) => {
		const _this = $(event.currentTarget);
		const parent = _this.parents('.js-orderElem');
		const content = parent.find('.js-orderElemContent');

		_this.toggleClass('is-active');
		content.slideToggle(200);
	});
});
