var main = function() {
	$(".nav a").click(function(){
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
};

$(document).ready(main);