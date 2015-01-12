var main = function() {
	$('#secmenu ul').hide();
	$("#pagprin").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');

		$(this).addClass('menubtnactive');
	});
	$("#isteric").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$(this).addClass('menubtnactive');
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$(this).addClass('menubtnactive');
	});
	$("#actiext").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$(this).addClass('menubtnactive');
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$(this).addClass('menubtnactive');
	});	
	
};
$(document).ready(main);
