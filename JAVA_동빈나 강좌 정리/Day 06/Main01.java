
public class Main01 {

	public static void main(String[] args) {
		String a = "Man";
		int b = 0;
		
		// java는 String 비교시 equal()을 이용한다.
		// String은 다른 자바형과 다른 문자열 자료형이기 때문이다.
		
		if(a.equals("Man")) {
			System.out.println("남자입니다.");
		}
		else {
			System.out.println("남자가 아니다.");
		}
		
		if(b==3) {
			System.out.println("b는 3입니다.");
		}
		else {
			System.out.println("b는 3이 아니다.");
		}
		
		if(a.equalsIgnoreCase("man") && b ==0) {
			System.out.println("참.");
		}
		else {
			System.out.println("구라.");
		}

	}

}
