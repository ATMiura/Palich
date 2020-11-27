//$(document).on('click touch','.modal.welcome .city-link', function () {
//	$(".modal-steps").load("/local/inc/ajax/step-modal.php",{
//		"step":$(this).parents('.modal-step').data('step'),
//		"city":$(this).text()
//	});
//});

$(document).ready(function () {
	let stepFirst = 1;
	$.post("/local/inc/ajax/step-modal.php",
	{
		'modal-step': stepFirst
	}, function(data) {
		var data = JSON.parse(data);
		$('.modal-step-block').html(data.layout);
	});

	if($(window).width() < 576){
		$('.modal.welcome .modal__inner').prepend($('.step-back'));
	}
});

window.step = function(step,city,type) {

	$.fancybox.close();
	$.fancybox.open( {
		//selector: element,
		src: '#welcome',
		type : 'inline',
		touch: false,
		autoFocus: false,
		fullScreen: true,
		baseClass: "modal__custom",
		infobar: false,
		buttons: false,
	});
	$('.welcome .delivery-item__text').equalHeights();

	let	stepCurrent = step,
		stepPrev = stepCurrent-1,
		stepNext = stepCurrent+1;

	$.post("/local/inc/ajax/step-modal.php",
		{
			'modal-step':stepNext,
			'modal-city':city,
			'modal-delivery-type':type
		}, function(data) {
			var data = JSON.parse(data);

			console.log("Шаг тек " + stepCurrent);
			console.log("Шаг прев " + stepPrev);
			console.log("Шаг некст " + stepNext);
			console.log("Город " + city);
			console.log("Тип доставки " + type);


			$('.modal.welcome .modal__title').text(data.title);
			$('.modal.welcome .modal__text').text(data.text);


			if(stepNext==2){
				$('[data-step-number="1"] .step-item__name').text(data.city);
			}
			if(stepNext==3){
				$('[data-step-number="2"]').children().last().remove();
				$('[data-step-number="2"]').append(data.logo);
			}

			$('[data-step-number="'+stepCurrent+'"]').addClass('complete').removeClass('current active');
			$('[data-step-number="'+stepNext+'"]').addClass('current active');
			//$('[data-step-number="'+stepNext+'"]').addClass('current active');
			$('.modal-step-block').html(data.layout);
		});
}

$(document).on('click touch','[data-step-next]', function () {

	let stepCurrent = $(this).parents('.modal-step').data('step'),
		city = $(this).attr("rel"),
		deliveryType = $(this).parents('.delivery-item').data('delivery-type');

	window.step(stepCurrent,city,deliveryType);

}).on('click touch', '.step-back__link', function () {
	let stepCurrent = $(this).parents('.modal-step-block').find('.modal-step').data('step'),
		stepBack = stepCurrent-1;
	console.log(stepBack);
	$.post("/local/inc/ajax/step-modal.php",
		{
			'modal-step': stepBack
		}, function(data) {
			var data = JSON.parse(data);
			$('[data-step-number="'+stepCurrent+'"]').removeClass('current active complete');
			$('[data-step-number="'+stepBack+'"]').addClass('current active').removeClass('complete');
			$('.modal-step-block').html(data.layout);
		});
});

$(document).on('click touch','[data-change-delivery-type]', function () {
	window.step(2);
});
$(document).on('click touch','[data-change-delivery-address]', function () {
	window.step(3);
});
