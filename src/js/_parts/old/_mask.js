let maskPlaceholder = '?+7 (999) 999-99-99';

$(document).ready(() => {
	$('.js-mask').each((index, element) => {
		var _this = $(element);

		if(_this.data('mask')){
			maskPlaceholder = _this.data('mask');
		}

		_this.mask(maskPlaceholder);
	});
});
