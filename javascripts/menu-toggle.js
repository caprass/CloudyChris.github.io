var main = function() {
	$(".menu-btn").click(function(){
		$(this).setAttribute('active');
	});
}
$(document).ready(main);