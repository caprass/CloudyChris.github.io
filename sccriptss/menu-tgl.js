var main = function() {	
	$("#pagprin").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr5').show();
	});
	$("#isteric").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr5').show();
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr5').show();
	});
	$("#actiext").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr5').show();
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr5').show();
	});	
	
};
$(document).ready(main);
