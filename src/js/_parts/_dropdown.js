/* выпадающий список */

/* убираем действие по умолчанию для ссылке, если она с иконкой */
$(document).on('click touch', '.dropdown:not(.header-search):not(.cart-field__city)', function () {
	$(this).addClass('is-open');
});
$(document).on('click touch', '.dropdown a.link-icon__text', function (event) {
	event.preventDefault();
});

$(document).on('click touch', '.header-burger__link', function (event) {
	event.preventDefault();
	$(this).parents('.dropdown').toggleClass('is-open');
}).on('click touch', function(event){
	var $trigger = $(".dropdown");
	if($trigger !== event.target && !$trigger.has(event.target).length){
		//$(".dropdown-block").slideUp("fast");
		$('.dropdown').removeClass('is-open');
	}
}).on('click touch', '.mobile .nav-item.has-submenu > .nav-item__link', function (event) {
	event.preventDefault();
	//if($(this).parents('.nav-item').hasClass('has-submenu')){
	//	console.log('false');
	//
	//} else {
	//	console.log('true');
	//	return true;
	//}
	if($(this).parents('.nav-item').hasClass('has-submenu')){
		$(this).parents('.nav-list').toggleClass('is-open');
		$(this).parents('.nav-item').toggleClass('active');
	} else {

	}

}).on('click touch', '.dropdown-delivery__item.express', function () {
	$(this).siblings('.express-type').addClass('active');
	$('.dropdown-delivery__item').hide();
}).on('click touch', '.express__close', function () {
	$(this).parents('.express-type').removeClass('active');
	$('.dropdown-delivery__item').removeAttr("style");
});


/* выпадаюищй список в корзине */
$(document).ready(function () {
	$(document).on('click', '.dropdown-select__label', function () {
		$(this).parents('.dropdown-select').toggleClass('is-open');
	}).on('click', '.dropdown-select__item', function () {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(this).parents('.dropdown-select').find('.dropdown-select__label__text').text($(this).text());
		$(this).parents('.dropdown-select').toggleClass('is-open');
		$(this).parents('.dropdown-select').find('.dropdown-select__value').val($(this).data('value'));
		$(this).parents('.dropdown-select').addClass('is-valid');
	});
});


/* выпадашка для поиска */
$(document).on('keyup', '.header-search .form-search__input', function () {
	$(this).parents('.dropdown').addClass('is-open');
});

/* выпадашка для изменения города в корзине */
$(document).on('click', '.cart-field-city__change', function () {
	$(this).parents('.dropdown').toggleClass('is-open');
});
