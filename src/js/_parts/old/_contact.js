$(document).ready(() => {
	const contactRange = $('.js-contactRange');
	const mapContainer = $('#contactMap');
	let contactMap;

	$('.js-contactRangeControl').on('click', (event) => {
		contactRange.toggleClass('is_checked');

		(contactRange.hasClass('is_checked'))
			? showListContent()
			: showMapContent();
	});

	$('.js-contactMapControl').on('click', (event) => {
		contactRange.removeClass('is_checked');
		showMapContent();
	});

	$('.js-contactListControl').on('click', (event) => {
		contactRange.addClass('is_checked');
		showListContent();
	});

	function showMapContent(){
		$('.js-contactMapContent').show();
		$('.js-contactListContent').hide();

		$(document).trigger('contactMapUpdate');

		setTimeout(() => {
			mapContainer.css('opacity', '1');
		}, 500);
	}

	function showListContent(){
		$('.js-contactMapContent').hide();
		$('.js-contactListContent').show();
		mapContainer.css('opacity', '0');
	}

	function mapInit(){
		const mapMarkers = contactMarkers;
		const mapPinIcon = mapContainer.data('pin');
		const offsetValue = 220;
		let currentCityId = $('.js-contactCityFilter.is-active').data('city-id');

		let mapCenter = mapContainer.data('center').split(',');
			mapCenter = [mapCenter[0], mapCenter[1]];
		let allMarkers = [];

		contactMap = new ymaps.Map(mapContainer[0], {
	        center: mapCenter,
	        zoom: 15,
	        controls: []
	    }, {suppressMapOpenBlock: true});

	    contactMap.behaviors.disable('scrollZoom');

		contactMap.events.add('actiontick', function (e) {
			$(window).width() >= 768 && $('.map-tooltip').remove();
		});

		/*
		 * Добавление меток на карту
		 */

		function addMarkers(markers){
			$.each(markers, function(i){
				let location = markers[i].location;
				let id = markers[i].id;

				if(location.length > 0){
		   			let marker = new ymaps.Placemark(location, {
		   				id: id
		   			}, {
		   				iconLayout: 'default#image',
			            iconImageHref: mapPinIcon,
			            iconImageOffset: [-25, -28],
			            iconImageSize: [40, 40],
			        });

			        marker.events.add('click', function(e) {
						const offsetX = e.get('pageX');
						const offsetY = e.get('pageY');

						mapTooltipAppend(id, offsetX, offsetY);

						if($(window).width() <= 767){
							setCenterByLocation(location);
						}
		            });

		            allMarkers.push(marker);
		            contactMap.geoObjects.add(marker);
		        }
			});
		}

		function setBoundsMap(){
			contactMap
				.setBounds(contactMap.geoObjects.getBounds(), {
					checkZoomRange: true,
					preciseZoom: true,
					zoomMargin: $(window).width() >= 768 ? 150 : 50
				})
				.then(function() {
					let position = contactMap.getGlobalPixelCenter();
					if($(window).width() >= 768) contactMap.setGlobalPixelCenter([position[0], position[1] - offsetValue]);
				});
		}

		function setCenterMarker(marker){
			const location = marker.location;
			setCenterByLocation(location);
		}

		function setCenterByLocation(location){
			contactMap
				.setCenter(location)
				.then(function(){
					let position = contactMap.getGlobalPixelCenter();
					if($(window).width() >= 768) contactMap.setGlobalPixelCenter([position[0], position[1] - offsetValue]);
				});
		}

		function mapTooltipAppend(id, x, y){
			const asideWidth = $(window).width() >= 1200 ? $('.aside').width() : 0;

			$('.map-tooltip').remove();
			$('.contact-map').append(getMarkersContent(id));

			if($(window).width() >= 768){
				$('.map-tooltip').css({
					'top': y - ($('.map-tooltip').height() + $('.contact-map').offset().top),
					'left': x - ($('.map-tooltip').width() / 2) - asideWidth
				});
			}

			$('.js-mapTooltipClose').on('click', () => {
				$('.map-tooltip').remove();
			});
		}

		function getMarkersContent(id){
	    	let markerTpl;

	    	$('.js-contactMapEl').each(function(){
	    		const _this = $(this),
	    			markerId = _this.data('marker-id');

	    		if(markerId == id){
					const markerImage = _this.find('[data-marker-image]').data('marker-image');
	    			const markerTitle = _this.find('[data-marker-title]').text();
	    			const markerText = _this.find('[data-marker-text]').text();

	    			markerTpl = `<div class="map-tooltip">
									<div class="map-tooltip__close js-mapTooltipClose"></div>
									<div class="map-tooltip__image" style="background-image: url(${markerImage})"></div>
	    							<div class="map-tooltip__desc">
		    							<div class="map-tooltip__title">${markerTitle}</div>
		    							<div class="map-tooltip__text">${markerText}</div>
	    							</div>
	    						</div>`;
	    		}
	    	});

	    	return markerTpl;
	    }

		function deleteMarkers(){
	    	$.each(allMarkers, function(i){
	            contactMap.geoObjects.remove(allMarkers[i]);
	        });

	    	allMarkers = [];
	    }

		function filterMarkers(currentCityId){
			let filteredMarkers = [];

			deleteMarkers();

			$.each(mapMarkers, function(i){
				var markerCityId = mapMarkers[i].cityId;

				if(markerCityId == currentCityId) filteredMarkers.push(mapMarkers[i]);
			});

			if(filteredMarkers.length != 0) {
				addMarkers(filteredMarkers);
				(filteredMarkers.length >= 2)
					? setBoundsMap()
					: setCenterMarker(filteredMarkers[0]);
			}
		}

		$('.js-contactCityFilter').on('click', (event) => {
			const _this = $(event.currentTarget);
			const cityId = _this.data('city-id');

			filterMarkers(cityId);

			_this.addClass('is-active').siblings().removeClass('is-active');
		});

		$(document).on('contactMapUpdate', () => {
			currentCityId = $('.js-contactCityFilter.is-active').data('city-id');

			contactMap.container.fitToViewport();

			if(currentCityId){
				filterMarkers(currentCityId);
			}
			else {
				addMarkers(mapMarkers);
				setBoundsMap();
			}
		});
	}

	(typeof ymaps !== 'undefined' && $('#contactMap').length > 0) && ymaps.ready(mapInit);
});
