function productPickup(){
	$(document).on('click', '.products-pickup__close', function () {
		$(this).parents('.products-pickup').hide();
	});
}

$(document).ready(function () {
	productPickup();
});
