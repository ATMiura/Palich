//$(document).on('click touch','.modal.welcome .city-link', function () {
//	$(".modal-steps").load("/local/inc/ajax/step-modal.php",{
//		"step":$(this).parents('.modal-step').data('step'),
//		"city":$(this).text()
//	});
//});

$(document).on('click touch','.modal.welcome .city-link, .modal.welcome .delivery-item__link', function () {
	$.post("/local/inc/ajax/step-modal.php",
		{
			'modal-step':$(this).parents('.modal-step').data('step')+1,
			'modal-city':$(this).text()
		}, function(data) {
			var data = JSON.parse(data);
			console.log(data);
			//console.log(data.step);
			//console.log(data.city);
			$('.modal-step-block').html(data.layout);
		});
}).on('click touch', '.step-back__link', function () {
	let stepBack = $(this).parents('.modal-step-block').find('.modal-step').data('step')-1;
	console.log(stepBack);
	$.post("/local/inc/ajax/step-modal.php",
		{
			'modal-step': stepBack
		}, function(data) {
			var data = JSON.parse(data);
			console.log(data);
			console.log('Шаг '+data.step);
			//console.log(data.city);
			$('.modal-step-block').html(data.layout);
		});
});
