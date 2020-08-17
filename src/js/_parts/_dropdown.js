/* выпадающий список */

$(document).on('click touch', '.header-burger__link', function (event) {
	event.preventDefault();
	$(this).parents('.dropdown').toggleClass('is-open');
}).on('click', function(event){
	var $trigger = $(".dropdown");
	if($trigger !== event.target && !$trigger.has(event.target).length){
		//$(".dropdown-block").slideUp("fast");
		$('.dropdown').removeClass('is-open');
	}
}).on('click touch', '.nav-item__link', function () {
	if($(this).parents('.nav-item').hasClass('has-submenu')){
		console.log('false');
		return false;
	} else {
		console.log('true');
		return true;
	}
});
