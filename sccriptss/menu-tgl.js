var main = function() {
	$("#pagprin").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('<li><a>Noutăți</a></li><li><a>Echipa managerială</a></li><li><a>Cadru profesoral</a></li><li><a>Comisii de lucru</a></li><li><a>Oferta școlară</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae;')
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
};


$(document).ready(main);