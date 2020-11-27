/*function makeTimer2() {

	$('.product-timer').each(function () {
		var dateEnd = $(this).data('timer-time-end');

		var endTime = new Date(dateEnd);
		endTime = Number((Date.parse(endTime) / 1000));

		var now = new Date();
		now = Number((Date.parse(now) / 1000));

		var timeLeft = Number(endTime - now);

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$('[data-timer-type="day"]').html(days);
		$('[data-timer-type="hours"]').html(hours);
		$('[data-timer-type="minutes"]').html(minutes);
		$('[data-timer-type="seconds"]').html(seconds);
	});

	console.log(makeTimer2());
}
setInterval(function() { makeTimer2(); }, 1000);*/


window.makeTimer = function(){
	var clockdiv = document.getElementsByClassName("product-timer");
	var countDownDate = new Array();
	for (var i = 0; i < clockdiv.length; i++) {
		countDownDate[i] = new Array();
		let endDateMatch=clockdiv[i].getAttribute('data-timer-time-end').match(/(\d+)-(\d+)-(\d+)/);
		let endDate=endDateMatch[3]+'-'+endDateMatch[1]+'-'+endDateMatch[2];
		countDownDate[i]['el'] = clockdiv[i];
		countDownDate[i]['time'] = new Date(endDate).getTime();
		countDownDate[i]['days'] = 0;
		countDownDate[i]['hours'] = 0;
		countDownDate[i]['seconds'] = 0;
		countDownDate[i]['minutes'] = 0;

		console.log(endDate);
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

$(document).ready(function () {
	console.log('Timer - ready');
	window.makeTimer();
});
$(document).on('ajaxComplete', function () {
	console.log('Timer - ajaxComplete');
	window.makeTimer();
});
