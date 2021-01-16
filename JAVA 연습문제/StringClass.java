package stringClass;

public class mainClass {
	public static void main(String[] args) {
		/*
			String : wrapper class
					문자열 저장, 편집, 정보 취득	
		*/
		
		String str;
		// String : 클래스명
		// str : Object(객체) == class의 변수
		
		//str = "안녕하세요";	
		str = new String("반갑습니다");
		System.out.println("str:" + str);
		
		char strChar[] = { '안', '녕' }; 
		System.out.println(strChar);
		
		String str1 = new String("하이");
		String str2 = "바이";
		
		// 문자열의 결합
		String str3;
	//	str3 = str1 + str2;		
		str3 = str1.concat(str2);		
		System.out.println("str3:" + str3);
		
		// 비교 함수
		String str4 = "hello";
		String str5 = "hell";
		
		str5 = str5 + "o";
		/*
		if(str4 == str5) {
			System.out.println("같은 문자열입니다");
		}else {
			System.out.println("다른 문자열입니다");
		}
		*/
		boolean b = str4.equals(str5);
		if(b == true) {
			System.out.println("같은 문자열입니다");
		}else {
			System.out.println("다른 문자열입니다");
		}
		
		// 지정 문자의 위치 취득
		char charArr[] = { 'a', 'b', 'c' };
		
		String str6 = "abcdabcdabcd";
				// str6 = "n:홍길동a:24";
		int n;
		
		n = str6.indexOf("c");
		System.out.println("n = " + n);
		
		n = str6.lastIndexOf("c");
		System.out.println("n = " + n);
		
		// 문자열의 길이
		System.out.println( str6.length() );
		
		str6 = "I can do it"; 
		System.out.println( str6.length() );
		
		// replace(수정)
		String str7 = "A*B**C";
		String str8 = str7.replace("B**", "B*");
		System.out.println("str8:" + str8);
		
		// split
		/*
			split: token을 활용해서 문자열을 자른다.			
			hello-world-java 	'-' token		
		*/
		
		String str9 = "홍길동-24-2001/12/21-180.1";
		String splitArr[] = str9.split("-");
		for (int i = 0; i < splitArr.length; i++) {
			System.out.println(splitArr[i]);
		}
		
		// 범위를 통해서 문자열을 취득
		String str10 = "abcdefg";
	//	String substr = str10.substring(2, 5);
		String substr = str10.substring( 4 );
		System.out.println("substr:" + substr);
		
		// 모든 문자열을 대문자, 소문자로 변경
		// Abcd -> ABCD
		// Abcd -> abcd
		
		String str11 = "abcDEF";
		String upstr = str11.toUpperCase();
		System.out.println(upstr);
		String lowstr = str11.toLowerCase();
		System.out.println(lowstr);
		
		// 앞의 공백을 제거해 주는 함수
		String str12 = "        java c언어  python    ";
		String trimstr = str12.trim();
		System.out.println("trimstr:" + trimstr);
		
		// 숫자 -> 문자열
		// valueOf
		int num = 123;
		long lo = 1234L;
		double d = 123.4567;
		
	//	String s1 = num + "";
		String s1 = String.valueOf(num);
		String s2 = String.valueOf(lo);
		String s3 = String.valueOf(d);
		
		// 탐색 : 지정 문자열을 포함하는지?
		String str13 = "서울시 강남구";
		boolean b1 = str13.contains("서울");
		System.out.println("b1:" + b1);
		
		// String 을 배열로 사용
		String str14 = "가나다라마";	// char c[] = { '가','나','다','라','마' }  
		char c = str14.charAt(2);
		System.out.println("c = " + c);
	}
}









