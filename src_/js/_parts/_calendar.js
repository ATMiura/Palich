import datepicker from 'js-datepicker'

//window.pickerRemove = function() {
//	const picker = datepicker('[data-inputmask="date"]');
//	picker.remove()
//}

window.calendarMask = function() {
	//pickerRemove();

	var mindate = $('[data-inputmask="date"]').data('mindate');
	var maxdate = $('[data-inputmask="date"]').data('maxdate');

	/*var options = {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric'
	}

	function getDate(str) {
		var date = new Date(str);
		return date.toLocaleString('ru', options)
	}

	var mindateFormated = getDate(mindate);
	var maxdateFormated = getDate(maxdate);

	console.log(mindateFormated, maxdateFormated);*/

	if($('[data-inputmask="date"]').length){
		const picker = datepicker('[data-inputmask="date"]', {
			customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
			customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			overlayPlaceholder: "Год",
			overlayButton: "Сохранить",
			minDate: new Date(mindate),
			maxDate: new Date(maxdate),
			formatter: (input, date, instance) => {
				const value = date.toLocaleDateString()
				input.value = value // => '1/1/2099'
			}
		});
	} else {
		//console.log('nope 1');
	}


};

$(document).ready(function () {
	calendarMask();
});
$(document).ajaxComplete(function () {
	calendarMask();
});
