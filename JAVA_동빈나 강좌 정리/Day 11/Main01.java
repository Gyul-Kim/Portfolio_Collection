
public class Main01 {	// 반복함수와 재귀함수
	// 반복함수 구현

	
	public static int factorial(int number) {
		int sum =1;
		for(int i = 2; i <+ number; i++) {
			sum *= i;
		}
		return sum;
	}
	
	public static void main(String[] args) {
		System.out.println("10 팩토리얼은 " + factorial(10));
		

	}

}
