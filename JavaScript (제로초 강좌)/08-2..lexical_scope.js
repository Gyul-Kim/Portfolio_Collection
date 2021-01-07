// 1. lexical scope
var name = 'zero';
function log(){ //3번
    console.log(name);  // zero로 위로 타고간다. 이 네임은 무슨일이 있어도 1번 네임과 연결된다.
}

function wrapper() {
    var name = 'nero';  //2번
    log();
}
wrapper();//1번

// 코드가 적히면 소크프고 정해짐 => lexical scope 라고 함
// 자바 스키립트는 다이나믹한 구조지만, 유일하게 스코프는 정적임

//2. closure
// 반복문과 비동기 함수가 만날 때 클러저 문제가 자주 발생
for(var i = 0; i < 100; i++) {
    setTimeout(function() {
        console.log(i); // i는 18번 i 무슨일이 있어도.
    }, i * 1000);   // 0~999까지 찍히는 걸 -> but, 실제로는 100만 찍힘
}

for(var i = 0; i < 100; i++) {
    function 클로저(j) {
        setTimeout(function() {
            console.log(i); // i는 18번 i 무슨일이 있어도.
        }, j * 1000)
    }
    클로저(1);
}

/////////////////////////////////////////////////

    function 클로저(j) {
        setTimeout(function() {
            console.log(j); // i는 18번 i 무슨일이 있어도.
        }, j * 1000)
    }
    클로저(2);
    
     //... * 100번 실행된다고 생각해보셈
    
    for(var i = 0; i < 100; i++) {
    function 클로저(j) {
        setTimeout(function() {
            console.log(j); // i는 18번 i 무슨일이 있어도.
        }, j * 1000)
    }
    클로저(99);
}

// ex. 클로저 원리로 6번 로또 함수를 만든다면...


/*
for (var i = 0; i < 당첨숫자들.length; i++) {
    function 클로저(j) {
        setTimeout(function() {
            공색칠하기(당첨숫자들[j], 결과창);
        }, ( j + 1 ) * 1000);
    }
    클로저(i);
}   // 물론 즉시 실행 함수로 사용해도 된다.
*/


