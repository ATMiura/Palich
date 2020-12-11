$(window).scroll(function(){
	var headerMain = $('.header-main'),
		headerDelivery = $('.header-delivery'),
		scroll = $(window).scrollTop(),
		headerTop = $('.header-top'),
		headerTopHeight = headerTop.height(),
		headerMainHeight = headerMain.height();
		headerDeliveryHeight = headerDelivery.height();

		mainWrap = $('.main');

	if (scroll >= headerTopHeight) {
		headerMain.addClass('fixed');
		headerDelivery
			.addClass('fixed')
			.css(
				{
					'top': headerMainHeight,
					'transition': 'none'
				}
			);
		mainWrap
			.css('padding-top', headerTopHeight + headerDeliveryHeight + 60 + 'px');
	} else {
		headerMain.removeClass('fixed');
		headerDelivery
			.removeClass('fixed')
			.css('top', '0');
		mainWrap
			.css('padding-top', '0');
	}

	if($(window).width() < 992 ){
		if (scroll >= headerTopHeight) {
			headerTop
				.addClass('fixed')
				.css('top', '0');
			headerDelivery
				.addClass('fixed')
				.css(
					{
						'top': headerTopHeight,
						'transition': 'none'
					}
				);
			mainWrap
				.css('padding-top', headerTopHeight + headerDeliveryHeight + 80 + 'px');
		} else {
			headerTop
				.removeClass('fixed')
				.css('top', '0');
			headerDelivery
				.removeClass('fixed')
				.css('top', '0');
			mainWrap
				.css('padding-top', '0');
		}

	} else {
		headerTop.removeClass('fixed');
	}
});
