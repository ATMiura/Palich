function productPickup(){
	$(document).on('click', '.products-pickup__close', function (event) {
		event.preventDefault();
		$(this).parents('.products__item__inner').removeClass('pickup-show');
		//$(this).parents('.products-pickup').hide();
		$('body').removeClass('products-pickup-bg');
	});

	//$(document).on('click', '.products__item__cart', function (event) {
	//	event.preventDefault();
	//	$(this).parents('.products__item__inner').addClass('pickup-show');
	//	setTimeout(function () {
	//		$('.products__item__inner').removeClass('pickup-show');
	//	},1000);
	//});

	if($(window).width() < 992){
		$('.products__item__cart').on({
			click: function() {
				$(this).parents('.products__item__inner').addClass('pickup-show');
				//setTimeout(function () {
				//	$('.products__item__inner').removeClass('pickup-show');
				//},1000);
			}
		});
	} else {
		$('.products__item__cart').on({
			mouseenter: function() {
				$(this).parents('.products__item__inner').addClass('on-hover');
				let positionTop = $(this).position().top;
				$(this).parents('.products__item__inner').find('.products-pickup').css({ 'bottom': 'calc(107% - ' + positionTop+ 'px)' })
			},
			mouseleave: function() {
				$(this).parents('.products__item__inner').removeClass('on-hover');
			}
		});
	}
}

function pickupHide(){

}

$(document).ready(function () {
	productPickup();
});

$(document).ajaxComplete(function () {
	productPickup();
});
