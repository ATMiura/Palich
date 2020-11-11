$(document).on('click touch','.modal.welcome .city-link', function () {
	$(".modal-steps").load("/local/inc/ajax/cities.php",{"q":$(this).val()});
});
