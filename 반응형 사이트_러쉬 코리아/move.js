//반응형 에서의 move.js에는 크게3가지 동적인 기능이 있습니다. 1)이미지 사이즈 조절, 2)이미지 변경, 3) top btn



$(document).ready(function() {
    var screenSize = $(window).width();
    // .event_box의 이미지 사이즈 맞게 .news_box의 div박스 조절하는 것
  	var imgSize= $('#contentArea .event_box ul li a img').height();  
     $('#contentArea .con_mid3 .news_box').css('height',imgSize);
      
       //770 이하 해상도일 경우 이미지 사이즈를 바꾼다. 
		if(screenSize < 770) {			  
			$('.event_box .e1 img').attr('src','images/event1_small.jpg');
			$('.event_box .e2 img').attr('src','images/event2_small.jpg');
            $('.event_box .e3 img').attr('src','images/event3_small.jpg');
		}
  		
   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width(); 
      var imgSize= $('#contentArea .event_box ul li a img').height();  // 옆의 이미지 사이즈 맞게 글씨만 있는 div박스 조절하는 것
       $('#contentArea .con_mid3 .news_box').css('height',imgSize);
       
       //770 이하 해상도일 경우 이미지 사이즈를 바꾼다. 
		if(screenSize < 770) {			  
			$('.event_box .e1 img').attr('src','images/event1_small.jpg');
			$('.event_box .e2 img').attr('src','images/event2_small.jpg');
            $('.event_box .e3 img').attr('src','images/event3_small.jpg');
		}else{
            $('.event_box .e1 img').attr('src','images/event1.png');
			$('.event_box .e2 img').attr('src','images/event2.png');
            $('.event_box .e3 img').attr('src','images/event3.png');
        }
       }); 
      
        $('.topbtn').click(function(){
          $('html,body').stop().animate({"scrollTop":0},1400);
        });  
      
       $('.topbtn').css('display','none');  
      $(window).on("scroll",function(){ 
          //변수 ht에 현재 브라우저의 높이값 저장
          var ht = $(window).height();
          //변수 scroll에 현재 문서가 스크롤된 거리 저장
          var scroll = $(window).scrollTop();

          if(scroll>=1000){
              $('.topbtn').fadeIn('slow');
          }else{
              $('.topbtn').fadeOut('slow');
          }
   

        }); 
      
  });