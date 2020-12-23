<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}
?>

<!-- } 콘텐츠 끝 -->



<!-- 하단 시작 { -->
</main>
        
        <footer>
            <h2>TISTORY</h2>
            <p>티스토리는 카카오에서 <span>♥</span>을 담아 만듭니다.</p>
            <address>&copy; kakao corp.</address>
            <h2 class="sound_only">티스토리 검색</h2>
            <form>
                <fieldset>
                    <legend class="sound_only">티스토리 검색</legend>
                    <input type="text" placeholder="티스토리검색">
                    <button type="submit">검색</button>
                </fieldset>
            </form>
            <h2 class="sound_only">하단메뉴</h2>
            <nav>
                <ul>
                    <li>
                       메뉴가 궁금할 땐
                        <ul>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=gallery">스킨</a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=qa">포럼</a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">스토리</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                       사용하다 궁금할 땐
                        <ul>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">오픈 API</a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">스킨가이드</a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">고객센터</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                       정책이 궁금할 땐
                        <ul>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">이용약관</a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free"><strong>개인정보처리방침</strong></a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">청소년보호정책</a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">오픈API 이용약관</a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">Email 수집거부정책</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                       도움이 필요할 땐
                        <ul>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">권리침해신고</a>
                            </li>
                            <li>
                                <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">상거래 피해 구제신청</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>
<script src="<?php echo G5_THEME_URL ?>/js/test.js"></script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");
?>