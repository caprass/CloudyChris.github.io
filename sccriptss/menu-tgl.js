var main = function() {
	$("#pagprin").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('<li><a>Noutăți</a></li><li><a>Echipa managerială</a></li><li><a>Cadru profesoral</a></li><li><a>Comisii de lucru</a></li><li><a>Oferta școlară</a></li>');
	    $('#secmenu').css('border-bottom', '1px ',' solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#isteric").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr2').append('<li><a>Descriere</a></li><li><a>Misiune și viziune</a></li><li><a>Uniforma</a></li><li><a>Galerie</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr2').append('<li><a>Componența comisiei</a></li><li><a>Regulament</a></li><li><a>Proceduri</a></li><li><a>Plan Operațional</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#actiext").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr4').append('<li><a>Proiecte și programe</a></li><li><a>Ziua colegiului</a></li><li><a>Cercuri </a></li><li><a>Festivaluri</a></li><li><a>Festivitate de absolvire</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr5').append('<li><a>Contact</a></li><li><a>Orar</a></li><li><a>EDU</a></li><li><a>ISJVN</a></li><li><a>CCDF</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});

};

$(document).ready(main);