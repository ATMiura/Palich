$(document).ready(function () {
	let deliveryColor = $('body').data('color'),
		priceSale = $('.products__item__price__sale');

	window.customColor = function() {
		$('.icon-delivery-arrow, .icon-delivery-address-point').css('fill',deliveryColor);

<<<<<<< HEAD
	$('.header-delivery .button, .delivery-label').css('background-color',deliveryColor);
	$('.delivery-special .button').css('background-color',deliveryColor);
=======
		$('.header-delivery .button, .delivery-label').css('background-color',deliveryColor);
		$('.delivery-special .button').css({'background-color':deliveryColor, 'color': 'white'});
		$('.header-cart__number').css({'color': deliveryColor});
>>>>>>> 202ff8b308bb410a61c804c67e2e237cb0153354

		priceSale.each(function () {
			$(this)
				.siblings('.products__item__price__normal')
				.css({'color': deliveryColor});
		});

		if($(window).width() < 768){
			$('.header-cart__icon .icon-cart').css('fill',deliveryColor);
			$('.header-cart__number').css('background-color',deliveryColor);
		}
	}

	window.customColor();

});
