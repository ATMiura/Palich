import ionRangeSlider from 'ion-rangeslider';

$(document).ready(() => {
	const filterPriceSlider = $('.js-filterPriceSlider').ionRangeSlider({
		type: 'double',
		min: $(this).data('min'),
		max: $(this).data('max'),
		from: $(this).data('from'),
		to: $(this).data('to'),
		force_edges: true,
		hide_from_to: true,
		hide_min_max: true,
		onUpdate: function(data){
			if(data.from == data.to) {
				$('.js-filterPriceFrom').val(data.from);
				$('.js-filterPriceTo').val(data.to);
			}
		},
		onChange: function(data){
			$('.js-filterPriceFrom').val(data.from_pretty);
			$('.js-filterPriceTo').val(data.to_pretty);
		},
		onFinish: function(data){
			$('.js-filterPriceFrom').val(data.from_pretty);
			$('.js-filterPriceTo').val(data.to_pretty);
		}
	}).data('ionRangeSlider');

	$('.js-filterToggle').on('click', (event) => {
		const _this = $(event.currentTarget);
		const next = _this.next();

		_this.toggleClass('is-active');
		next.slideToggle(200);
	});

	$(document).on('change', '.js-filterPriceFrom', (event) => {
		const _this = $(event.currentTarget);
		const val = parseFloat(_this.val().replace(/\s/g, '').trim());

		filterPriceSlider.update({
			from: val
		});
	});

	$(document).on('change', '.js-filterPriceTo', (event) => {
		const _this = $(event.currentTarget);
		const val = parseFloat(_this.val().replace(/\s/g, '').trim());

		filterPriceSlider.update({
			to: val
		});
	});
});
