$(window).on('load resize', function () {

	/* проверяет все блоки с data-move и перемещает в блоки в мобилке/десктопе на основе их атрибутов */
	if($(window).width() < 768){

		if($('[data-mobile-menu="catalog-links"] > *').length > 1){
			$('[data-mobile-menu="catalog-links"] .nav-list').remove();
		}
		else {
			$('[data-desktop="catalog"] [data-move="catalog"]').clone().appendTo('[data-mobile-menu="catalog-links"]');
		}

		$('[data-mobile-menu="catalog-links"] .nav-list').removeAttr('data-move');
		$('[data-mobile-menu="catalog-links"] .nav-list .nav-item__submenu').remove();
		$('[data-mobile-menu="catalog-links"] .nav-list .nav-item').removeClass('.nav-item');

		setTimeout(function () {
			$('[data-move]').each(function (element) {
				let dataMoveAttr = $(this).data('move');
				$(this).siblings('.dropdown-block').appendTo('[data-mobile-menu="'+dataMoveAttr+'"]');
				$(this).prependTo('[data-mobile-menu="'+dataMoveAttr+'"]');
			});
		},100);

		//console.log('переставил на мобилку');

	} else if($(window).width() > 767){
		$('[data-move]').each(function (element) {
			let dataMoveAttr = $(this).data('move');
			$(this).siblings('.dropdown-block').appendTo('[data-desktop="'+dataMoveAttr+'"]');
			$(this).prependTo('[data-desktop="'+dataMoveAttr+'"]');
		});

		//console.log('переставил на пк');
	}

	/* перестановка блоков в деталке */
	$('[data-move-left-right]').each(function () {
		if($(window).width() < 992){
			$(this).appendTo('.product-col__left');
			$('[data-share-move]').appendTo('[data-share-mobile]');

		} else if($(window).width() > 991){
			$(this).appendTo('.product-col__right');

			$('[data-share-move]').appendTo('[data-share-desktop]');
		}
	});

});

$(document).ready(function () {

	/* закрытие мобильного меню */
	$('[data-mobile-menu-close]').on('click touch', function () {
		$('.mobile').removeClass('is-open');
		$('body').removeClass('mobile-open');

		$('[data-mobile-menu*="catalog-"]:not([data-mobile-menu="catalog-list"])').hide();
		$('[data-mobile-menu-type]').attr('data-mobile-menu-type','');
	});

	/* открытие мобильного меню */
	$('[data-mobile-menu="burger"]').on('click touch', function () {
		$('body').addClass('mobile-open');

		//$('[data-mobile-menu-type]').addClass('main-mobile');
		//$('[data-mobile-menu-type="main-mobile"]').parent().addClass('is-open');

		$('[data-mobile-menu*="catalog-"]:not([data-mobile-menu="catalog-list"])').hide();
		$('.mobile-menu-section:not([data-mobile-menu*="catalog-"])').show();

		$('[data-mobile-menu-type]').attr('data-mobile-menu-type','main-mobile');
		$('.mobile').addClass('is-open');
	});

	/* открытие мобильного меню на странице списка товаров */
	$('[data-catalog-mobile-menu]').on('click touch', function () {
		$('body').addClass('mobile-open');

		//$('[data-mobile-menu-type]').addClass('catalog-list-mobile');
		//$('[data-mobile-menu-type="catalog-list"]').parent().addClass('is-open');

		$('[data-mobile-menu-type]').attr('data-mobile-menu-type','catalog-list');
		$('.mobile-menu-section').hide();
		$('.mobile').addClass('is-open');

		let dataMoveAttrName = $(this).data('mobile-menu-title');
		let dataCatalogType = $(this).data('catalog-type');
		//console.log(dataCatalogType);
		$('.mobile-menu__title').text(dataMoveAttrName);
		$('[data-mobile-menu="catalog-'+dataCatalogType+'"]').show();
	});

	/* при клике на иконку поиска в шапке меню */
	$('.header-mobile__search').on('click touch', function () {
		$('body').addClass('mobile-open');

		$('[data-mobile-menu-type]').attr('data-mobile-menu-type','catalog-list');
		$('.mobile-menu-section').hide();
		$('[data-mobile-menu="search"]').show();
		$('.mobile').addClass('is-open');

		let dataMoveAttrName = $(this).data('mobile-menu-title');
		$('.mobile-menu__title').text(dataMoveAttrName);
	});
});


