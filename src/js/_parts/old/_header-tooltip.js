$(document).ready(() => {
	const body = $('body');
	const headerTooltipControl = $('.js-headerTooltipControl');
	const headerTooltip = $('.js-headerTooltip');
	let timerId;

	headerTooltipControl.on('mouseenter', (event) => {
		const _this = $(event.currentTarget);
		const tooltip = $('' + _this.data('tooltip-id') + '');

		//event.stopPropagation();

		body.removeClass('is-search-buttons-show is-search-result-open');

		if($(window).width() >= 768 && event.type == 'click') event.preventDefault();
		clearTimeout(timerId);

		headerTooltipControl.removeClass('is-hover');
		headerTooltip.removeClass('is-show');

		_this.addClass('is-hover');
		tooltip.addClass('is-show');

		(tooltip.hasClass('view-history'))
		 	? body.addClass('is-view-history-show')
			: body.removeClass('is-view-history-show');
	});

	headerTooltipControl.on('mouseleave', (event) => {
		timerId = setTimeout(() => {
			headerTooltipControl.removeClass('is-hover');
			headerTooltip.removeClass('is-show');
			body.removeClass('is-view-history-show');
		}, 500);
	});

	headerTooltip.on('mouseenter', function(){
		clearTimeout(timerId);
	});

	headerTooltip.on('mouseleave', function(){
		headerTooltipControl.removeClass('is-hover');
		headerTooltip.removeClass('is-show');
		body.removeClass('is-view-history-show');
	});

	$(window).on('click touchend', function(event){
		if($('.js-headerTooltip').has(event.target).length === 0){
			headerTooltipControl.removeClass('is-hover');
			headerTooltip.removeClass('is-show');
			body.removeClass('is-view-history-show');
		}
	});
});
