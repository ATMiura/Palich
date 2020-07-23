import magnificPopup from 'magnific-popup';

$.extend(true, $.magnificPopup.defaults, {
	tClose: 'Закрыть (Esc)',
	tLoading: 'Загружается...',
		gallery: {
		tPrev: 'Предыдущая (←)',
		tNext: 'Следующая (→)',
		tCounter: '%curr% из %total%'
	},
	image: {
		tError: '<a href="%url%">Данная картинка</a> не может быть загружена.'
	},
	ajax: {
		tError: '<a href="%url%">Содержимое</a> не может быть загружено.'
	},
	closeMarkup: '<div class="mfp-close js-mfp-close"></div>',
	removalDelay: 300,
	closeBtnInside: true,
	fixedContentPos: false,
	autoFocusLast: false
});

function modalOpen(src, type){
    $.magnificPopup.open({
        items: {
            src: src,
            type: type || 'inline'
        },
        closeBtnInside: false,
        callbacks: {
            open: function() {
                $('html').addClass('mfp-open');
				disableBodyScroll(true, '.mfp-wrap');
            },
            close: function(){
                $('html').removeClass('mfp-open');
				disableBodyScroll(false);
            }
        }
    });
}

window.modalOpen = function(modal){
	modalOpen(modal);
}

$(document).on('click', '.js-modalClose', (event) => {
	$.magnificPopup.close();
});

$(document).on('click', '.js-modalLink', (event) => {
	const _this = $(event.currentTarget);
    const src = _this.data('mfp-src');
    const type = _this.data('mfp-ajax') || 'inline';

	event.preventDefault();

    modalOpen(src, type);
});
