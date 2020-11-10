//import '../_vendor/jquery.fancybox';

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

$(document).on('click touch', '[data-modal-open=""]', function(event, element) {
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

//$(document).on('click touch', '[data-modal-open="city"]', function(event, element) {
//	event.preventDefault();
//	$.fancybox.close();
//	$.fancybox.open( {
//		//selector: element,
//		src: $(this).attr('href'),
//		type : 'inline',
//		touch: false,
//		autoFocus: false,
//		fullScreen: true,
//		baseClass: "modal-city-choose",
//		infobar: false,
//		buttons: false,
//	});
//});

function cityChoose() {
	$.fancybox.close();
	$.fancybox.open( {
		//selector: element,
		src: '#city-choose',
		type : 'inline',
		touch: false,
		autoFocus: false,
		fullScreen: true,
		baseClass: "modal-city-choose",
		infobar: false,
		buttons: false,
	});
}

$(document).ready(function () {
	if($('#city-choose').length){
		//cityChoose();
		console.log("всплывашка городов есть");
	}
	else {
		console.log("всплывашки городов нет");
	}

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

function welcome(){
	$.fancybox.close();
	$.fancybox.open( {
		//selector: element,
		src: '#welcome',
		type : 'inline',
		touch: false,
		autoFocus: false,
		fullScreen: true,
		baseClass: "modal__custom",
		infobar: false,
		buttons: false,
	});
	$('.welcome .delivery-item__text').equalHeights();
}
$(document).ready(function () {
	welcome();
});
