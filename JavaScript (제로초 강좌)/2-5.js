//2-5 구구단 구현

Math.random()

Math.random()
0.7234471659757682

Math.random()
0.8587964065328726

Math.random()
0.2261647409979899

// random 인데 random이 아니다?
// 순수한 random이 아니라서 엄밀한 random을 쓰기 위해선 math.random 쓰는 게 아님

Math.floor(Math.random() * 9)
7

Math.floor(Math.random() * 9) + 1
6
// 우선순위는 소괄호 안에 있는 것
// 이렇게 할 시 숫자 1~9까지 나온다


while (true) {
    var 숫자1 = Math.floor(Math.random() * 9) + 1
    var 숫자2 = Math.floor(Math.random() * 9) + 1
    var 결과 = 숫자1 * 숫자2
    var 조건 = true;
    while (조건) {
    var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?') 
    if (결과 === Number(답)) {
        alert('딩동댕');
        조건 = false;
        } else {
        alert('땡')
        }
    }
}
// 아주 잘 나온다 [clear]
// 무한 반복문 끄고 싶으면 shift + esc눌러 크롬 관리자창에서 현재 탭 종료
