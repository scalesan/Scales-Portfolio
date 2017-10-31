$(document).ready(function(){
	var img = $('img[id^="content-"]').hide(), i=0;
	(function cycle(){
		img.eq(i).fadeIn(500).delay(4000).fadeOut(1, cycle);
		i = ++i % img.length;
})();	
})


