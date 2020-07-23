$(document).ready(() => {
	$('.js-checkoutDeliveryRadio').on('change', (event) => {
		const type = $(event.currentTarget).data('checkout-type');
		const section = $(`[data-section-type="${type}"]`);

		section.show().siblings().hide();

		$(document).trigger('deliveryMapUpdate');
	});
});
