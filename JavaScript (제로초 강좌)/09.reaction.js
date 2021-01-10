var 스크린 = document.querySelector('#screen');
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임아웃;

// var이나 if 같이 파란색 글자를 예약어라고 함 -> 변수로 쓸 수 X
// 예약어 끼리는 변수내용이 되지 못한다.
스크린.addEventListener('click', function() {
   
    if (스크린.classList.contains('waiting')) {    // 현재 준비 상태인지 파악 가능
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하기!!'
        //스크린.style.backgroundColor = 'red';
        //스크린.style.color = 'white';
        타입아웃 = setTimeout(function() {
            시작시간 = new Date();  // 이 안에 var을 삽입할 시, 문제가 됨
            스크린.click();
        }, Math.floor(Math.random() * 1000) + 2000);    // 2000 ~ 3000 사이 수
    } else if(스크린.classList.contains('ready')) {    // 준비상태
        if(!시작시간) {  // 부정클릭    
            clearTimeout(타임아웃);
            스크린.classList.remove('ready');
            스크린.classList.add('waiting');
            스크린.textContent = '삐빅! 부정 출발했군요 -_-';
           } else {
                스크린.classList.remove('ready');
                스크린.classList.add('now');
                스크린.textContent = '클릭하세요!';
           }
    } else if(스크린.classList.contains('now')) {  // 시작상태
        끝시간 = new Date();
        console.log('반응속도', 끝시간 - 시작시간, 'ms');
        기록.push(끝시간 - 시작시간);
        시작시간 = null;
        끝시간 = null;     // 다음 게임을 위해서 초기화
        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = '클릭해서 시작하자!';
    }
});

// !는 false를 true로, true를 false로 바꿔짐
// 복습 : undefined, null, 0, NaN, false, '' 등을 의미있는 것으로 바꿔줌