$(document).ready(function() {
          //$('ul.dropdownmenu li ul').hide();
          //$('.menu_box').hide();

          $('.dropdownmenu').hover(
             function() { 
                $('.dropdownmenu li.gnbmenu ul').fadeIn('fast',function(){$(this).stop();});   //모든 2depth 메뉴 열러라
          $('.menu_box').slideDown(('fast'),function(){$(this).stop();});   //메뉴박스 열려라
             },
            function() {

              $('.dropdownmenu .gnbmenu ul').fadeOut('fast');
                        $('.menu_box').slideUp('fast');
            });

           $('.dropdownmenu li.gnbmenu').hover(
             function() { 
               $('.depth1', this).animate({top:-35},'fast').clearQueue();
                     },
             function() {
                $('.depth1', this).animate({top:0},'fast').clearQueue();
           });
    
          // 키보드 tab 처리//
            $('.dropdownmenu .gnbmenu .depth1').bind('focus', function () {        
                    $('.dropdownmenu .gnbmenu ul').slideDown('normal');
                    $('.menu_box').slideDown('fast');
              });

            $('ul.dropdownmenu li.m5 li:last').find('a').bind('blur', function () {        
                    $('ul.dropdownmenu li.gnbmenu ul').slideUp('fast');
                    $('.menu_box').slideUp('normal');
              });
    
    
    
});

 