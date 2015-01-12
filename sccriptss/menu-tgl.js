var main = function() {
	$("#pagprin").click(function(){
		$('#mainmenu a').removeClass('active');

		$(this).addClass('active');
	});
	$("#isteric").click(function(){
		$('#mainmenu a').removeClass('active');
		$(this).addClass('active');
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').removeClass('active');
		$(this).addClass('active');
	});
	$("#actiext").click(function(){
		$('#mainmenu a').removeClass('active');
		$(this).addClass('active');
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').removeClass('active');
		$(this).addClass('active');
	});	
	$('#secmenu ul').display="hidden";
};
$(document).ready(main);
