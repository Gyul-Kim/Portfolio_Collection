// JavaScript Document


//new product 부분

$(document).ready(function() {
   var position=0;  //최초위치 목적지 
   var movesize=150; //이미지 하나의 너비
   var timeonoff;

     timeonoff= setInterval(function () {
        position-=movesize;  // movesize만큼 감소
    	$('.product1').stop().animate({left:position}, 'fast',
	         function(){							
		    if(position==-1500){
			   $('.product1').css('left',0);
			   position=0;
		    }
	 });
     }, 4000); 
    
    
    
    
   
    $('.product1 ul').after($('.product1 ul').clone());
       //슬라이드 겔러리를 한번 복제

    $('.btn').click(function(event){
	var $target=$(event.target);  //클릭한 버튼 $(this)
     clearInterval(timeonoff);//살인마!!! 패스~ 사이코..
	
	if($target.is('.m1')){  //왼쪽 버튼 클릭 
	    
        if(position==1500){
			   $('.product1').css('left',0);
			   position=0;
		    }
        
		
	     position-=movesize;  // 150씩 감소
    	     $('.product1').stop().animate({left:position}, 'fast',
		  function(){							
		    if(position==-1500){
			   $('.product1').css('left',0);
			   position=0;
		    }
	      });
	}else if($target.is('.m2')){  //오른버튼 클릭 
	    
        
         if(position==0){
			   $('.product1').css('left',-1500);
			   position=-1500;
		    }
        

                   position+=movesize; // 150씩 증가
    	      $('.product1').stop().animate({left:position}, 'fast',
		  function(){							
		    if(position==0){
			   $('.product1').css('left',-1500);
			   position=-1500;
		    }
	       });
	}
       });
    });

