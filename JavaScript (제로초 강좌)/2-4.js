// 2-4 배열기본

var 배열 = [
    '사과',
    '오렌지',
    '포도',
    '딸기',
]

배열[0]
"사과"
// 배열 시작은 1이 아닌 0

배열[4]
undefined

배열[-1]
undefined

배열[2]
"포도"

// 배열도 객체다
배열.length
4

'코좀그만골아라'[3]
"만"

'코좀그만골아라'.length
7

// 배열 그냥 검색할 시
배열
(4) ["사과", "오렌지", "포도", "딸기"]

//배열같은 객체?
var 배열같은객체 = {
    0:'코끼리',
    1:'고양이',
    2:'강아지',
    3:'얼룰말',
}

배열같은객체
{0: "코끼리", 1: "고양이", 2: "강아지", 3: "얼룰말"}

배열같은객체[2]
"강아지"

배열같은객체[3]
"얼룰말"

// Array 배열을 담당하는 객체 (베열은 아님)
var 배열같은객체 = {
    0:'코끼리',
    1:'고양이',
    2:'강아지',
    3:'얼룰말',
}
undefined

Array.isArray(배열같은객체)
false
// 얘는 배열이 아님을 알 수 있다.

// 숫자 관련 함수
Math
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}4
// Math 안에 제공되어있는 Math 관련 객체

Number('5')
5

String(5)
"5"

Boolean('true')
true

//window 함수
window
Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
// 모두 브라우저가 제공하는 객체