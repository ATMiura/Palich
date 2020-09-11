let logoShift = 0;
let isMobile = false;

$(window).on('load', () => {
	animateLogo();
});

function animateLogo(){
	logoShift = 0;
	isMobile = window.innerWidth < 768;
	logoAnimStep();
}

function logoAnimStep(){
	const logo = $('.logo');

	logo.css({'opacity': '1'});

	setTimeout(() => {
		logoShift += isMobile ? 93 : 137; // width
		if (logoShift >= (isMobile ? 2418 : 3562)) {
			return;
		}
		logo.css('background-position', '-' + logoShift + 'px 0');
		logoAnimStep();
	}, 40);
}
