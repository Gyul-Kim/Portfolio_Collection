package sortingFunc;

import java.util.Arrays;
import java.util.Scanner;

public class mainClass {
	public static void main(String[] args) {		
		
		int number[] = null;
		boolean updown[] = new boolean[1];
				
		// 입력
			// 숫자의 갯수
			// 동적할당
			// 숫자들의 입력
				// 정상적인 숫자 체크 isNumber
			// 올림/내림
		number = sortInput(updown);
		
		System.out.println( Arrays.toString(number) );
		System.out.println( "updown = " + updown[0] );
		
		// 정렬처리
			// 올림/내림
			// 교환
		sorting(number, updown[0]);
		
		// 결과출력
			// 올림/내림
			// 숫자들 출력
		resultPrint(number, updown[0]);		
	}
	
	static int[] sortInput(boolean updown[]) {
		Scanner sc = new Scanner(System.in);	
		
		System.out.print("숫자 몇개를 정렬하시겠습니까? = ");
		int count = sc.nextInt();
				
		int number[] = new int[count];
		
		for (int i = 0; i < number.length; i++) {			
			while(true) {
				System.out.print((i + 1) + "번째 수 = ");
				String snum = sc.next();
				boolean b = isNumber(snum);
				if(b == true) {
					number[i] = Integer.parseInt(snum);
					break;
				}
				System.out.println("숫자가 아닙니다. 다시 입력하세요");
			}			
		}
		
		// 올림/내림
		String ud = "";
		while(true) {
			System.out.print("올림(1)/내림(2) = ");
			ud = sc.next();
			if(ud.equals("1") || ud.equals("2")) {
				break;
			}
			System.out.println("잘못 입력하셨습니다. 다시 입력해 주세요");
		}
		
		if(ud.equals("1"))	updown[0] = true;
		else				updown[0] = false;
				
		return number;
	}
	
	static boolean isNumber(String str) {
		boolean b = true;
		for (int j = 0; j < str.length(); j++) {
			char c = str.charAt(j);
			int asc = (int)c;
			if(asc < 48 || asc > 57) {
				b = false;
				break;
			}
		}
		return b;
	}
	
	static void sorting(int number[], boolean updown) {			
		for (int i = 0; i < number.length - 1; i++) {
			for (int j = i + 1; j < number.length; j++) {
				if(updown == true) {
					if(number[i] > number[j]) {
						swap(number, i, j);						
					}
				}else {
					if(number[i] < number[j]) {
						swap(number, i, j);
					}
				}
			}
		}
	}
	
	static void swap(int number[], int i, int j) {
		int temp = number[i];
		number[i] = number[j];
		number[j] = temp;
	}
	
	static void resultPrint(int number[], boolean updown) {
		if(updown) System.out.println("오름차순으로 정렬되었습니다");
		else		System.out.println("내림차순으로 정렬되었습니다");
		
		for (int i = 0; i < number.length; i++) {
			System.out.println("number" + (i + 1) + ": " + number[i]);
		}		
	}
	
}









