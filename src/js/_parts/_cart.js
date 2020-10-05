$('.dropdown-select__search').on('keyup', function () {
	var valThis = $(this).val();
	$(this).parents('.dropdown-select__list').find('li').each(function(){
		var text = $(this).text();
		(text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide();
	});
});
