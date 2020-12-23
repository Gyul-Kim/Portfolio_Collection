<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/head.php');
    return;
}

include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>

<!-- 상단 시작 { -->
<div id="wrap">
        <header>
            <h1>
                <a href="http://brekqkim.cafe24.com/t">티스토리</a>
            </h1>
            <h2 class="sound_only">메인메뉴</h2>
            <nav>
                <ul>
                    <li><a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">피드</a></li>
                    <li><a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">스토리</a></li>
                    <li><a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=gallery">스킨</a></li>
                    <li><a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=qa">포럼</a></li>
                </ul>
            </nav>
            <h2 class="sound_only">공지사항</h2>
            <p class="notice">
                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=notice">[안내] 티스토리 앱 검색 업데이트</a>
            </p>
            <h2 class="sound_only">로그인 메뉴</h2>
            <?php echo outlogin('tistory'); ?>
            
        </header>
        <main class="sub">
<!-- } 상단 끝 -->




