package work06;

import java.util.Scanner;

public class mainClass {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		// 입력된 문자열이 모두 숫자인지 확인 코드
		/*
			String 	"12345"		모두 숫자입니다.
					"123a34"	숫자가 아닙니다.	
		 */
		/*
		System.out.print("문자열 입력 = ");
		String strNum = sc.next();
		
		// 문자열의 길이		123asd
		int len = strNum.length();
		*/
		/*
		char c = strNum.charAt(0);
		int ascCode = (int)c;
		// System.out.println("ascCode:" + ascCode);
		if(ascCode >= 48 && ascCode <= 57) {
			System.out.println("숫자입니다");
		}else {
			System.out.println("숫자가 아닙니다");
		}
		*/
		
		/*
		// 123a34
		boolean b = false;
		for(int i = 0;i < len; i++) {			
			char c = strNum.charAt(i);
			int ascCode = (int)c;
			if(ascCode < 48 || ascCode > 57) { // 문자
				b = true;
				break;
			}			
		}
		
		if(b == true) {
			System.out.println("문자가 포함되어 있습니다");
		}else {
			System.out.println("모두 숫자로 되어 있습니다");
		}
		*/
		
		
		
		/*
		// 입력을 받은 수가 정수, 소수인지를 판단하는 코드
		// 정수입니다, 소수입니다
		System.out.print("숫자 입력 = ");
		String strNum = sc.next();
		
		// '.'가 있으면 소수.  0, n-1 
		int len = strNum.length();
		int result = 0;
		for (int i = 0; i < len; i++) {
			char c = strNum.charAt(i);
			// 문자열인 경우
			if((i == 0 && c == '.') || (i == strNum.length()-1 && c == '.')) {
				result = 1;
				break;
			}
			// '.'가 있는지?
			if(c == '.') {
				result = 2;
				break;
			}			
		}
		
		switch(result) {
			case 0:
				System.out.println("이 숫자는 정수로 되어 있습니다");
				break;
			case 1:
				System.out.println("문자가 포함되어 있습니다");
				break;
			case 2:
				System.out.println("이 숫자는 소수로 되어 있습니다");
				break;
		}
		*/
				

		
		// 입력된 알파벳 문자열을 모두 대문자로 변경하는 코드
		// toUpperCase
		// ASCII	A == 65  a == 97 -> 32
		String strNum = "abcDEF";
		String result = "";
		for(int i = 0;i < strNum.length(); i++) {
			
			int asc = (int)strNum.charAt(i);
			
			if(asc >= 65 && asc <= 90) {	// 대문자인 경우
				result = result + (char)asc;
			}else {
				asc = asc - 32;
				result = result + (char)asc;
			}
		}
		System.out.println("원문자열:" + strNum);
		System.out.println("변환문자열:" + result);
		
		
		/*
		피보나치(Fibonnaci) 수열(數列)은 앞을 두 수를 더해서 다음 수를 만들어 나가는 수열이다. 
		예를 들어 앞의 두 수가 1과 1이라면 그 다음 수는 2가 되고 그 다음 수는 1과 2를 더해서 3이 되어서 
		1,1,2,3,5,8,13,21,... 과 같은 식으로 진행된다. 
		피보나치수열의 30번째 수는 무엇인지 계산하는 프로그램을 완성하시오.
		*/
	}
}




