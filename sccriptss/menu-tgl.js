var main = function() {
	$("#pagprin").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('
	    	<li><a href="#" >Noutăți</a></li>
	    	<li><a href="#">Echipa managerială</a></li>
	    	<li><a href="#">Cadru profesoral</a></li>
	    	<li><a href="#" >Comisii de lucru</a></li>
	    	<li><a href="#">Oferta școlară</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#isteric").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('
	    	<li><a href="#">Descriere</a></li>
	    	<li><a href="#">Misiune și viziune</a></li>
	    	<li><a href="#">Uniforma</a></li>
	    	<li><a href="#">Galerie</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#ceacpag").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('
	    	<li><a href="#">Componența comisiei</a></li>
	    	<li><a href="#">Regulament</a></li>
	    	<li><a href="#">Proceduri</a></li>
	    	<li><a href="#">Plan Operațional</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#actiext").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('
	    	<li><a href="#">Proiecte și programe</a></li>
	    	<li><a href="#">Ziua colegiului</a></li>
	    	<li><a href="#">Cercuri </a></li>
	    	<li><a href="#">Festivaluri</a></li>
	    	<li><a href="#">Festivitate de absolvire</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});
	$("#utilepg").click(function(){
		$('#mainmenu a').css('background-color','#ffffff');
		$('#mainmenu a').css('color','#5a5a5a');
		$('#secmenu ul').empty();
	    $('#menunr1').append('
	    	<li><a href="#">Contact</a></li>
	    	<li><a href="#">Orar</a></li>
	    	<li><a href="#">EDU</a></li>
	    	<li><a href="#">ISJVN</a></li>
	    	<li><a href="#">CCDF</a></li>');
	    $('#secmenu').css('border-bottom', '1px solid #aeaeae');
	    $('#mainmenu').css('border-bottom', '0px solid #aeaeae');
	    $(this).css('background-color','#3A5795');
	    $(this).css('color','#ffffff');
	});

};
$(document).ready(function(){
	$('#undeincarc').append('
		<div id="myCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="item">
          <img src="../assets/img/examples/slide-01.jpg" alt="">
          <div class="container">
            <div class="carousel-caption">
              <h1>Example headline.</h1>
              <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <a class="btn btn-large btn-primary" href="#">Sign up today</a>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/img/examples/slide-02.jpg" alt="">
          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <a class="btn btn-large btn-primary" href="#">Learn more</a>
            </div>
          </div>
        </div>
        <div class="item active">
          <img src="../assets/img/examples/slide-03.jpg" alt="">
          <div class="container">
            <div class="carousel-caption">
              <h1>One more for good measure.</h1>
              <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <a class="btn btn-large btn-primary" href="#">Browse gallery</a>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
    </div>
		')

});
$(document).ready(main);
