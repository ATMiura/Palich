$(document).ready(() => {
	const productList = $('.catalog-list');

	$('.js-catalogViewControl').on('click', (event) => {
		const _this = $(event.currentTarget);
		const type = _this.data('view');

		_this.addClass('is-active').siblings().removeClass('is-active');

		(type == 'list')
			? productList.addClass('is_product_table_grid').removeClass('is_product_tile_grid')
			: productList.addClass('is_product_tile_grid').removeClass('is_product_table_grid');
	});

	$('.js-sortSelectList').on('change', (event) => {
		const _this = $(event.currentTarget);
		const checkedText = _this.find(':checked').text();
		const selectControl = _this.parents('.js-sortSelectControl');
		const selectTitle = selectControl.find('.js-sortSelectTitle');

		selectTitle.text(checkedText);
	});
});
