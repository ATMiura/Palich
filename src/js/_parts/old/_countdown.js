import '../_vendor/jquery.plugin.min';
import countdown from '../_vendor/jquery.countdown.min';
import '../_vendor/jquery.countdown-ru';

$(document).ready(() => {
	$('.js-countdown').each((index, element) => {
		const _this = $(element);
		const date = new Date(_this.data('countdown-date').replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

		_this.countdown({
			until: date,
			format: 'HMS',
			padZeroes: true,
			layout: _this.html()
		});
	});
});
