$(window).scroll(function(){
	var headerMain = $('.header-main'),
		scroll = $(window).scrollTop(),
		headerTop = $('.header-top'),
		headerTopHeight = headerTop.height();

	if($(window).width() > 768 ){
		if (scroll >= headerTopHeight) headerMain.addClass('fixed');
		else headerMain.removeClass('fixed');
	} else {

	}
});
