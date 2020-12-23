
public class Main01 { //반복함수와 재귀함수 - 피보나치 수열
	
	public static int fibonacci(int number) {
		int one = 1;
		int two = 2;
		int result = -1;
		if(number == 1) {
			return one;
		}
		else if(number == 2 ) {
			return two;
		}
		else {
			for(int i = 2; i < number; i++) {
				result = one + two;
				one = two;
				two = result;
			}
		}
		return result;
	}

	public static void main(String[] args) {
		System.out.println("피보나치 수열의 열번째 원소는" + fibonacci(10)  );

	}

}
