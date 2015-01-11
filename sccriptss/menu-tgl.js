var main = function() {
	$(".nav a").click(function(){
		$('.nav a').css('background-color','#ffffff');
		$('.nav a').css('color','#5a5a5a');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
};

$(document).ready(main);