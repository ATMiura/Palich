$(document).on('ready ajaxComplete', function () {
	$('.express__change').on('click touch', function () {

		var parentBlock = $(this).parents('.express');

		$(this).hide();
		parentBlock.removeClass('submited');
		parentBlock.find('.express__title').text('Экспресс доставка до 90 минут!');
		parentBlock.find('.express__address').text('').hide();
	});
});
