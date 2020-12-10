$(document).ready(function () {
	let deliveryColor = $('body').data('color');

	$('.icon-delivery-arrow, .icon-delivery-address-point').css('fill',deliveryColor);

	$('.header-delivery .button, .delivery-label').css('background-color',deliveryColor);
	$('.delivery-special .button').css('background-color',deliveryColor);

	if($(window).width() < 768){
		$('.header-cart__icon .icon-cart').css('fill',deliveryColor);
		$('.header-cart__number').css('background-color',deliveryColor);
	}
});
