$(document).ready(function() {
          //$('ul.dropdownmenu li ul').hide();
          //$('.menu_box').hide();

          $('.gnbMenu').hover(
             function() { 
                $('.gnbSubmenu').fadeIn('nomal',function(){$(this).stop();});   //모든 subMenu 보여집니다
          $('.menuBox').slideDown(('nomal'),function(){$(this).stop();});   //메뉴박스 내려온다
             },
            function() {

              $('.gnbSubmenu').fadeOut('nomal');//모든 subMenu 사라져라
                        $('.menuBox').slideUp('nomal');
            });//메뉴박스 올라간다

           $('.gnbMenu>li').hover(
             function() { 
               $('.depth1', this).animate({top:-27},'fast').clearQueue();
                     },
             function() {
                $('.depth1', this).animate({top:0},'fast').clearQueue();
           });
    
          // 키보드 tab 처리//
            $('.depth1').bind('focus', function () {        
                    $('.gnbSubmenu').slideDown('normal');
                    $('.menuBox').slideDown('normal');
              });

            $('ul.gnbMenu li.m5 li:last').find('a').bind('blur', function () {        
                    $('.gnbSubmenu').slideUp('nomal');
                    $('.menuBox').slideUp('normal');
              });
    
    
    
});

 