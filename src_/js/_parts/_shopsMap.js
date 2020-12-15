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

	var clusterer = new ymaps.Clusterer({
		//preset: mapPinIcon,
		groupByCoordinates: false,
		clusterDisableClickZoom: false,
		clusterHideIconOnBalloonOpen: true,
		geoObjectHideIconOnBalloonOpen: true
	});

	for (var i = 0, l = mapMarkers.length; i < l; i++) {
		//createMenuGroup(mapMarkers[i]);
		// Кастомный балун
		let location = mapMarkers[i].location;
		let id = mapMarkers[i].id;

		let markerMetro = mapMarkers[i].metro.length == 0
			? '<span class=\'map-tooltip__metro\'>' + mapMarkers[i].metro + '</span>'
			: '<span class=\'map-tooltip__metro\'>' + mapMarkers[i].metro + ', </span>';
		let markerAddress = mapMarkers[i].address;
		let markerClosest = mapMarkers[i].closest;
		let markerTime = mapMarkers[i].time;
		let markerTel = mapMarkers[i].tel;

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
					markerMetro+markerAddress+
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
			//.add('click', function (e) {
			//	if (!myMap.balloon.isOpen()) {
			//		e.get('target').options.set({iconImageHref: 'images/map-pin-active.svg'});
			//	} else {
			//		e.get('target').options.set({iconImageHref: 'images/map-pin.svg'});
			//	}
			//})
			.add('balloonclose', function (e) {
				e.get('target').options.set({iconImageHref: '/local/templates/main/frontend/images/map-pin.svg'});
			})
			.add('balloonopen', function (e) {
				e.get('target').options.set({iconImageHref: '/local/templates/main/frontend/images/map-pin-active.svg'});
			});

		clusterer.options.set({
			gridSize: 50,
			clusterDisableClickZoom: false,
			preset: 'islands#redClusterIcons'
		});

		clusterer.add(placemark);
		myMap.geoObjects.add(clusterer);

		myMap.setBounds(clusterer.getBounds(), {
			checkZoomRange: true
		});


		//allMarkers.push(placemark);
		//allMarkers2[id] = placemark;
//
		//// allMarkers2[2].balloon.open(); - работает и allMarkers2.balloon.close(); - тоже
//
		////placemark.balloon.open();
		////console.log(allMarkers2[id]);
//
		//myMap.setBounds(myMap.geoObjects.add(placemark).getBounds(),clusterer.getBounds(),{
		//	checkZoomRange: true
		//});

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
		/*var myCircle = new ymaps.Circle([
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

		myMap.geoObjects.add(myCircle);*/
	}
}



$(document).ready(function () {
	(typeof ymaps !== 'undefined' && $('.js-shop-map').length > 0) && ymaps.ready(mapInit);
});

/*ymaps.ready(function () {

	var LAYER_NAME = 'user#layer',
		MAP_TYPE_NAME = 'user#customMap',
		// Директория с тайлами.
		TILES_PATH = 'images/tiles',
		/!* Для того чтобы вычислить координаты левого нижнего и правого верхнего углов прямоугольной координатной
		 * области, нам необходимо знать максимальный зум, ширину и высоту изображения в пикселях на максимальном зуме.
		 *!/
		MAX_ZOOM = 4,
		PIC_WIDTH = 2526,
		PIC_HEIGHT = 3085;

	/!**
	 * Конструктор, создающий собственный слой.
	 *!/
	var Layer = function () {
		var layer = new ymaps.Layer(TILES_PATH + '/%z/tile-%x-%y.jpg', {
			// Если есть необходимость показать собственное изображение в местах неподгрузившихся тайлов,
			// раскомментируйте эту строчку и укажите ссылку на изображение.
			// notFoundTile: 'url'
		});
		// Указываем доступный диапазон масштабов для данного слоя.
		layer.getZoomRange = function () {
			return ymaps.vow.resolve([0, 4]);
		};
		// Добавляем свои копирайты.
		layer.getCopyrights = function () {
			return ymaps.vow.resolve('©');
		};
		return layer;
	};
	// Добавляем в хранилище слоев свой конструктор.
	ymaps.layer.storage.add(LAYER_NAME, Layer);

	/!**
	 * Создадим новый тип карты.
	 * MAP_TYPE_NAME - имя нового типа.
	 * LAYER_NAME - ключ в хранилище слоев или функция конструктор.
	 *!/
	var mapType = new ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
	// Сохраняем тип в хранилище типов.
	ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType);

	// Вычисляем размер всех тайлов на максимальном зуме.
	var worldSize = Math.pow(2, MAX_ZOOM) * 256,
		/!**
		 * Создаем карту, указав свой новый тип карты.
		 *!/
		map = new ymaps.Map('map', {
			center: [0, 0],
			zoom: 2,
			controls: ['zoomControl'],
			type: MAP_TYPE_NAME
		}, {

			// Задаем в качестве проекции Декартову. При данном расчёте центр изображения будет лежать в координатах [0, 0].
			projection: new ymaps.projection.Cartesian([[PIC_HEIGHT / 2 - worldSize, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, worldSize - PIC_WIDTH / 2]], [false, false]),
			// Устанавливаем область просмотра карты так, чтобы пользователь не смог выйти за пределы изображения.
			restrictMapArea: [[-PIC_HEIGHT / 2, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, PIC_WIDTH / 2]]

			// При данном расчёте, в координатах [0, 0] будет находиться левый нижний угол изображения,
			// правый верхний будет находиться в координатах [PIC_HEIGHT, PIC_WIDTH].
			// projection: new ymaps.projection.Cartesian([[PIC_HEIGHT - worldSize, 0], [PIC_HEIGHT, worldSize]], [false, false]),
			// restrictMapArea: [[0, 0], [PIC_HEIGHT, PIC_WIDTH]]
		});

	// Ставим метку в центр координат. Обратите внимание, координаты метки задаются в порядке [y, x].
	var point = new ymaps.Placemark([0, 0], {
		balloonContent: 'Координаты метки: [0, 0]'
	}, {
		preset: 'islands#darkOrangeDotIcon'
	});

	map.geoObjects.add(point);
});*/

