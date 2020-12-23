
$(document).ready(function() {
	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('fast');			  
	}, function(){
		$(".select .aList").fadeOut('fast');
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


//toggle -> fadeIn fadeOut으로 왔다리 갔다리 가능