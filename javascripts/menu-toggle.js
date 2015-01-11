var main = function() {
	$(".nav a").click(function(){
	    $(this).toggleClass('menu-btn');
	});
};

$(document).ready(main);