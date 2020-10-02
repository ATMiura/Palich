$(document).on('submit', "[data-form-no-ajax]", function () {
	let form = $(this);
	let formData = new FormData(form[0]);
	let formName = form.data('form');
	let formCurUrl = form.data('url');
	let formRedirect = form.data('redirect');
	let formAction = form.data('action');

	submitFormValidate('Y','true', form, formData, formName, formCurUrl, formRedirect, formAction);
	return false;
});

function submitFormValidate(val, valid, form, formData, formName, formCurUrl, formRedirect, formAction){
	form.find('.form_error').remove();

	form.addClass('submitting');
	form.find('.button').wrap('<div class="submitting__loader"></div>');

	if(valid == undefined) {
		valid = false;
	}
	if (valid) {
		var t = true;

		console.log("Valid:" + valid);

		if(formName == 'express') {
			$('[data-form="express"] .input--required').each(function () {
				var $this = $(this);
				//var type = $this.attr('data-input-required') || 'text';
				if ($this.val() == "") {
					form.removeClass('submitting');
					form.find('.button').unwrap('.submitting__loader');

					$this
						.addClass('invalid')
						.parents('.form_group')
						.append("<span class='form_error'>Обязательное поле</span>");
					t = false;
				} else if($.trim($(this).val()).indexOf(",") == -1){
					//console.log('запятая');
					form.removeClass('submitting');
					form.find('.button').unwrap('.submitting__loader');

					$this
						.addClass('invalid')
						.parents('.form_group')
						.append("<span class='form_error'></span>");
					t = false;
				} else {
					$this.removeClass('invalid').siblings('.form_error').remove();
				}
			});
		} else {
			$('[data-form="'+formName+'"] .input--required').each(function () {
				var $this = $(this);
				//var type = $this.attr('data-input-required') || 'text';

				if($this.val() == ""){
					form.removeClass('submitting');
					form.find('.button').unwrap('.submitting__loader');

					$this
						.addClass('invalid')
						.parents('.form_group')
						.append("<span class='form_error'>Обязательное поле</span>");

					if ($this.parents('.dropdown-select')) {
						$this
							.parents('.dropdown-select')
							.find('.dropdown-select__value')
							.removeClass('invalid');
						$this
							.parents('.dropdown-select')
							.find('.dropdown-select__label')
							.addClass('invalid');
					} else {}

					//let email = $(this).val();
					//if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
					//	//console.log('email сука');
					//	form.find('.form_error').text('email сука');
					//	//$this.removeClass('invalid').siblings('.form_error').remove();
					//} else {
					//	form.find('.form_error').text('а ты хорош');
					//}

					//function validateEmail($this) {
					//	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					//	return emailReg.test( $this );
					//}
					//if( !validateEmail($this)) {
					//	form.find('.form_error').text('email сука');
					//}

					t = false;
				} else {
					$this.removeClass('invalid').siblings('.form_error').removeClass().addClass('form_success');
				}
			});
		}

		console.log("Обязательные поля:" + t);

		function onAjaxSuccess(){
			$.ajax({
				type: "POST",
				data: formData,
				dataType: 'json',
				url: formAction,
				processData: false,
				contentType: false,
				beforeSend: function () {
					// Удаляем блок с ошибками перед отправкой
					//form.find('.form-row--errors').remove();
					//console.log("э вацапе бро " + formName);
				},
				success: function (data) {
					console.log("э вацапе бро " + formName + " status: "+ data.status);

					if(formName == 'express' || formName == 'cart') {
						if (data.status == 0) {
							// Успешный успех

							form.removeClass('submitting');
							form.find('.button').unwrap('.submitting__loader');

							//console.log(formCurUrl);

							if(formName == 'express'){
								form.parents('.' + formName).attr('class');
								form.parents('.' + formName).addClass('submited');
								form.parents('.' + formName).find('.express__title').remove();
								form.parents('.' + formName).find('.express__text').html(data.message);

								if (formCurUrl !== 'catalog') {
									var baseUrl = window.location.origin;
									$(location).prop('href', formRedirect);
								} else {
									location.reload();
								}
							} else if(formName == 'cart'){
								location.reload();
							}

							//console.log("Когда успех " + data.message);
						} else if (data.status == 1) {
							// Не можем доставить за 90 минут
							form.removeClass('submitting');
							form.find('.button').unwrap('.submitting__loader');

							if(formName == 'express'){
								form.parents('.' + formName).addClass('error error-time');

								form.parents('.' + formName).attr('class');
								form.parents('.' + formName).addClass('submited');
								form.parents('.' + formName).find('.express__title').remove();
								form.parents('.' + formName).find('.express__text').html(data.message);

								//form.find('.form_input').parents('.form_group').append("<span class='form_error'></span>");
								//form.find('.form_error').text(data.message);
							} else if(formName == 'cart'){
								form.append("<div class='form_row'><div class='form_group'><span class='form_error form_message'></span></div></div>");
								form.find('.form_message').text(data.message);
							}

							//console.log("Когда не можем " + data.message);
						} else if (data.status == 2) {
							// Неверно заполнены данные
							form.removeClass('submitting');
							form.find('.button').unwrap('.submitting__loader');

							if(formName == 'express'){
								form.find('.form_error').text(data.message);
							} else if(formName == 'cart'){
								form.find('.form_row').append("<div class='form_group'><span class='form_error'></span></div>");
								form.find('.form_error').text(data.message);
							}
							//console.log("Когда вы троите " + data.message);
						}
					}

					else if(formName == 'feedback' || formName == 'call') {
						form.removeClass('submitting');
						form.find('.button').unwrap('.submitting__loader');

						form.parents('.modal__inner').find('.modal__head').hide();
						form.parent().html(data.message);

						//console.log(data.message);
						//console.log("Форма: " + formName);
					} else if(formName == 'contacts') {
						form.removeClass('submitting');
						form.find('.button').unwrap('.submitting__loader');

						//form.parent().append(data);

					} else if(formName == 'subscription') {
						form.removeClass('submitting');
						form.find('.button').unwrap('.submitting__loader');

						form.remove('.form_error');

						form.append("<div class='form_row'><div class='form_group'><div class='form_error'>"+ data +"</div></div></div>");

						//form.find('.subscribe_inp').append(data);

					} else if(formName == 'order'){

						if(data.status == 0){
							//thxOrder();
							form.removeClass('submitting');
							form.find('.button').unwrap('.submitting__loader');

							$.fancybox.close();
							$.fancybox.open( {
								//selector: element,
								src: '#thx-order',
								type : 'inline',
								touch: false,
								autoFocus: false,
								fullScreen: true,
								baseClass: "modal__custom",
								infobar: false,
								buttons: false,
							});

							$('#thx-order .modal__text').html(data.text);
							$('.cart-ajax__order').html(data.message);

						} else {
							console.log("Чет не то, чинить нужно или нет");
						}

					} else {
						form.removeClass('submitting');
						form.find('.button').unwrap('.submitting__loader');

						console.log(data);
						//console.log("Форма: " + formName);
					}
				},
				error: function (data) {
					console.log("э вацапе бро error " + formName);
					console.log(data.status);
				}
			});
		}

		if (t) {
			$.post(
				//"/local/inc/ajax/"+formName+".php",
				$('[data-form="'+formName+'"]').serialize(),
				onAjaxSuccess()
			);
			return true;
		} else {
			$('html, body').animate({ scrollTop: $('[data-form="'+formName+'"] .invalid').offset().top-100 }, 500);
			if(formName == 'express') {
				onAjaxSuccess()
			}

			console.log('12312');
		}
	} else {
		console.log('Идеальная форма');
		return true;
	}
}
