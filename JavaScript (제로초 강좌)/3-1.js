// 3-1 window 객체

window
Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
//window는 브라우저 전체를 담당하는 객체

window['document']
#document
// window 안에 document 객체가 있다

window.resizeTo(200,200)
undefined

var newWindow =  window.open()
undefined
// 새 창이 뜬다

var 이름 = "백년초"
undefined

window.이름
"백년초"

function 함수(반복횟수) {
    console.log('*'.repeat(반복횟수))
}
undefined

함수(5)
*****

함수(10)
**********
// 규칙성이 다소 떨어진다. 그만큼 window가 특별한 힘을 가진다
// window는 자바 스크립트보단 브라우저에서 실행되는 면이 더 크다 (브라우저 & 노드의 면이 크다)
// 결론은 window는 자바 스크립트가 아닌, 브라우저 태그의 속성이 크다
