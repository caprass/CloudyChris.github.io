var main = function() {
	$("#mainmenu a").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
};


$(document).ready(main);