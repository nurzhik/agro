
(function($) {
$(function() {

	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}

	$('.tabs-head').each(function(i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
			$(this).find('div').removeClass('active').eq(cookie).addClass('active')
				.closest('div.tabs').find('div.tabs-body__item ').removeClass('active').eq(cookie).addClass('active');
		}
	});

	$('.tabs-head').on('click', 'div:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('.tabs-body__item ').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('.tabs-head__item').index($(this).parents('.tabs-head'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
	});

});
})(jQuery);