window.maskField = function(){
	$('[data-inputmask]').each(function () {
		var
			$this = $(this),
			type = $this.attr('data-inputmask');

		if ($this) {
			switch (type) {
				case 'phone':
					$(this).mask("+7 (999) 999-9999");

					break;
				case 'time':
					$(this).mask("99:99 - 99:99");

					break;
				case 'date':
					//$(this).mask("99/99/9999");

					break;
			}
		}
	});
}

$(document).ready(function () {
	maskField();
});
$(document).ajaxComplete(function () {
	maskField();
});
