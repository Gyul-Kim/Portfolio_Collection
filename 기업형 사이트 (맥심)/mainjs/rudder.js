 
/*이벤트 방향키 부분*/

$(document).ready(function () {
	     //var timeonoff;  //자동기능 구현 변수
		 //var cnt=true;  // true=> 다음, false=>이전
		 
	     $('.rightBtn').click(function () {
			//clearInterval(timeonoff );  //타이머를 멈춘다
		
             $('.eventBox li').first().appendTo('.eventBox ul');
                 // ul(부모)의 자식  li중에서 첫번째 li를 마지막으로 위치 이동. (il의 직계부모)
         });
		 $('.leftBtn').click(function () {
			//clearInterval(timeonoff ); //타이머를 멈춘다
		
             $('.eventBox li').last().prependTo('.eventBox ul');
			 // ul(부모)의 자식  li중에서 마지막번째 li를 첫번째로 위치 이동.
         });
	   
		/* 
       timeonoff =  setInterval(function () { 
			   if(cnt==true){
				   $('.gallery_box li').first().appendTo('.gallery_box ul');
			   }else{
				   $('.gallery_box li').last().prependTo('.gallery_box ul');
			   }
            }, 4000);
       
            // 변수 = setInterval(function () {}, 속도);
	        */
      
   });