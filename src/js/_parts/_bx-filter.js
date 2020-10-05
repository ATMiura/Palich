function bxFilterOpen(){
	$(document).on('click', '.bx-filter-parameters-box', function () {
		$(this).toggleClass('active');
		console.log('active');
	});
}
$(document).ready(function () {
	$('.bx-filter-parameters-box-row > .bx-filter-parameters-box').addClass( function (index) {
		return index < 3 ? 'bx-active' : '';
	});

	$('.bx-filter-parameters-box-row > .bx-filter-parameters-box').each(function (index) {
		if(index <= 3){
			$(this).find('[data-role="bx_filter_block"]').slideDown();
		}
	});

});


//$(document).ready(bxFilterOpen());
//$(document).ajaxComplete(bxFilterOpen());
