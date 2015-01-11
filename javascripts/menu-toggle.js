var main = function() {
	$(".nav a").click(function(){
	    $(this).toggleId('menu-btn');
	});
};

$(document).ready(main);