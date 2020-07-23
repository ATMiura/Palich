$(document).ready(() => {
	$('.js-alertClose').on('click', (event) => {
		const _this = $(event.currentTarget);
		const parent = _this.parents('.alert');

		parent.hide();
	});

	setTimeout(() => {
		$('.alert').addClass('is-show');
	}, 1000);
});
