function dropdownSelectSearch(){
	$('.dropdown-select__search').on('keyup', function () {
		var valThis = $(this).val();
		$(this).parents('.dropdown-select').find('li').each(function(){
			var text = $(this).text();
			(text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide();
		});
	});
}

$(document).ready(function () {
	dropdownSelectSearch();
});
$(document).ajaxComplete(function () {
	dropdownSelectSearch();
});
