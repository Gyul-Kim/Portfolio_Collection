
public class Main03 { // max라는 함수를 이용해 최댓값 저장하는 프로그램
	
	public static int max(int a, int b) {
		return ( a> b) ? a : b;
	}
	
	public static int function(int a, int b, int c) {
		int result = max(a,b);
		result = max(result, c);
		return result;
	}
	public static void main(String[] args) {
		System.out.println("(345,567,789) 중에 가장 큰 값은" + function(345,567,789));

	}

}
