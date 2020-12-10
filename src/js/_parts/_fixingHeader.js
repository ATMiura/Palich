$(window).scroll(function(){
	var headerMain = $('.header-main'),
		headerDelivery = $('.header-delivery'),
		scroll = $(window).scrollTop(),
		headerTop = $('.header-top'),
		headerTopHeight = headerTop.height(),
		headerMainHeight = headerMain.height();

	if($(window).width() > 768 ){
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
		} else {
			headerMain.removeClass('fixed');
			headerDelivery
				.removeClass('fixed')
				.css('top', '0');
		}
	}
});
