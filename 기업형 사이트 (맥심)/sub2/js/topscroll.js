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