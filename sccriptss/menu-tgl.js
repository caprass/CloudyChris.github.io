var fire = function() {
	$('#secmenu ul').hide();
};
var main = function() {	
	$("#pagprin").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr1').show();
	});
	$("#isteric").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr2').show();
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr3').show();
	});
	$("#actiext").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr4').show();
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr5').show();
	});	
	$("#secmenu a").click(function(){
		$('#secmenu ul').hide();
	});	
	
};
$(document).ready(fire);
$(document).ready(main);
