/* Вкладки - фирменные магазины */
$(document).ready(function () {
	$('.shops-nav__item:first-child, .shops-content-tab:first-child').addClass('active');
});
$(document).on('click touch', '[data-shops-nav]',function () {
	$('[data-shops-nav]').removeClass('active');
	$(this).addClass('active');

	let shops_view_type = $(this).data('shops-nav');
	$('.shops-content-tab').removeClass('active');
	$('[data-shops-content="'+ shops_view_type +'"]').addClass('active');
	console.log(shops_view_type);
});
