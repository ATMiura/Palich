$(window).on('load resize', function () {
	if($(window).width() < 768){
		$('.section.products .products__list').addClass('scroll scroll-x');
	}
	else if($(window).width() > 767) {
		$('.section.products .products__list').removeClass('scroll scroll-x');
	}
});
