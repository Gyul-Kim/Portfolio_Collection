
$(document).ready(function() {
	$('.select .arrow').click(function(){
		$('.select .aList').fadeIn('fast');			  
	});
	$('.select .aList').mouseleave(function(){     //mouseleave => 마우스가 벗어났을때
		$(this).hide();			  
	});
    
	//tab키 처리
	  $('.select .arrow').bind('focus', function () {        
              $('.select .aList').show();	
       });
       $('.select .aList li:last').find('a').bind('blur', function () {        
              $('.select .aList').hide();
       });  
});

