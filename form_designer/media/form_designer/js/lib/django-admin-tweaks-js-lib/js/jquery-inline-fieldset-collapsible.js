(function($) {
	$(document).ready(function() {
		$('div.inline-related').each(function(i) {
			makeCollapsible(this, 'fieldset', '.form-row', 'h2', null, true)
		});
	});
})(django.jQuery);
