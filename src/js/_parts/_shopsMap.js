window.allMarkers2 = {};

/*var shops = [
	{
		id: 1,
		cityId: 1,
		city: 'Краснодар',
		address: 'ул. Тургеневское шоссе, д. 27',
		location: [55.8617, 38.1988]
	},
	{
		id: 2,
		cityId: 1,
		city: 'Краснодар',
		address: 'ул. Головатого, д. 313',
		location: [55.8617, 37.7788]
	},
	{
		id: 3,
		cityId: 2,
		city: 'Анапа',
		address: 'ул. Крылатая, д. 2',
		location: [55.8617, 37.1988]
	},
	{
		id: 4,
		cityId: 3,
		city: 'Новороссийск',
		address: 'ул. Уральская, д. 98',
		location: [55.8617, 38.2988]
	}
];*/
function mapInit(){
	let mapContainer = $('.js-shop-map');
	let mapMarkers = eval(mapContainer.data('map'));
	let mapPinIcon = mapContainer.data('pin');
	let offsetValue = 0;


	let mapCenter = mapContainer.data('center').split(',');
	mapCenter = [mapCenter[1], mapCenter[0]];
	let allMarkers = [];
	//var allMarkers2 = {};
	var baloonHTML  = "";

	// Создание экземпляра карты.
	let myMap = new ymaps.Map('map', {
		center: mapCenter,
		zoom: 15,
		controls: []
	}, {
		suppressMapOpenBlock: true
	});

	for (var i = 0, l = mapMarkers.length; i < l; i++) {
		//createMenuGroup(mapMarkers[i]);
		// Кастомный балун
		let location = mapMarkers[i].location;
		let id = mapMarkers[i].id;

		const markerMetro = mapMarkers[i].metro;
		const markerAddress = mapMarkers[i].address;
		const markerClosest = mapMarkers[i].closest;
		const markerTime = mapMarkers[i].time;
		const markerTel = mapMarkers[i].tel;

		MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
			'<div class="map-tooltip" data-tooltip-id="'+id+'">' +
			'<div class="map-tooltip__close js-mapTooltipClose"></div>' +
			'<div class="arrow"></div>' +
			'<div class="map-tooltip__desc">' +
			'$[[options.contentLayout observeSize]]' +
			'</div>' +
			'</div>',
			{
				build: function () {
					this.constructor.superclass.build.call(this);
					this._$element = $('.map-tooltip', this.getParentElement());
					this.applyElementOffset();
					this._$element.find('.js-mapTooltipClose')
						.on('click', $.proxy(this.onCloseClick, this));
				},
				clear: function () {
					this._$element.find('.js-mapTooltipClose')
						.off('click');
					this.constructor.superclass.clear.call(this);
				},
				onSublayoutSizeChange: function () {
					MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
					if (!this._isElement(this._$element)) {
						return;
					}
					this.applyElementOffset();
					this.events.fire('shapechange');
				},
				applyElementOffset: function () {
					this._$element.css({
						left: -(this._$element[0].offsetWidth / 2),
						top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
					});
				},
				onCloseClick: function (e) {
					e.preventDefault();
					this.events.fire('userclose');
				},
				getShape: function () {
					if (!this._isElement(this._$element)) {
						return MyBalloonLayout.superclass.getShape.call(this);
					}
					var position = this._$element.position();
					return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
						[position.left, position.top], [
							position.left + this._$element[0].offsetWidth,
							position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
						]
					]));
				},
				_isElement: function (element) {
					return element && element[0] && element.find('.arrow')[0];
				}
			});

		MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
			"<div class='map-tooltip__address'>" +
				"<span class='map-tooltip__metro'>" + markerMetro + "</span>, "+markerAddress+
				"<div class='map-tooltip__closest'>" + markerClosest + "</div>" +
			"</div>" +

			"<div class='map-tooltip__info'>" +
				"<div class='map-tooltip__time'>" + markerTime + "</div>" +
				"<div class='map-tooltip__tel'>" + markerTel + "</div>" +
			"</div>"
		);

		placemark = window.placemark = new ymaps.Placemark(location, {
			//balloonHeader: 'Заголовок балуна',
			//balloonContent: 'Контент балуна'
		}, {
			balloonShadow: false,
			balloonLayout: MyBalloonLayout,
			balloonContentLayout: MyBalloonContentLayout,
			balloonPanelMaxMapArea: 0,
			// Не скрываем иконку при открытом балуне.
			hideIconOnBalloonOpen: false,
			iconLayout: 'default#image',
			iconImageHref: mapPinIcon,
			iconImageOffset: [-6, -40],
			iconImageSize: [84, 84],
		});
		placemark.events
			.add('click', function (e) {
				if (!myMap.balloon.isOpen()) {
					e.get('target').options.set({iconImageHref: 'images/map-pin-active.svg'});
				} else {
					e.get('target').options.set({iconImageHref: 'images/map-pin.svg'});
				}
			});


		allMarkers.push(placemark);
		allMarkers2[id] = placemark;

		// allMarkers2[2].balloon.open(); - работает и allMarkers2.balloon.close(); - тоже

		//placemark.balloon.open();
		console.log(allMarkers2[id]);

		myMap.setBounds(myMap.geoObjects.add(placemark).getBounds());

		//myMap.events.add('boundschange', function(e){
		//	if (e.get('newZoom') !== e.get('oldZoom')) {
		//		console.log(e.get('zoom '));
		//	}
		//})

		//var rectangle = new ymaps.Rectangle(myMap.getBounds(), {}, {
		//	//cursor: "dragCursor",
		//	draggable: false,
		//	outline: false,
		//	strokeOpacity: 0,
		//	fillImageHref: 'images/map-metro-no-bg.svg',
		//	fillMethod: 'stretch'
		//});
		//myMap.geoObjects.add(rectangle);
//
		var myCircle = new ymaps.Circle([
			// Координаты центра круга.
			[55.74954, 37.621587],
			// Радиус круга в метрах.
			10000
		], {
			// Описываем свойства круга.
			// Содержимое балуна.
			balloonContent: "Радиус круга - 10 км",
			// Содержимое хинта.
			hintContent: "Подвинь меня"
		}, {
			// Задаем опции круга.
			// Включаем возможность перетаскивания круга.
			draggable: false,
			// Цвет заливки.
			// Последний байт (77) определяет прозрачность.
			// Прозрачность заливки также можно задать используя опцию "fillOpacity".
			fillColor: false,
			// Цвет обводки.
			strokeColor: false,
			// Прозрачность обводки.
			strokeOpacity: 0,
			// Ширина обводки в пикселях.
			strokeWidth: 0,
			fillImageHref: 'images/map-metro-no-bg.svg',
			fillMethod: 'stretch'
		});

		myMap.geoObjects.add(myCircle);
	}
}



$(document).ready(function () {
	(typeof ymaps !== 'undefined' && $('.js-shop-map').length > 0) && ymaps.ready(mapInit);
});