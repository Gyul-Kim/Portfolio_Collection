
public class Main {
	
	final static int SECOND = 1000;

	public static void main(String[] args) {
		// 연산자 사용, 시간변환 프로그램
		
		int minute = SECOND/ 60;
		int second = SECOND % 60;
		
		System.out.println(minute + "분" + second + "초");

	}

}
