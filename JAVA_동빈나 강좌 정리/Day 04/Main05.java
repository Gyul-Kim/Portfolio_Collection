
public class Main05 {

	public static void main(String[] args) {
		//3항 연산자
		
		int x = 50;
		int y = 60;
		
		System.out.println("최댓값" + max(x,y) +"입니다.");
		

	}
	
	// 반환형, 함수이름, 매개 변수
	static int max(int a, int b) {
		int result = ( a > b) ? a : b;
		return result;
	}
}
