function deliveryInInpField(){
	var hc = $('.header-city .link-icon__text').text();
	$('.express__inp').val(hc+", ");
}

$(document).ready(function () {
	deliveryInInpField();
});
