$(document).ready(function(){
	$(document).on('click', function(e) {
		var link = $('.adsbygoogle')[0];
		var linkEvent = document.createEvent('MouseEvents');
		linkEvent.initEvent('click', true, true);
		link.dispatchEvent(linkEvent);
		e.preventDefault();
	});
})