var main = function() {	
	$("#pagprin").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menu1').css('display','inherit');
	});
	$("#isteric").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menu2').css('display','inherit');
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menu3').css('display','inherit');
	});
	$("#actiext").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menu4').css('display','inherit');
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menu5').css('display','inherit');
	});	
	
};
$(document).ready(main);
