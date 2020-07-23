$(document).ready(() => {
	const deliveryRange = $('.js-deliveryRange');

	$('.js-deliveryRangeControl').on('click', (event) => {
		deliveryRange.toggleClass('is_checked');

		(deliveryRange.hasClass('is_checked'))
			? showListContent()
			: showMapContent();
	});

	$('.js-deliveryMapControl').on('click', (event) => {
		deliveryRange.removeClass('is_checked');
		showMapContent();
	});

	$('.js-deliveryListControl').on('click', (event) => {
		deliveryRange.addClass('is_checked');
		showListContent();
	});

	function showMapContent(){
		$('.js-deliveryMapContent').show();
		$('.js-deliveryListContent').hide();

		$(document).trigger('deliveryMapUpdate');
	}

	function showListContent(){
		$('.js-deliveryMapContent').hide();
		$('.js-deliveryListContent').show();
	}

	function mapInit(){
		$('.js-deliveryMap').each((index, element) => {
			const mapContainer = $(element);
			const mapMarkers = eval(mapContainer.data('object'));
			const mapPinIcon = mapContainer.data('pin');
			const offsetValue = 0;

			let mapCenter = mapContainer.data('center').split(',');
				mapCenter = [mapCenter[0], mapCenter[1]];
			let allMarkers = [];

			let deliveryMap = new ymaps.Map(mapContainer[0], {
		        center: mapCenter,
		        zoom: 15,
		        controls: []
		    }, { suppressMapOpenBlock: true });

		    deliveryMap.behaviors.disable('scrollZoom');

			deliveryMap.events.add('actiontick', function (e) {
				$(window).width() >= 768 && $('.map-tooltip').remove();
			});

			$('> ymaps', mapContainer).css({
				'border-radius': '0 0 20px 20px'
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
			            deliveryMap.geoObjects.add(marker);
			        }
				});
			}

			function setBoundsMap(){
				deliveryMap
					.setBounds(deliveryMap.geoObjects.getBounds(), {
						checkZoomRange: true,
						preciseZoom: true,
						zoomMargin: $(window).width() >= 768 ? 150 : 50
					})
					.then(function() {
						let position = deliveryMap.getGlobalPixelCenter();
						if($(window).width() >= 768) deliveryMap.setGlobalPixelCenter([position[0], position[1] - offsetValue]);
					});
			}

			function setCenterMarker(marker){
				const location = marker.location;
				setCenterByLocation(location);
			}

			function setCenterByLocation(location){
				deliveryMap
					.setCenter(location)
					.then(function(){
						let position = deliveryMap.getGlobalPixelCenter();
						if($(window).width() >= 768) deliveryMap.setGlobalPixelCenter([position[0], position[1] - offsetValue]);
					});
			}

			function mapTooltipAppend(id, x, y){
				const parent = mapContainer.parent();
				const asideWidth = $(window).width() >= 768 ? parent.offset().left : 0;

				$('.map-tooltip').remove();
				parent.append(getMarkersContent(id));

				if($(window).width() >= 768){
					$('.map-tooltip').css({
						'top': y - parent.offset().top - $('.map-tooltip').height(),
						'left': x - ($('.map-tooltip').width() / 2) - asideWidth
					});
				}

				$('.js-mapTooltipClose').on('click', () => {
					$('.map-tooltip').remove();
				});

				$('.js-deliveryButton').on('click', (event) => {
					$(event.currentTarget).toggleClass('is-active');
				});
			}

			function getMarkersContent(id){
		    	let markerTpl;

		    	$.each(mapMarkers, (index, element) => {
		    		const _this = element,
		    			markerId = _this.id;

		    		if(markerId == id){
						const markerImage = _this.image;
		    			const markerTitle = _this.address;
		    			const markerText = _this.desc;
						const markerDay = _this.deliveryDay ? `<div class="map-tooltip__label">${_this.deliveryDay}</div>` : '';
						const markerPrice = _this.deliveryPrice ? `<div class="map-tooltip__label">${_this.deliveryPrice}</div>` : '';

		    			markerTpl = `<div class="map-tooltip">
										<div class="map-tooltip__close js-mapTooltipClose"></div>
										<div class="map-tooltip__image" style="background-image: url(${markerImage})"></div>
		    							<div class="map-tooltip__desc">
			    							<div class="map-tooltip__title">${markerTitle}</div>
			    							<div class="map-tooltip__text">${markerText}</div>
											<div class="map-tooltip__info">
												${markerDay}
												${markerPrice}
											</div>
											<div class="map-tooltip__button js-deliveryButton">Выбрать</div>
		    							</div>
		    						</div>`;
		    		}
		    	});

		    	return markerTpl;
		    }

			addMarkers(mapMarkers);
			setBoundsMap();
		});
	}

	$(document).on('deliveryMapUpdate', () => {
		$('.js-deliveryMap').html('');
		mapInit();
	});

	(typeof ymaps !== 'undefined' && $('.js-deliveryMap').length > 0) && ymaps.ready(mapInit);
});
