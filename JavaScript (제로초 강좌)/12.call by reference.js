// call by reference & call by value & call by sharing

function 함수(매개변수) {
    console.log(매개변수);
}
// undefined

함수(5)
//5
// undefined

function 함수(매개변수) {
    매개변수 = 10;
    console.log(매개변수);
}

var 인자 = 5;
함수(인자);
console.log(인자);

function 함수(매개변수) {
    매개변수.a = 10;
    console.log(매개변수);
}
// 이것은 call by reference 가 아니다. 스크립트에 없는 것. 
// 정확히는 call by value라고 한다

var 인자 = { a : 5}
함수(인자);
console.log(인자);