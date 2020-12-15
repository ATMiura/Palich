var navItem = $('.nav-item.has-submenu'),
	timer=null;

navItem.each(function(i,el){
	$(el).on({
		mouseenter: function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				$(el).siblings(el).removeClass('active');
				$(el).parents('.dropdown-block__inner').addClass('active');
				$(el).addClass('active');
			}, 500);
		},
		mouseleave: function(){
			//$(el).removeClass('active');
			clearTimeout(timer);
		}
	});
});

$(document).ready(function () {
	if($(window).width() < 768){
		//$('.header-delivery-info').hide();
		$('.header-delivery-info').append($('[data-change-delivery-address]'));

		$(document).on('click touch', '.header-delivery-picture', function () {
			$(this).toggleClass('active');
			$('.header-delivery-info').slideToggle('slow');
		});
	}
});


