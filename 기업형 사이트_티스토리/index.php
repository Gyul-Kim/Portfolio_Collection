<?php
define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>

<main>
            <section id="slider" class="white">
                <h2 class="sound_only">프로모션</h2>
                <ul>
                    <li>
                        <h3>티스토리 앱 2.0<br>
                            <span class="bold">업데이트</span>
                        </h3>
                        <p>
                        모바일에서도 편리한 블로그 관리를 위해<br>
                        티스토리 앱이 새 옷을 입었습니다.
                        </p>
                        <p>
                            <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">자세히 보기</a>
                        </p>
                    </li>
                    <li>
                        <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">새로운 에디터를 소개합니다.</a>
                    </li>
                    <li>
                        <h3>입맛대로 사이트 스타일링</h3>
                        <p>신상 스킨 입점, 커버로 내 사이트를 멋지게 스타일링 하세요.</p>
                        <p>
                            <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">새 스킨 보러가기</a>
                        </p>
                    </li>
                    <li>
                        <video muted autoplay>
                            <source src="https://t1.daumcdn.net/tistory_admin/top/top_tistory.mp4" type="video/mp4">
                        </video>
                    </li>
                </ul>
            </section>
            <section id="show">
                <h2 class="sound_only">SHOWCASE</h2>
                <p class="text_1">이 놀라운 사이트들이 <br><span class="bold">모두<span>다</span>티스토리</span>라는 사실</p>
                <p class="text_2">티스토리는 그저 공간일 뿐이에요. <br>그 공간에 무슨 일이 일어날지는 아무도 상상 할 수 없죠.</p>
                <ul>
                    <li>
                        <h3>yunscent</h3>
                        <p>사진이 그림이 됩니다.</p>
                        <p>
                            <a href="http://so-oh.tistory.com/category">http://so-oh.tistory.com/category</a>
                        </p>
                    </li>
                    <li>
                        <h3>빛으로 쓴 편지</h3>
                        <p>여행하고 글을 씁니다.</p>
                        <p>
                            <a href="http://mistyfriday.kr">http://mistyfriday.kr</a>
                        </p>
                    </li>
                    <li>
                        <h3>신세계백화점 공식 블로그</h3>
                        <p>다양한 쇼핑정보와 최신 트렌드를 한번에 만나볼 수 있는 곳</p>
                        <p>
                            <a href="http://shinsegaeblog.com">http://shinsegaeblog.com</a>
                        </p>
                    </li>
                    <li>
                        <h3>LIM ARCHITECTS</h3>
                        <p>대구 젊은 건축가 그룹 건축사 사무소 엘아이엠. 대구 건축 설계, 컨설팅, 인테리어</p>
                        <p>
                            <a href="http://www.limarchitects.co.kr">http://www.limarchitects.co.kr</a>
                        </p>
                    </li>
                    <li>
                        <h3>HOTEL 990</h3>
                        <p>WELCOME TO THE HOTEL 990</p>
                        <p>
                            <a href="http://hotel990.com">http://hotel990.com</a>
                        </p>
                    </li>
                    <li>
                        <h3>현대카드 현대키피탈 블로그</h3>
                        <p>현대카드 현대캐피탈 공식 블로그</p>
                        <p>
                            <a href="http://blogview.hyundaicardcapital.com">http://blogview.hyundaicardcapital.com</a>
                        </p>
                    </li>
                    <li>
                        <h3>신세계그룹</h3>
                        <p>공식블로그 신세계그룹 공식블로그에서 행복이 춤추는 일상을 만나세요!</p>
                        <p>
                            <a href="http://www.ssgblog.com">http://www.ssgblog.com</a>
                        </p>
                    </li>
                    <li>
                        <h3>Beyond Perspective</h3>
                        <p>Lee Heehoon, photographer for ohmynews Seoul S.Korea</p>
                        <p>
                            <a href="http://leeheehoon.tistory.com">http://leeheehoon.tistory.com</a>
                        </p>
                    </li>
                    <li>
                        <h3>부산버스앱</h3>
                        <p>부산 노선정보 및 실시간 도착정보 알림</p>
                        <p>
                            <a href="http://busanbusapp.tistory.com">http://busanbusapp.tistory.com</a>
                        </p>
                    </li>
                    <li>
                        <h3>HYGPHOTO</h3>
                        <p>아름다운 일상의 한 컷</p>
                        <p>
                            <a href="https://hygphoto.tistory.com">https://hygphoto.tistory.com</a>
                        </p>
                    </li>
                 
                </ul>
                <p>
                    <button type="button">이전</button>
                    <button type="button">다음</button>
                </p>
                <p>
                    <a href="#">Channel CJ</a>
                    <a href="#">현대백화점 공식블로그</a>
                    <a href="#">IBK 기업은행 블로그</a>
                    <a href="#">교육부 공식블로그</a>
                    <a href="#">갤러리라 공식블로그 'BLOG DE GALLERIA'</a>
                    <a href="#">파라다이스 블로그</a>
                </p>
            </section>
            <section id="skin">
               <div>
                    <h2 class="sound_only">스킨고르기</h2>
                    <p class="text_1 text_center">마음에 드는 <span class="bold">스킨</span><span class="bold">고르기</span>부터 시작해보세요</p>
                    <p class="text_2 text_center">
                        티스토리는 얼굴이 없어요.
                        <br>
                        당신이 얼굴을 직접 제작할 수 있도록 다양한 스킨을 제공할 뿐이에요.
                    </p>
                </div>
                
                <div class="side">
                    <div>
                        <p class="text_1">마음대로 <span class="bold">조립하는</span> 내 콘텐츠</p>
                        <p class="text_2">
                            내 마음대로 위치를 바꿔
                            <br>
                            하나의 커버로도 전혀 다른 스킨을
                            <br>
                            만들 수 있어요.
                        </p>
                    </div>
                </div>
                <div>
                    <ul id="skin_slider">
                        <li><img src="img/skin_header.jpg" alt=""></li>
                        <li><img src="img/thumb_skin2_1.jpg" alt=""></li>
                        <li><img src="img/thumb_skin2_2.jpg" alt=""></li>
                        <li><img src="img/thumb_skin2_3.jpg" alt=""></li>
                    </ul>
                </div>
                <div class="side">
                    <ul id="skin_slider2">
                        <li><img src="img/thumb_skin1_1.jpg" alt=""></li>
                        <li><img src="img/thumb_skin1_2.jpg" alt=""></li>
                        <li><img src="img/thumb_skin1_3.jpg" alt=""></li>
                    </ul>
                </div>
                <p>
                    <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">
                        <span>Poster</span>
                        <span>스킨 보기</span>
                    </a>
                </p>
            </section>
            <section id="photo" class="on">
                <div>
                    <h2 class="sound_only">사진변경</h2>
                    <p class="text_1">
                        <span class="bold">사진만 바꾸어도</span>
                        다른 분위기
                    </p>
                    <p class="text_2">
                        스킨은 그저 캔버스일 뿐입니다.
                        <br>
                        스킨 속 같은 커버라도 이미지에 따라
                        <br>
                        전혀 다른 분위기를 연출할 수 있어요.
                    </p>
                </div>
                <p class="skin_bt">
                    <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">
                        <span>Whatever</span>
                        <span>스킨 보기</span>
                    </a>
                </p>
                <div aria-hidden="true" id="photo_bg">
                    <div>
                        <p class="fade"></p>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        <p class="fade"></p>
                    </div>
                </div>
                
            </section>
            <section id="blog">
                <h2 class="sound_only">블로그와 매거진처럼</h2>
                <p class="text_1">
                    때로는 <span class="bold">블로그</span>처럼,
                    <br>
                    때로는 <span class="bold">매거진</span>처럼
                </p>
                <p class="text_2">복잡하지 않으면서 깔끔한 스킨 커버로
                    <br>
                    "콘텐츠에 힘을 실어 줄 수 있습니다."
                </p>
                <p class="bg">
                    <img src="img/magazin_01.jpg" alt="Letter 스킨">
                </p>
                <div aria-hidden="true" id="blog_bg">
                </div>
                <p class="skin_bt">
                    <a href="http://brekqkim.cafe24.com/t/bbs/board.php?bo_table=free">
                        <span>Letter</span>
                        <span>스킨 보기</span>
                    </a>
                </p>
            </section>
            <section id="info">
                <h2 class="sound_only">이용가이드</h2>
                <h3 class="text_2">더 잘 쓰고 싶어요?</h3>
                <p class="text_2">
                    당신의 티스토리에 <span class="bold">플러그인</span>을
                    <br>
                    사용할 수 있어요.
                </p>
                <p class="text_2">
                    사이트 보안을 위해 더 안전한
                    <br>
                    <span class="bold">암호화 접속</span>을 사용해보세요.
                </p>
                <p class="text_2">
                    콘텐츠를 고정된 메뉴로 유지하고 싶다면
                    <br>
                    <span class="bold">페이지</span>를 이용해보세요.
                </p>
                <p class="text_2">
                    나만의 <span class="bold">도메인</span>을 연결해보세요.
                    <br>
                    당신의 티스토리에 엣지가 생길거에요.
                </p>
                <p class="text_2">
                    <span class="bold">로그인 보안</span>기능으로 당신의 정보와
                    <br>
                    콘텐츠를 안전하게 지키세요!
                </p>
            </section>
            <section id="start">
                <h2 class="sound_only">가입안내</h2>
                <p class="text_1">
                   당신도 얼마든지
                   <br>
                   <span class="bold">시작할 수 있어요</span>
                </p>
                <p class="text_2">
                    "이제는 초대장이 필요없어요."
                    <br>
                    "지금 바로 당신의 공간으로 들어와 보세요."
                </p>
                <p class="bt">
                    <a href="<?php echo G5_BBS_URL ?>/register.php">가입하기</a>
                </p>
                <div aria-hidden="true" id="start_bg">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>

<script>
	$("main").removeClass("sub");
	$("#main_header").addClass("white");
</script>
                            
        </main>

<?php
include_once(G5_THEME_PATH.'/tail.php');
?>