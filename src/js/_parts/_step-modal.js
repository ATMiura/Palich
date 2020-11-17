//$(document).on('click touch','.modal.welcome .city-link', function () {
//	$(".modal-steps").load("/local/inc/ajax/step-modal.php",{
//		"step":$(this).parents('.modal-step').data('step'),
//		"city":$(this).text()
//	});
//});

$(document).on('click touch','.modal.welcome .city-link, .modal.welcome .delivery-item__link', function () {
	let	stepCurrent = $(this).parents('.modal-step').data('step'),
		stepPrev = stepCurrent-1,
		stepNext = stepCurrent+1;
	if(stepPrev==0){
		stepPrev=1;
	} else {
		stepPrev=stepCurrent-1;
	}
	$.post("/local/inc/ajax/step-modal.php",
		{
			'modal-step':stepNext,
			'modal-city':$(this).text()
		}, function(data) {
			var data = JSON.parse(data);
			//console.log(data);
			//console.log(data.step);
			//console.log(data.city);
			console.log("Пред. "+stepPrev);
			console.log("Тек. "+stepCurrent);
			console.log("След. "+stepNext);
			$('[data-step-number="'+stepCurrent+'"]').addClass('complete').removeClass('current active');
			$('[data-step-number="'+stepNext+'"]').addClass('current active');
			//$('[data-step-number="'+stepNext+'"]').addClass('current active');
			$('.modal-step-block').html(data.layout);
		});
}).on('click touch', '.step-back__link', function () {
	let stepCurrent = $(this).parents('.modal-step-block').find('.modal-step').data('step'),
		stepBack = stepCurrent-1;
	console.log(stepBack);
	$.post("/local/inc/ajax/step-modal.php",
		{
			'modal-step': stepBack
		}, function(data) {
			var data = JSON.parse(data);
			//console.log(data);
			//console.log('Шаг '+data.step);
			//console.log(data.city);
			$('[data-step-number="'+stepCurrent+'"]').removeClass('current active complete');
			$('[data-step-number="'+stepBack+'"]').addClass('current active').removeClass('complete');
			$('.modal-step-block').html(data.layout);
		});
});
