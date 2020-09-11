
// $(document).on('click', '.popup input[type="submit"]',function () {

//     submitFormValidate('Y','true');

//     form_class = $(this).parents('form').attr('class');

//     return false;
// });
//обратная связь
/*
$(document).on('submit', ".js-request-call-callback", function () {
	submitFormValidate('Y','true',"js-request-call-callback");
	return false;
});
//заказать звонок
$(document).on('submit', ".js-callback-form-call", function () {
	submitFormValidate('Y','true',"js-callback-form-call");
	return false;
});
//добавить адрес
$(document).on('submit', ".js-callback-form-city", function () {
	submitFormValidate('Y','true',"js-callback-form-city");
	return false;
});
//авторизация
$(document).on('submit', ".js-callback-form-auth", function () {
	submitFormValidate('Y','true',"js-callback-form-auth");
	return false;
});
*/


$(document).on('submit', "[data-form-no-ajax]", function () {
	let form = $(this);
	let formData = new FormData(form[0]);
	let formName = form.data('form');



	submitFormValidate('Y','true', form, formData, formName);
	return false;
});

function submitFormValidate(val, valid, form, formData, formName){

	form.find('.form_error').remove();
	form.addClass('submitting');

	if(valid === undefined) {
		valid = false;
	}
	if (valid) {
		var t = true;

		$('[data-form="'+formName+'"] .input--required').each(function () {
			var $this = $(this);
			//var type = $this.attr('data-input-required') || 'text';

			if ($this.val() == "") {
				$this
					.addClass('invalid')
					.parents('.form_group')
					.append("<span class='form_error'>Обязательное поле</span>");
				t = false;
			} else if($.trim($(this).val()).indexOf(",") == -1){
				console.log('запятая с*ка');
				$this
					.addClass('invalid')
					.parents('.form_group')
					.append("<span class='form_error'></span>");
				t = false;
			} else {
				$this
					.removeClass('invalid')
					.siblings('.form_error')
					.remove();
			}
		});

		console.log(t);

		function onAjaxSuccess(){
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
						form.parents('.'+formName).attr('class');
						form.parents('.'+formName).addClass('submited');
						form.parents('.'+formName).find('.express__title').remove();
						form.parents('.'+formName).find('.express__text').html(data.message);

						form.removeClass('submitting');

						//console.log("Когда успех " + data.message);
					} else if (data.status == 1) {
						// Не можем доставить за 90 минут
						form.removeClass('submitting');

						form.find('.form_input').parents('.form_group').append("<span class='form_error'></span>");
						form.find('.form_error').text(data.message);
						//console.log("Когда не можем " + data.message);
					} else if (data.status == 2) {
						// Неверно заполнены данные
						form.removeClass('submitting');

						form.find('.form_error').text(data.message);
						//console.log("Когда вы троите " + data.message);
					}
				}
			});
		}

		if (t) {
			$.post(
				"/local/inc/ajax/"+formName+".php",
				$('[data-form="'+formName+'"]').serialize(),
				onAjaxSuccess()
			);

			return true;

		} else {
			$('html, body').animate({ scrollTop: $('form .invalid').offset().top-100 }, 500);
			onAjaxSuccess()
		}
	} else {
		console.log('Делаем отправку форму сразу');
		return true;
	}
}
