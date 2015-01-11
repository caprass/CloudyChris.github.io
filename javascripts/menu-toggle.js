var main = function() {
	$(".nav a").click(function(){
	    $(this).toggleClass('menubtn');
	});
};

$(document).ready(main);