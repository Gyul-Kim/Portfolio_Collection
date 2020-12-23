//메인 슬라이더
var firstLi=$("#slider li:first").clone(),
   w=$("#slider").width(),
   n=0,li=$("#slider li").length,
   sliderAuto=true;
$("#slider ul").width(w*(li+1)); //ul의 크기 지정
$("#slider ul").append(firstLi);
$("#slider li").width("calc(100% / "+(li+1)+")");
setInterval(function(){
   if(sliderAuto==true) {
      $("#slider ul").animate({marginLeft:-(++n)*w},"fast",function(){
         if(n>=li){n=0;$("#slider ul").css("margin-left",0)} 
         chk_color();
      });
   }
},3000);

function chk_color() {   // 메뉴글자색 지정
   if(n==1) {
      $("header").removeClass("white");
   } else {
      $("header").addClass("white");
   };
}

//UI생성
var slideNow="<div aria-hidden='true'><i class='fa-angle-left'></i><i class='fa-angle-right'></i></div>";
$("#slider").prepend(slideNow);

$("#slider").mouseenter(function(){	//호버시 슬라이드 정지
	sliderAuto=false;
	$("#slider div").fadeTo("slow",1);
});
$("#slider").mouseleave(function(){	
	sliderAuto=true;
	$("#slider div").fadeTo("slow",0.4);
});

$("#slider .fa-angle-left").click(function(){//이전버튼
	if(n==0) {
		n=li;
		$("#slider ul").animate({marginLeft:-n*w},0);
	} 
	$("#slider ul").animate({marginLeft:-(--n)*w},"fast",chk_color);
});
$("#slider .fa-angle-right").click(function(){//다음버튼
	$("#slider ul").animate({marginLeft:-(++n)*w},"fast",function(){
		if(n>=li){n=0;$("#slider ul").css("margin-left",0)} 
		chk_color();
	});
});

//showcase list 좌측여백 정렬
var list_left=$("#show h2+p").css("margin-left");
$("#show ul").css("padding","0 "+list_left);

//showcase 슬라이 버튼
var n2=0,li2=$("#show li").length/2,w2=1096;
$("#show button:eq(0)").click(function(){//이전버튼
	if(n2>0) {
		n2--;
		$("#show ul").animate({marginLeft:-n2*w2},500);
		$("#show button:eq(1)").fadeIn();
	}
	if(n2==0) $(this).fadeOut();
});
$("#show button:eq(1)").click(function(){//이전버튼
	if(n2<li2-1) {
		n2++;
		$("#show ul").animate({marginLeft:-n2*w2},500);
		$("#show button:eq(0)").fadeIn();
	}  
	if(n2==li2-1) $(this).fadeOut();
});
$("#show button:eq(0)").fadeOut();

//skin (가운데 슬라이드)
setInterval(function(){
    $("#skin_slider li:last").addClass("fade");
    var t=$("#skin_slider li:last").height(); // 마지막 li값 얻기
    $("#skin_slider li:first").after($("#skin_slider li:last"));
    $("#skin_slider").animate({marginTop:'+='+t},"fast",function(){ //위아래 모션
        $("#skin_slider").css("margin-top",0);
    });
    $("#skin_slider li:eq(1)").animate({marginLeft:0},"fast",function(){ //좌우 모션
        $(this).removeClass("fade");
        $(this).removeAttr("style");
    });
},2000);
//skin (오른쪽 슬라이드)
setInterval(function(){
    var t2 = parseInt($("#skin_slider2 li:eq(0)").css("width")) + parseInt($("#skin_slider2 li:eq(0)").css("margin-Left"));
    $("#skin_slider2").animate({marginLeft:'-='+t2},"fast",function(){
       $("#skin_slider2").css("margin-left",0);
       $("#skin_slider2 li:last").after($("#skin_slider2 li:first"));
    });
},2000);

// 인터렉션
$(window).on('scroll',function() {
	var num=Math.round($(this).scrollTop()); // 스크롤탑 값을 정수로 변환
	$("#txt").text("scrollTop : "+num);
	// 메인메뉴(header) 
	if(num>=400) $("#wrap>header").addClass("on").fadeIn(1000);
	else $("#wrap>header").removeClass("on");
	// #photo
	if(num>2900) $("#photo").addClass("on");
	else $("#photo").removeClass("on");
	// #blog
	if(num>4100) $("#blog").addClass("on");
	else $("#blog").removeClass("on");
	// #start
	if(num>6000) $("#start").addClass("on");
	else if(num<5000)$("#start").removeClass("on");
});