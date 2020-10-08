$(window).on('load resize', function () {
	if($(window).width() < 768){
		$('.section.products .section-content').addClass('scroll scroll-x');
	}
	else if($(window).width() > 767) {
		$('.section.products .section-content').removeClass('scroll scroll-x');
	}
});

/*$('.js-countMinus').on('click', (event) => {
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
});*/
