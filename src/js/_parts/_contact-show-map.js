$(document).ready(() => {
	const contactMapContainer = $('#contactMap');
	const mapPinIcon = contactMapContainer.data('pin');
	const contactShowMapButtons = $('.js-contactShowMapButton');
	let mapCounter = 0;

	$('.js-contactShowMapButton').on('click', (event) => {
		const _this = $(event.currentTarget);
		const label = _this.data('label');
		const secondLabel = _this.data('second-label');
		const parent = _this.parents('.js-contactMapEl');
		const markerId = parent.data('marker-id');

		_this.toggleClass('is-active');

		if(!_this.hasClass('is-active')){
			_this.text(label);
			$('.js-contactShowMap').remove();
		}
		else {
			_this.text(secondLabel);
			contactShowMapButtons.not(_this).text(label).removeClass('is-active');
			appendMapDesktop(parent, markerId);
		}
	});

	function appendMapDesktop(elem, id){
		++mapCounter;

		const mapContainer = $('<div class="contact-show-map js-contactShowMap"><div class="map" id="contactShowMap-'+ mapCounter +'"></div></div>');

		$('.js-contactShowMap').remove();
		elem.after(mapContainer);
		createMap($('#contactShowMap-' + mapCounter + ''), getCurrentMarker(id));
	}

	function createMap(container, currentMarker){
		const mapContainer = container;
		let mapCenter = currentMarker.location;

		const map = new ymaps.Map(mapContainer[0], {
			center: mapCenter,
			zoom: 15,
			controls: []
		}, {suppressMapOpenBlock: true});

		map.behaviors.disable('scrollZoom');
		$(window).width() <= 767 && map.behaviors.disable('drag');

		function addMarker(){
			const location = mapCenter;
			const id = currentMarker.id;

			const marker = new ymaps.Placemark(location, {
				id: id
			}, {
				iconLayout: 'default#image',
				iconImageHref: mapPinIcon,
				iconImageOffset: [-25, -28],
				iconImageSize: [40, 40],
			});

			map.geoObjects.add(marker);
		}

		addMarker();
		if($('.js-contactShowMap').is(':last-child')) $('.js-contactShowMap ymaps:first').css('border-radius', '0 0 20px 20px');
	}

	function getCurrentMarker(id){
		const mapMarkers = contactMarkers;
		let currentMarker;

		$.each(mapMarkers, function(i){
			const markerId = mapMarkers[i].id;

			if(markerId == id){
				currentMarker = mapMarkers[i];
			}
		});

		return currentMarker;
	}
});
