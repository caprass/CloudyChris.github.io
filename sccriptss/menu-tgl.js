var main = function() {
	$(".nav a").click(function(){
	    $(this).toggleClass('active');
	});
};

$(document).ready(main);