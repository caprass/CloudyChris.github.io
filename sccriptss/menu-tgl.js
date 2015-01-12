var main = function() {
	$("#pagprin").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('<li><a id="m11" href="#" >Noutăți</a></li>	<li><a id="m12" href="#">Echipa managerială</a></li>		<li><a id="m13" href="#">Cadru profesoral</a></li>		<li><a id="m14" href="#" >Comisii de lucru</a></li>		<li><a id="m15" href="#">Oferta școlară</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#isteric").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('<li><a id="m21" href="#">Descriere</a></li>		<li><a id="m22" href="#">Misiune și viziune</a></li>		<li><a id="m23" href="#">Uniforma</a></li>		<li><a id="m24" href="#">Galerie</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('<li><a id="m31" href="#">Componența comisiei</a></li>		<li><a id="m32" href="#">Regulament</a></li>		<li><a id="m33" href="#">Proceduri</a></li>		<li><a id="m34" href="#">Plan Operațional</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#actiext").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('<li><a id="m41" href="#">Proiecte și programe</a></li>		<li><a id="m42" href="#">Ziua colegiului</a></li>		<li><a id="m43" href="#">Cercuri </a></li>		<li><a id="m44" href="#">Festivaluri</a></li>		<li><a id="m45" href="#">Festivitate de absolvire</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('<li><a id="m51" href="#">Contact</a></li>		<li><a id="m52" href="#">Orar</a></li>			<li><a id="m53" href="#">EDU</a></li>		<li><a id="m54" href="#">ISJVN</a></li>		<li><a id="m55" href="#">CCDF</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#secmenu a").click(function(){
		$('#secmenu ul').hide();
	});
};
$(document).ready(main);
