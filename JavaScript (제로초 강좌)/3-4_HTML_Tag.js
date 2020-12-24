// 3-4. HTML 태그 만들기
var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '백년초';
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력하세요';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

//3-5 끝말잇기 화면에 표시 ~ 3-6 이벤트 리스너 표시
폼.addEventListener('submit', function 콜백함수 (이벤트) {   // 익명함수
    이벤트.preventDefault();
    if(단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {//'안녕하세요'[4]
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
}); // 안에 있는 function이 콜백 함수

function 더하기(숫자1, 숫자2) {
    console.log(숫자1 + 숫자2);
}
더하기 (3, 5)
/*
var word = '백년초'
while (true) {
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
     alert('딩동댕');
      word = answer;
    } else {
     alert('땡');
    }
}
*/