var fire = function() {
	$('#secmenu ul').hide();
};
var main = function() {	
	$("#pagprin").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr1').show();
		$('#secmenu').css('border-bottom','1px solid #aeaeae')
		$('#mainmenu').css('border-bottom','0px solid #aeaeae')
	});
	$("#isteric").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr2').show();
		$('#secmenu').css('border-bottom','1px solid #aeaeae')
		$('#mainmenu').css('border-bottom','0px solid #aeaeae')
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr3').show();
		$('#secmenu').css('border-bottom','1px solid #aeaeae')
		$('#mainmenu').css('border-bottom','0px solid #aeaeae')
	});
	$("#actiext").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr4').show();
		$('#secmenu').css('border-bottom','1px solid #aeaeae')
		$('#mainmenu').css('border-bottom','0px solid #aeaeae')
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').removeClass('menubtnactive');
		$('#secmenu ul').hide();
		$(this).addClass('menubtnactive');
		$('#menunr5').show();
		$('#secmenu').css('border-bottom','1px solid #aeaeae')
		$('#mainmenu').css('border-bottom','0px solid #aeaeae')
	});	
	$("#secmenu a").click(function(){
		$('#secmenu ul').hide();
		$('#secmenu').css('border-bottom','0px solid #aeaeae')
		$('#mainmenu').css('border-bottom','1px solid #aeaeae')
	});	
	
};
$(document).ready(fire);
$(document).ready(main);
