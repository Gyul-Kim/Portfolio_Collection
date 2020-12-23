/*popup_close*/
$(function(){
	$('.searchBtn').click(function(){
		$('.search').show();
	});
	$('.btn_close').click(function(){
		$('#modal').hide();
	});
/*Search*/  
    	$('.search img').click(function(){
		$('.search_text').show();
	});
	$('.search p').click(function(){
		$('.search_text').hide();
	});
    
