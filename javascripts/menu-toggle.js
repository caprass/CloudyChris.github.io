var main = function() {
	$(".nav a").click(function(){
	    $(this).toggleId('menubtn');
	});
};

$(document).ready(main);