var 가로 = 4;
var 세로 = 3;
var 색깔들 = ['#8A0829', '#8A0829', '#5882FA', '#5882FA', '#01DF01', '#01DF01', '#9F81F7', '#9F81F7', '#F8ECE0', '#F8ECE0', '#FA5858', '#FA5858'];
var 색깔후보 = 색깔들.slice(); // 백업변수, 참조관계가 되기 때문에 끊어야한다.
// 객체의 경우, 대입을 하게 되면 참조관계가 된다.
var 색깔 = [];
var 클릭플래그 = true;
var 클릭카드 = [];
var 완성카드 = [];
var 시작시간;

function 셔플() { // 피셔에이츠 셔플
    for (var i = 0; 색깔후보.length > 0; i += 1) {
        색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
    }
}


function 카드세팅(가로, 세로) {
    클릭플래그 = false;
    for (var i = 0; i < 가로 * 세로; i += 1) {
        var card = document.createElement('div');
        card.className = 'card';
    
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
    
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
    
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = 색깔[i]
    
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        (function (c) { // 클로저 문제 해결
            card.addEventListener('click', function() {
                if (클릭플래그 && !완성카드.includes(c)) {
                    c.classList.toggle('flipped');
                    클릭카드.push(c);
                    if (클릭카드.length === 2) {
                        if (클릭카드[0].querySelector('.card-back').style.backgroundColor === 클릭카드[1].querySelector('.card-back').style.backgroundColor) 
                        { 
                            완성카드.push(클릭카드[0]);
                            완성카드.push(클릭카드[1]);
                            클릭카드 = [];
                
                            if (완성카드.length === 12) {
                                var 끝시간 = new Date();
                                 
                                alert('성공입니다~!' + (끝시간 - 시작시간) / 1000 + '초 걸렸네요~?');
                                document.querySelector('#wrapper').innerHTML = '';
                                색깔후보 = 색깔들.slice();
                                색깔 = [];
                                완성카드 = [];
                                시작시간 = null;
                                셔플();
                                카드세팅(가로, 세로);
                            }
                        } else {  // 두 카드의 색이 다르면
                            클릭플래그 = false;
                            setTimeout(function() {
                                클릭카드[0].classList.remove('flipped');
                                클릭카드[1].classList.remove('flipped');
                                클릭플래그 = true;
                                클릭카드 = [];
                                }, 1000);
                            }
                        }
                    }
            }); // 스코프나 클로저 문제 발생할 확률 높음
        })(card);        
        document.querySelector('#wrapper').appendChild(card);
    }
    
    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(function() {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });

setTimeout(function() { // 카드 감추기
    document.querySelectorAll('.card').forEach(function (card) {
        card.classList.remove('flipped');
    });
    클릭플래그 = true;
    시작시간 = new Date();
    }, 5000);
}

셔플();
카드세팅(가로, 세로);