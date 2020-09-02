$(window).on('load resize', function () {
	if($(window).width() < 767){

		$('[data-desktop="catalog"] [data-move="catalog"]').clone().appendTo('[data-mobile-menu="catalog-links"]');
		$('[data-mobile-menu="catalog-links"] .nav-list').removeAttr('data-move');
		$('[data-mobile-menu="catalog-links"] .nav-list .nav-item__submenu').remove();
		$('[data-mobile-menu="catalog-links"] .nav-list .nav-item').removeClass('.nav-item');

		setTimeout(function () {
			$('[data-move]').each(function (element) {
				let dataMoveAttr = $(this).data('move');
				$(this).siblings('.dropdown-block').appendTo('[data-mobile-menu="'+dataMoveAttr+'"]');
				$(this).appendTo('[data-mobile-menu="'+dataMoveAttr+'"]');
			});
		},100);
	} else {

	}
});
