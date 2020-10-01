/* скрипты для шапки */
var timeout = 0;

/*$('.nav-item.has-submenu').on({
	mouseenter: function() {
		timeout = setTimeout(function() {
			$(this).addClass('active');
		}.bind(this), 250);
	},
	mouseleave: function() {
		clearTimeout(timeout);
		setTimeout(function() {
			$(this).removeClass('active');
		}.bind(this), 750);
	}
});*/
function subMenu(){
	var timer, pause = 400;
	$(".nav-list").on("mouseenter mouseleave", ".nav-item.has-submenu", function(event) {
		window.clearTimeout(timer);
		var that = this;
		if (event.type == "mouseenter") {
			timer = window.setTimeout(function() {
				that.classList.add("active")
			}, pause)
		} else this.classList.remove("active")
	});
}

$(document).ready(function () {
	subMenu();
});
$(document).ajaxComplete(function () {
	subMenu();
});
