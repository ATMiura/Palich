

//function openModal(element){
//	$.fancybox.close();
//	$.fancybox.open(element,{
//		//src: element,
//		type: 'inline',
//		opts: {
//			baseClass: 'fancybox-modal',
//			buttons: []
//		}
//	});
//}

//$(document).on('click touch', '[data-modal-open]', function(event) {
//	event.preventDefault();
//	openModal($(this).attr('href'));
//});

$(document).on('click touch', '[data-modal-open]', function(event, element) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open( {
		//selector: element,
		src: $(this).attr('href'),
		type : 'inline',
		touch: false,
		autoFocus: false,
		fullScreen: true,
		baseClass: "modal__custom",
		infobar: false,
		buttons: false,
	});
});

function thxCallback(){
	$.fancybox.close();
	$.fancybox.open( {
		//selector: element,
		src: '#thx-callback',
		type : 'inline',
		touch: false,
		autoFocus: false,
		fullScreen: true,
		baseClass: "modal__custom",
		infobar: false,
		buttons: false,
	});
}

function thxPalichEmail(){
	$.fancybox.close();
	$.fancybox.open( {
		//selector: element,
		src: '#thx-palich-email',
		type : 'inline',
		touch: false,
		autoFocus: false,
		fullScreen: true,
		baseClass: "modal__custom",
		infobar: false,
		buttons: false,
	});
}

function thxOrder(){
	$.fancybox.close();
	$.fancybox.open( {
		//selector: element,
		src: '#thx-order',
		type : 'inline',
		touch: false,
		autoFocus: false,
		fullScreen: true,
		baseClass: "modal__custom",
		infobar: false,
		buttons: false,
	});
}
