$(window).on('load resize', function () {
	$('[data-move]').each(function (element) {
		let dataMoveAttr = $(this).data('move');
		//$(this).siblings('.dropdown-block').appendTo('[data-mobile-menu="'+dataMoveAttr+'"]');
		//$(this).appendTo('[data-mobile-menu="'+dataMoveAttr+'"]');
	});
});
