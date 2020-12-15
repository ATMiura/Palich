function express__change(){
	$('.express__change').on('click touch', function (event) {
		event.preventDefault();

		var parentBlock = $(this).parents('.express');

		$(this).hide();
		parentBlock.removeClass('submited');
		parentBlock.find('.express__title').text('Экспресс доставка до 90 минут!');
		parentBlock.find('.express__address').text('').hide();
		parentBlock.removeClass('error');
	});
}

$(document).ready(function () {
	express__change();
});
$(document).ajaxComplete(function () {
	express__change();
});
