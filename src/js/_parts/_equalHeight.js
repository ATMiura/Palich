$.fn.equalHeights = function(){
	var max_height = 0;
	$(this).each(function(){
		max_height = Math.max($(this).height(), max_height);
	});
	$(this).each(function(){
		$(this).height(max_height);
	});
};

$.fn.equalWidth = function(){
	var max_width = 0;
	$(this).each(function(){
		max_width = Math.max($(this).width(), max_width);
	});
	$(this).each(function(){
		$(this).width(max_width);
	});
};

$('.products__item:not(.products__item__size__big).products__item__name').equalHeights();

//$('.nav-item__icon svg').equalWidth();
//$('.nav-item__icon svg').equalHeights();
