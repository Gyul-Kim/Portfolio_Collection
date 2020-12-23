/** 섹션들을 묶는 박스에게 플러그인 함수 적용 */
$(function () {
    /** 페이지 열린 직후의 처리 */
    var box = $(".page").eq(0).find(".box"); // 0번째 '.page'요소에 있는 .box 얻기

    box.eq(0).animateCSS("fadeInLeft", { // animate.css 적용
        duration: 2000
    });

    box.eq(1).animateCSS("fadeInRight", { // animate.css 적용
        duration: 2000
    });

    $('.detailView').fadeOut();

    /** 섹션들을 묶는 박스에게 플러그인 함수 적용 */
    $(".container").onepage_scroll({
        sectionContainer: ".page", // 하나의 섹션을 구성하는 클래스이름
        easing: "ease", // 애니메이션 가속 종류 (ease, linear,ease-in,ease-out,ease-in-out)
        animationTime: 1500, // 재생시간
        pagination: true, // 페이지 위치 표시여부 (화면 오른쪽의 동그란 버튼)
        loop: true, // 페이지 반복 처리 여부 (3페이지 -> 1페이지)
        keyboard: true, // 키보드 처리 여부(방향키에 따른 화면 전환)
        direction: "vertical", // 스크롤 방향 (vertical=세로, horizontal=가로)
        beforeMove: function (index) { // 페이지 이동 전 처리될 콜백함수

            var current = $(".menu a").eq(index - 1);
            current.addClass("active");
            $(".menu a").not(current).removeClass("active");

            /** 이번에 이동할 페이지에 대한 '.box요소 찾기'*/
            var box = $(".page").eq(index - 1).find(".box");
            // 애니메이션 재생을 위해서 일단 숨겨 놓는다.
            box.css("show", "hide");
            // 애니메이션 재생을 활용하여 화면에 표시함
            box.eq(0).animateCSS("fadeInLeft", {
                duration: 2000,
                delay: 200
            });

            box.eq(1).animateCSS("fadeInRight", {
                duration: 2000,
                delay: 200
            });

            $('.detailView').fadeOut();
        },
        afterMove: function (index) {},
    });
});
/** 메뉴로 구성된 링크를 클릭한 경우 */
$(".menu a").click(function (e) {
    // 링크의 기본 동작 차단
    e.preventDefault();
    //".container"에 표시되는 페이지를 index+1 번째로 이동
    $(".container").moveTo($(this).index() + 1);
});
