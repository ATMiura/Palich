/* скрипты для шапки */
//var timeout = 0;

//$('.nav-item.has-submenu').on({
//	mouseenter: function() {
//		timeout = setTimeout(function() {
//			$(this).parents('.dropdown-block__inner').addClass('active');
//			$(this).addClass('active');
//		}.bind(this), 300);
//	},
//	mouseleave: function() {
//		clearTimeout(timeout);
//		$(this).removeClass('active');
//	}
//});

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
	$('.nav-item__submenu').on({
		mouseleave: function(){
			$(el).removeClass('active');
			clearTimeout(timer);
		}
	});
});


$(document).ready(function () {
	//var navItem = $('.nav-item.has-submenu'),
	//	timer;
//
	//navItem.each(function(i,el){
	//	$(el).on({
	//		mouseenter: function(){
	//			clearTimeout(timer);
	//			timer = setTimeout(function(){
	//				console.log(el);
	//				el.parents('.dropdown-block__inner').addClass('active');
	//				el.addClass('active');
	//				console.log('1');
	//				//$(el).next().show();
	//			}, 500);
	//		},
	//		mouseleave: function(){
	//			//el.parents('.dropdown-block__inner').removeClass('active');
	//			clearTimeout(timer);
	//			console.log('2');
	//		}
	//	});
	//});
	//var timer, pause = 400;
	//$(document).on("mouseenter mouseleave", ".nav-item.has-submenu", function(event) {
	//	clearTimeout(timer);
	//	if (event.type == "mouseenter") {
	//		timer = setTimeout(function(){
	//			$(this).parents('.dropdown-block__inner').addClass('active');
	//			$(this).addClass('active');
	//		}, pause);
	//	} else {
	//		clearTimeout(timer);
	//		$(this).removeClass('active');
	//		//$(this).parents('.dropdown-block').removeClass('active');
	//		//$('.dropdown-block').removeClass('active');
	//	}
	//});
	//	//var that = this;
	//	//if (event.type == "mouseenter") {
	//	//	timer = window.setTimeout(function() {
	//	//		that.closest('.dropdown-block__inner').classList.add("active")
	//	//	}, pause)
	//	//} else this.closest('.dropdown-block__inner').classList.remove("active")
	//});
	//$(document).on("mouseleave", ".nav-item:not(.has-submenu)", function(event) {
	//	$(this).parents('.dropdown-block').addClass('active');
	//});
});
$(document).ajaxComplete(function () {
	//subMenu();
});
