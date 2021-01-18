var 상대영웅 = document.getElementById('rival-hero');
var 내영웅 = document.getElementById('myl-hero');
var 상대덱 = document.getElementById('rival-deck');
var 내덱 = document.getElementById('my-deck');
var 상대필드 = document.getElementById('rival-cards');
var 내필드 = document.getElementById('my-cards');
var 상대코스트 = document.getElementById('rival-cost');
var 내코스트 = document.getElementById('my-cost');
var 턴버튼 document.getElementById('turn-btn');
var 턴 = true;   // true면 내턴이고, false면 니 턴이다.
var 상대덱data = [];
var 내덱data = [];
var 내영웅data = [];
var 상대영웅data = [];
var 상대필드data = [];
var 내필드data = [];
var 턴 = true;

// ----------------------------------------------------------- //
// 카드돔 연결 부분 (상대덱 생성 ~ 상대영웅 생성까지 중복)
function 카드돔연결(데이터, 돔, 영웅) {
    var 카드 = document.querySelector('.card-hideen .card').cloneNode(true);
    카드.querySelector('.card-cost').textContent = data.cost;
    카드.querySelector('.card-att').textContent = data.att;
    카드.querySelector('.card-hp').textContent = data.hp;
    if (영웅) {
        카드.querySelector('.card-cost').style.display = 'none';
        var 이름 = document.createElement('div');
        이름.textContent = '영웅';
        카드.appendChild(이름)
    }
    카드.addEventListener('click', function(card) {
        if(턴) {
            if(!데이터.mine) { // 내 턴인데 상대카드를 누르면 바로 종료
                return;
            }
            var 현재코스트 = Number(내코스트.textContent);
            if(현재코스트 < 데이터.cost) {
                return;
            }
            var idx = 내덱data.indexOf(데이터);
            내덱data.splice(idx, 1);
            내필드data.push(데이터);
            console.log(내덱data, 내필드data);
            내덱.innerHTML = '';
            내필드.innerHTML = '';
            내덱data.forEach(function(data) {
                카드돔연(data, 내필드);
            });
            내필드data.forEach(function(data) {
                카드돔연결(data, 내필드);
            });
            내코스트.textContent = 현재코스트 - 데이터.cost;
        } else {
            if(데이터.mine) {  // 역시 상대턴인데 내 카드 누르면 바로 종료
                return;
            }
            var 현재코스트 = Number(상대코스트.textContent);
            if(현재코스트 < 데이터.cost) {
                return;
            }
            var idx = 상대덱data.indexOf(데이터);
            상대덱data.splice(idx, 1);
            상대필드data.push(데이터);
            상대덱.innerHTML = '';
            상대필드.innerHTML = '';
            상대덱data.forEach(function(data) {
                카드돔연(data, 상대필드);
            });
            상대필드data.forEach(function(data) {
                카드돔연결(data, 상대필드);
            });
            상대코스트.textContent = 현재코스트 - 데이터.cost;
        }
    });
    돔.appendChild(카드);
}   // 상대 + 내덱성생 & 상대영웅내영웅 생성의 중복부분

function 상대덱생성(개수) {
    for(var i = 0; i < 개수; i++)  {
        상대덱data.push(카드공장());
    }
    상대덱data.forEach(function(data) {
       카드돔연결(data, 상대덱);
    });
}
function 내덱생성() {
    for(var i = 0; i < 개수; i++)  {
        내덱data.push(카드공장(false, true));    // 내 카드는 아니지만 영웅이다?
    }
    내덱data.forEach(function(data) {
       카드돔연결(data, 내넥);
    });
}
                   
function 내영웅생성() {
    내영웅data = 카드공장(true, true); // 영웅이고 내카드다?
   카드돔연결(내영웅data, 내영웅, true);
    
}
function 상대영웅생성() {
    상대영웅data = 카드공장(true);
    카드돔연결(상대영웅data, 상대영웅, true);
}

// -------------------------------------------------------------//

function Card(영웅, 내카드) {
    if (영웅) {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
    } else {
        this.att = Math.ceil(Math.random() * 5);
        this.hp= Math.ceil(Math.random() * 5);
        this.cost = Math.floor(this.att + this.hp / 2);
    }
    if(내카드) {
        
    }
}
    
function 카드공장(영웅) {
    return new Card(영웅); 
}

// 초기세팅 부분
function 초기세팅() {
    상대덱생성(5);
    내덱생성(5);
    내영웅생성();
    상대영웅생성();
}    

초기세팅();

// 페이즈 부분
function 페이즈() {
    카드꺼내기();
    공격();
}

페이즈();

// 턴

function 카드꺼내기() {
    
}