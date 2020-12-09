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
			if(stepCurrent!==0 || stepCurrent!==1){
				$('[data-step-number="1"] .step-item__name').text(data.city);
				$('[data-step-number="1"]').addClass('complete');
			}

			if(data.logo){
				$('[data-step-number="2"]').children().last().remove();
				$('[data-step-number="2"]').append(data.logo);
			}

			if(data.status==='no-delivery'){
				$('.step').hide();
				$('.modal-step').append(
					'<div class="modal__form"><div class="form_row form_submit"><div class="form_group"><a class="button button__arrow shoplist_add" rel="'+city+', ">Посмотреть витрину</a></div></div></div>'
				);
			} else {
				$('.step').show();
			}

			$('[data-step-number="'+stepCurrent+'"]').addClass('complete').removeClass('current active');
			$('[data-step-number="'+stepNext+'"]').addClass('current active');

			$('.modal.welcome .modal__head').html(data.heading);

			$('.modal-step-block').html(data.layout);

			if (stepCurrent === 1) {
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

	let stepCurrent = $(this).parents('.modal-step').data('step'),
		city = $(this).attr("rel"),
		deliveryType = $(this).parents('.delivery-item').data('delivery-type');

	window.step(stepCurrent,city,deliveryType);

}).on('click touch', '.step-back__link', function () {
	let stepCurrent = $(this).parents('.modal__inner').find('.modal-step').data('step'),
		stepBack = stepCurrent - $(this).attr('rel');

	$.post("/local/inc/ajax/step-modal.php",
		{
			'modal-step': stepBack
		}, function(data) {
			var data = JSON.parse(data);

			$('[data-step-number="'+stepCurrent+'"]').removeClass('current active complete');
			$('[data-step-number="'+stepBack+'"]').addClass('current active').removeClass('complete');

			$('.modal.welcome .modal__head').html(data.heading);

			$('.modal-step-block').html(data.layout);

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

			if (stepCurrent === 1) {
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
	var step = $(this).attr('step');
	city =  $(this).attr('city');
	delivery = $(this).attr('delivery');
	ajax = $(this).attr('ajax');
	window.step(step,city,delivery);

	if(step==3){
		$(document).ajaxComplete(function () {
			$('[data-step-number="2"]').addClass('current active');
		});
	}
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
