/* выпадающий список */

/* убираем действие по умолчанию для ссылке, если она с иконкой */
$(document).on('click touch', '.dropdown:not(.header-search)', function () {
	$(this).toggleClass('is-open');
});
$(document).on('click touch', '.dropdown a.link-icon__text', function (event) {
	event.preventDefault();
});

$(document).on('click touch', '.header-burger__link', function (event) {
	event.preventDefault();
	$(this).parents('.dropdown').toggleClass('is-open');
}).on('click', function(event){
	var $trigger = $(".dropdown");
	if($trigger !== event.target && !$trigger.has(event.target).length){
		//$(".dropdown-block").slideUp("fast");
		$('.dropdown').removeClass('is-open');
	}
}).on('click touch', '.mobile .nav-item__link', function () {
	/*if($(this).parents('.nav-item').hasClass('has-submenu')){
		//console.log('false');
		//return false;
	} else {
		//console.log('true');
		//return true;
	}*/
	if($(this).parents('.nav-item').hasClass('has-submenu')){
		$(this).parents('.nav-list').toggleClass('is-open');
		$(this).parents('.nav-item').toggleClass('active');
	} else {

	}

}).on('click touch', '.dropdown-delivery__item.express', function () {
	$(this).siblings('.express-block').addClass('active');
}).on('click touch', '.express__close', function () {
	$(this).parents('.express-block').removeClass('active');
});


/* выпадаюищй список в корзине */
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


/* выпадашка для поиска */
$(document).on('keyup', '.header-search .form-search__input', function () {
	$(this).parents('.header-search').addClass('is-open');
});
