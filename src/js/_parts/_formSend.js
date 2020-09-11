
function orderSend(form, formData, formName) {
	$.ajax({
		type: "POST",
		data: formData,
		dataType: 'json',
		url: form.attr('action'),
		processData: false,
		contentType: false,
		beforeSend: function () {
			// Удаляем блок с ошибками перед отправкой
			//form.find('.form-row--errors').remove();
		},
		success: function (data) {
			if (data.status == 0) {
				// Успешный успех
				$('[data-form="'+formName+'"]').addClass('submited');
				$('[data-form="'+formName+'"] .express__title').remove();
				$('[data-form="'+formName+'"] .express__text').html(data.message);
				console.log(data.status+" " + data.message);
			} else if (data.status == 1) {
				// Не можем доставить за 90 минут
				console.log(data.status + " " + data.message);
				$('[data-form="'+formName+'"] .form_group').append('<div class="form_error">'+ data.message +'</div>');
			} else if (data.status == 2) {
				// Неверно заполнены данные
				console.log(data.status + " " + data.message);
				$('[data-form="'+formName+'"] .form_group').append('<div class="form_error">'+ data.message +'</div>');
			}
		}
	});
}

$(document).on('submit', "[data-form-no-ajax]", function () {
	//let self = this;
	let form = $(this);
	let formData = new FormData(form[0]);
	let formName = form.data('form');

	orderSend(form, formData, formName);
	return false;
});

/*$('[data-form-open-form-sms]').on('form::valid', function(e) {
	let form = $(this);
	let formData = new FormData(form[0]);
	let $val = form.find('input[data-input-required="phone"]').val();
	$('#loginSMS').find('[data-number-phone-sms]').text($val);
	$('#loginSMS').find('[data-number-phone-sms-number]').val($val);
	$('.request-code__time .display').html(60);
	self.a_loaded();

	self.sendSms(form, formData);
});

$('[data-form="subscription"]').on('form::valid', function(e) {
	let form = $(this);
	let formData = new FormData(form[0]);
	let $val = form.find('input[data-input-required="phone"]').val();
	$('#loginSMS').find('[data-number-phone-sms]').text($val);
	$('#loginSMS').find('[data-number-phone-sms-number]').val($val);
	$('.request-code__time .display').html(60);
	self.a_loaded();

	self.sendSubscription(form, formData);
});*/



/*send(form, formData) {
	$.ajax({
		type: "POST",
		data: formData,
		url: form.attr('action') || (window.SITE_TEMPLATE_PATH ? window.SITE_TEMPLATE_PATH + "/ajax/form.php" : ''),
		processData: false,
		contentType: false,
		beforeSend: function () {
			// Удаляем блок с ошибками перед отправкой
			form.find('.form-row--errors').remove();
		},
		success: function (data) {
			let parsedData = JSON.parse(data);
			let $modal = $('#callSuccess');
			let $container = $modal.find('.modal__head');

			if (parsedData.errors) {
				// Кидаем ошибки в начало формы
				form.prepend('<div class="form-row form-row--errors"></div>');
				var errorsBlock = form.find('.form-row--errors');

				// Каждую ошибку добавляем в алерт
				parsedData.errors.forEach(function (item) {
					errorsBlock.prepend('<div class="alert alert--red">' + item + '</div>');
				});
				// window.setTimeout(() => { App.preloader.hide(); }, 1000);
			} else {
				form.trigger('form::successful', parsedData);
				$modal.find($('.modal__head')).remove();
				$modal.prepend(parsedData);
				// Очищаем форму
				// if (!form.attr('data-ajax-noclean')) {
				//     form[0].reset();
				//     form.find('[data-attach-label]').text('Прикрепить чек');
				//     form.find('[data-attach-clear]').removeClass('active');
				// }

				// App.preloader.hide();
				$.fancybox.destroy();
				$.fancybox.open({
					src  : form.attr('data-ajax-success-form') || '#callSuccess',
					type : 'inline',
					opts : {
						baseClass: "fancybox-modal",
						buttons: [],
					}
				});
			}
		},
		error: function (a,b,c) {
			form.trigger('form::successful');
			form[0].reset();

			form.find('[data-attach-clear]').removeClass('active');
			$.fancybox.close();
			$.fancybox.open({
				src  : '#modal-error',
				type : 'inline'
			});
			console.debug(a,b,c);
			// App.preloader.hide();
		}
	});
}*/
