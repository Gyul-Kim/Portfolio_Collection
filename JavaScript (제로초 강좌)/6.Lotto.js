//var 후보군 = Array(45); //
//var 필 = 후보군.fill();
//console.log(필);

//[undefined,undefined, undefined,undefined, undefined];
//[1,2,3,4,5,];
//mapping, 맵

//필.forEach(function(요소, 인덱스) {
    //필[인덱스] = 인덱스 + 1;
//});

//var 맵 = 필.map(function(요소, 인덱스))
    //return 인덱스 + 1;

//console.log(필);

var 후보군 = Array(45)
.fill()
.map(function(요소, 인덱스){
    return 인덱스 + 1;
});
console.log(후보군);

var 셔플 = [];
while(후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1) [0];
    셔플.push(이동값);
}
console.log(셔플);

var 보너스 = 셔플[셔플.length - 1];
var 당첨숫자들 = 셔플.slice(0, 6).sort(function( p, c) { return p - c; });

// 3 - 7 = -4
// 4 - 3 = 1
// 8 - 3 = 5
// sort의 오름차순 원리 (0보다 크면 순서를 바꿈)

console.log('당첨숫자들', 당첨숫자들, 'Bonus', 보너스);

var 결과창 = document.querySelector('#result');
// div 태그가 감김

function 공색칠하기(숫자, 결과창) {
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    공.style.fontSize = '12x';
    공.className = '공아이디' + 숫자;
    
    var 배경색;
    if(숫자 <= 10) {
       배경색 = 'red';
        } else if (숫자 <= 20) {
        배경색 = 'orange';
        } else if (숫자 <= 30) {
        배경색 = 'yellow';
        } else if (숫자<= 40) {
        배경색 = 'blue';
        } else {
        배경색 = 'green';
        }
    
    공.style.background = 배경색;
    result.appendChild(공);
}

// 1번숫자
setTimeout(function 비동기콜백함수() {    
    공색칠하기(당첨숫자들[0], 결과창);
}, 1000);

// 2번숫자
setTimeout(function 비동기콜백함수() {    
    공색칠하기(당첨숫자들[1], 결과창);
}, 2000);

// 3번숫자
setTimeout(function 비동기콜백함수() {    
    공색칠하기(당첨숫자들[2], 결과창);
}, 3000);
    

// 4번숫자
setTimeout(function 비동기콜백함수() {    
    공색칠하기(당첨숫자들[3], 결과창);
}, 4000);
    

// 5번숫자
setTimeout(function 비동기콜백함수() {    
    공색칠하기(당첨숫자들[4], 결과창);
}, 5000);
    

// 6번숫자
setTimeout(function 비동기콜백함수() {    
    공색칠하기(당첨숫자들[5], 결과창);
}, 6000);
        
//보너스 숫자
setTimeout(function 비동기콜백함수() {
var 칸 = document.querySelector('.Bonus')[0];
 공색칠하기(보너스, 칸);
} ,7000);
    

// '클로저'를 해결하지 못했기에 볼 하나당 함수와 시간을 설정한다!
