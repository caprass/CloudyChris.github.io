var main = function() {	
	$("#pagprin").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu a').hide();
		$(this).addClass('menubtnactive');
		$('#menunr1 a').css('display','inherit');
	});
	$("#isteric").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu a').hide();
		$(this).addClass('menubtnactive');
		$('#menunr2 a').css('display','inherit');
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu a').hide();
		$(this).addClass('menubtnactive');
		$('#menunr3 a').css('display','inherit');
	});
	$("#actiext").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu a').hide();
		$(this).addClass('menubtnactive');
		$('#menunr4 a').css('display','inherit');
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu a').hide();
		$(this).addClass('menubtnactive');
		$('#menunr5 a').css('display','inherit');
	});	
	
};
$(document).ready(main);
