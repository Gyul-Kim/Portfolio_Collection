package funcWork;

import java.util.Arrays;

public class mainClass {

	public static void main(String[] args) {
		
		// 2차원 배열 -> 1차원 배열
		int array2[][] = {
				{ 1, 2, 3, 4 },
				{ 5, 6, 7, 8 },
				{ 9, 10, 11, 12 },
		};
		
		int array1[] = null;
		array1 = array2ToArray1(array2);
		
		System.out.println( Arrays.toString(array1) );
		
		
				
				
		// 암호화
	//	String originalCode = "abc012";
		String originalCode = "hello201109";
		
		String resultCode = encoding(originalCode);
				
		System.out.println("originalCode:" + originalCode);
		System.out.println("resultCode:" + resultCode);
				
		// 복호화
		String baseCode = deciphering(resultCode);
				
		System.out.println("baseCode:" + baseCode);
		
		
	}
	
	static int[] array2ToArray1(int arr[][]) {
		if(arr == null || arr.length == 0) return null;
				
		int array[] = new int[arr.length * arr[0].length];
		
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr[i].length; j++) {
				array[arr[0].length * i + j] = arr[i][j];
			}
		}
		
		return array;
	}
	
	// 암호화
	static String encoding(String originalCode) {
		
		// file에서 읽어 온다
		// 암호화, 복호화 
		char abcCode[] = {	 // a ~ z
				'`', '~', '!', '@', '#',	
				'$', '%', '^', '&', '*',
				'(', ')', '-', '_', '+', 
				'=', '|', '[', ']', '{', 
				'}', ';', ':', ',', '.', '/'
		};
		
		char numCode[] = {	// 0 ~ 9
				'q', 'w', 'e', 'r', 't', 
				'y', 'u', 'i', 'o', 'p' 
		};		
		
		String resultCode = "";
		
		for (int i = 0; i < originalCode.length(); i++) {
			char c = originalCode.charAt( i );
			int asc = (int)c;
			
			// 알파벳
			if(asc >= 97 && asc <= 122) {	
				// 97 ~ 122 ->	0 ~ 25
				asc = asc - 97;
				resultCode = resultCode + abcCode[asc];											
			}		
			// 숫자
			if(asc >= 48 && asc <= 57) {	
				// 48 ~ 57 -> 0 ~ 9
				asc = asc - 48;
				resultCode = resultCode + numCode[asc];
			}		
		}
		
		return resultCode;
	}
	
	// 복호화
	static String deciphering(String resultCode) {
		
		// 암호화, 복호화 
		char abcCode[] = {	 // a ~ z
				'`', '~', '!', '@', '#',	
				'$', '%', '^', '&', '*',
				'(', ')', '-', '_', '+', 
				'=', '|', '[', ']', '{', 
				'}', ';', ':', ',', '.', '/'
		};
		
		char numCode[] = {	// 0 ~ 9
				'q', 'w', 'e', 'r', 't', 
				'y', 'u', 'i', 'o', 'p' 
		};	
		
		String baseCode = "";
		
		for (int i = 0; i < resultCode.length(); i++) {
			char c = resultCode.charAt( i );
			int _asc = (int)c;
	
			if(_asc >= 97 && _asc < 122) {	// 암호화된 숫자
				int index = 0;
				for(int j = 0;j < numCode.length; j++) {
					if(c == numCode[j]) { // 찾았다
						index = j;
						break;
					}
				}
				// 48 ~ 57
				index = index + 48;
				baseCode = baseCode + (char)index;			
				
			}else {							// 암호화된 알파벳
				int index = 0;
				for(int j = 0;j < abcCode.length; j++) {
					if(c == abcCode[j]) {	// 찾았다
						index = j;
						break;
					}
				}
				// 97 ~ 122
				index = index + 97;
				baseCode = baseCode + (char)index;			
			}		
		}
		return baseCode;
	}
	
	

}







