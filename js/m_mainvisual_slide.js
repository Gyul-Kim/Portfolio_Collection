$(document).ready(function(){
    start();
    var imgs = 2;
    var now = 0;
    
    function start(){
        $('.mainvisual').eq(0).siblings().css('opacity','0');
        setInterval(function(){slide();},2500);
    }
    function slide(){
        now = now==imgs?0:now+=1;
        $('.mainvisual').eq(now-1).css('opacity','0');
        $('.mainvisual').eq(now).css('opacity','1');
    }
    
});