//$(document).on('click touch','.modal.welcome .city-link', function () {
//	$(".modal-steps").load("/local/inc/ajax/step-modal.php",{
//		"step":$(this).parents('.modal-step').data('step'),
//		"city":$(this).text()
//	});
//});

$(document).ready(function () {

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

	$('.fancybox-close-small').removeAttr("data-fancybox-close");

	//$('.welcome .delivery-item__text').equalHeights();

	let	stepCurrent = step,
		stepPrev = stepCurrent - 1,
		stepNext = +stepCurrent+ +1;

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
			console.log("Статус " + data.status);

			if(stepNext==1){
				$('.fancybox-container').addClass('fancybox-container--step-1');
			}

			// круги
			if(stepCurrent!==0 || stepCurrent!==1){
				$('[data-step-number="1"] .step-item__name').text(data.city);
				$('[data-step-number="1"]').addClass('complete');
			}

			if(stepCurrent==1 || stepCurrent==3){
				$('[data-step-number="3"]').removeClass('current active');
			}

			// загружаем лого
			if(stepCurrent==2 || stepCurrent==3){
				$('[data-step-number="2"]').children().last().remove();
				$('[data-step-number="2"]').append(data.logo);

				$('[data-step-number="2"]').addClass('complete');
			}

			$('[data-step-number="'+stepCurrent+'"]').addClass('complete').removeClass('current active');
			$('[data-step-number="'+stepNext+'"]').addClass('current active');

			// загружаемый контент
			$('.modal.welcome .modal__head').html(data.heading);
			$('.modal-step-block').html(data.layout);

			if(data.status==='no-delivery'){
				$('.step').hide();

				$('.modal__text').text(data.statusText);
				$('.delivery').hide();
				$('.modal-step').append(
					'<div class="modal__form"><div class="form_row form_submit"><div class="form_group"><a href="/catalog" class="button button__arrow shoplist_add", ">Посмотреть витрину</a></div></div></div>'
				);
			} else {
				$('.step').show();
			}

			if ($('[data-step="1"]').length) {
				$('.modal.welcome').removeClass('not-first');
			} else {
				$('.modal.welcome').addClass('not-first');
			}

			setTimeout(function () {
				if($(window).width() < 576){
					$('.modal.welcome .modal__inner > .step-back').remove();
				}
			},10);
			setTimeout(function () {
				if($(window).width() < 576){
					$('.modal.welcome .modal__inner').prepend($('.step-back'));
				}
			},100);
		});
}

$(document).on('click touch','[data-step-next]', function () {
	// Шагаем вперед

	let stepCurrent = $(this).parents('.modal-step').data('step'),
		city = $(this).attr("rel"),
		deliveryType = $(this).parents('.delivery-item').data('delivery-type');

	window.step(stepCurrent,city,deliveryType);

}).on('click touch', '.step-back__link', function () {
	// Шагаем назад

	let stepCurrent = $(this).parents('.modal__inner').find('.modal-step').data('step'),
		stepBack = stepCurrent - $(this).attr('rel');

	$.post("/local/inc/ajax/step-modal.php",
		{
			'modal-step': stepBack
		}, function(data) {
			var data = JSON.parse(data);

			// Круги
			if(stepBack==1){
				/* 1 - выбор города */
				$('[data-step-number="2"]').removeClass('current active complete');
			}

			$('.step').css('display','flex');

			if($('[data-step-number="2"] .step-item__name').length){

			} else {
				$('[data-step-number="2"] .step-item-delivery__picture').remove();
				$('[data-step-number="2"]').append('<div class="step-item__name">Мой способ доставки</div>');
			}

			if(stepBack==2){
				/* 2 - способ доставки */

				$('[data-step-number="2"]').addClass('complete');
				$('[data-step-number="3"]').removeClass('complete current active');
			}

			// загружаемый контент
			$('.modal.welcome .modal__head').html(data.heading);
			$('.modal-step-block').html(data.layout);


			$('[data-step-number="'+stepCurrent+'"]').removeClass('current active complete');
			$('[data-step-number="'+stepBack+'"]').addClass('current active').removeClass('complete');


			setTimeout(function () {
				if($(window).width() < 576){
					$('.modal.welcome .modal__inner > .step-back').remove();
				}
			},10);

			setTimeout(function () {
				if($(window).width() < 576){
					$('.modal.welcome .modal__inner').prepend($('.step-back'));
				}
			},100);

			if ($('[data-step="1"]').length) {
				$('.modal.welcome').removeClass('not-first');
			} else {
				$('.modal.welcome').addClass('not-first');
			}

			if (stepCurrent === 2) {
				$('.fancybox-close-small').css('display', 'none');
			}
		});
});

$(document).on("click", ".on_popup", function(){
	// При клике на кнопку в шапке

	var step = $(this).attr('step');
	city =  $(this).attr('city');
	delivery = $(this).attr('delivery');
	ajax = $(this).attr('ajax');
	window.step(step,city,delivery);

//	if(step==3 || step==4){
//		$(document).ajaxComplete(function () {
//			$('[data-step-number="2"]').addClass('complete');
//			$('[data-step-number="3"]').addClass('current active');
//		});
//	}
});

$(document).on('click touch', '[data-step-number]', function () {
	// При клике на круги

	let step = $(this).data('step-number')-1;
	window.step(step);

	if(step==0){
		// step 0 - выбор города

		$('[data-step-number]').not('[data-step-number="1"]').removeClass('active complete current');

		if($('[data-step-number="2"] .step-item__name').length){

		} else {
			$('[data-step-number="2"] .step-item-delivery__picture').remove();
			$('[data-step-number="2"]').append('<div class="step-item__name">Мой способ доставки</div>');
		}

		$('[data-step-number="3"] .step-item__name').text('Мой адрес');
	}
	if(step==1){
		// выбор доставки

		$('[data-step-number="3"]').removeClass('complete');
		$('[data-step-number="3"]').removeClass('current active');
	}
	//if(step==3){
	//	$(document).ajaxComplete(function () {
	//		$('[data-step-number="2"]').addClass('complete');
	//		$('[data-step-number="3"]').addClass('current active');
	//	});
	//}
});

//$(document).on('click touch','[data-change-delivery-type]', function () {
//	let step = $(this).data('step'),
//		city = $(this).data('city'),
//		deliveryType = $(this).data('delivery');
//	window.step(step, city, deliveryType);
//
//	$(document).ajaxComplete(function () {
//		$('[data-step-number="3"]').removeClass('current active');
//	});
//});
//$(document).on('click touch','[data-change-delivery-address]', function () {
//	let step = $(this).data('step'),
//		city = $(this).data('city'),
//		deliveryType = $(this).data('delivery');
//	window.step(step, city, deliveryType);
//});
$(document).on('click','.fancybox-close-small', function (e) {
	e.preventDefault();
	location.reload();
});
