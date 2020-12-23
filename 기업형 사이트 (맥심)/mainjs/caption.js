
  $(document).ready(function(){
	  $('.boxgrid').hover(function(){
		  $(".boxcaption", this).stop().animate({top:0},'normal');
	  }, function() {
		  $(".boxcaption", this).stop().animate({top:190},'fast'); //박스올라오는 위치
	  });
  });

		