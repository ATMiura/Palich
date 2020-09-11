$(window).on('load', () => {
	x2size($('.js-x2size'));
});

$(document).ready(() => {
	x2size($('.js-x2size'));
});

function x2size(elem){
    const images = elem;

    images.each((i, element) => {
		const xsize = $(element).data('xsize') || 2;
		$(element).removeAttr('width');
    	$(element).attr({
    		'width': $(element)[0].offsetWidth / xsize
    	});
		$(element).css('opacity', 1);
    });
}
