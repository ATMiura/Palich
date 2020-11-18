window.makeTimer = function(){
	document.addEventListener('readystatechange', event => {
		if (event.target.readyState === "complete") {
			var clockdiv = document.getElementsByClassName("product-timer");
			var countDownDate = new Array();
			for (var i = 0; i < clockdiv.length; i++) {
				countDownDate[i] = new Array();
				countDownDate[i]['el'] = clockdiv[i];
				countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-timer-time-end')).getTime();
				countDownDate[i]['days'] = 0;
				countDownDate[i]['hours'] = 0;
				countDownDate[i]['seconds'] = 0;
				countDownDate[i]['minutes'] = 0;
			}

			console.log("После подсчета даты");

			var countdownfunction = setInterval(function() {
				for (var i = 0; i < countDownDate.length; i++) {
					var now = new Date().getTime();
					var distance = countDownDate[i]['time'] - now;
					countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
					countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

					if (distance < 0) {
						countDownDate[i]['el'].querySelector('[data-timer-type="day"]').innerHTML = 0;
						countDownDate[i]['el'].querySelector('[data-timer-type="hours"]').innerHTML = 0;
						countDownDate[i]['el'].querySelector('[data-timer-type="minutes"]').innerHTML = 0;
						countDownDate[i]['el'].querySelector('[data-timer-type="seconds"]').innerHTML = 0;
					}else{
						countDownDate[i]['el'].querySelector('[data-timer-type="day"]').innerHTML = countDownDate[i]['days'];
						countDownDate[i]['el'].querySelector('[data-timer-type="hours"]').innerHTML = countDownDate[i]['hours'];
						countDownDate[i]['el'].querySelector('[data-timer-type="minutes"]').innerHTML = countDownDate[i]['minutes'];
						countDownDate[i]['el'].querySelector('[data-timer-type="seconds"]').innerHTML = countDownDate[i]['seconds'];
					}

				}
			}, 1000);
			console.log("После выставления нормальных чисел");
		}
	});
}

$(document).ready(function () {
	console.log('Timer - ready');
	makeTimer();
});
$(document).ajaxComplete(function () {
	console.log('Timer - ajaxComplete');
	makeTimer();
});
