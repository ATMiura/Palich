$(document).ready(function () {
	let deliveryColor = $('body').data('color'),
		priceSale = $('.products__item__price__sale');

	window.customColor = function() {
		$('.icon-delivery-arrow, .icon-delivery-address-point').css('fill',deliveryColor);

		$('.header-delivery .button, .delivery-label').css('background-color',deliveryColor);
		$('.delivery-special .button').css({'background-color':deliveryColor, 'color': 'white'});
		$('.delivery-special .products__item__price__normal').css({'color':deliveryColor});
		$('.header-cart__number').css({'color': deliveryColor});

<<<<<<< HEAD
		priceSale.each(function () {
			$(this)
				.siblings('.products__item__price__sale')
				.css({'color': deliveryColor});
		});
=======
		//priceSale.each(function () {
		//	$(this)
		//		.siblings('.products__item__price__normal')
		//		.css({'color': deliveryColor});
		//});
>>>>>>> 13a542b7239fb9957f61f0004f32c58351b60c64

		if($(window).width() < 768){
			$('.header-cart__icon .icon-cart').css('fill',deliveryColor);
			$('.header-cart__number').css('background-color',deliveryColor);
		}
	}

	window.customColor();

});
$(document).ajaxComplete(function (){
	window.customColor();
})
