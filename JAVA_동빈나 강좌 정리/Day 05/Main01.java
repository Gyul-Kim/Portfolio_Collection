
public class Main01 {

	public static void main(String[] args) {
		int i = 20;
		i++;
		
		i += 1;
		System.out.println(i);
		
		// 등호 표현할 때의 오류
		//System.out.println( 100 < i < 200); -> 오류발생
		System.out.println(i);
		System.out.println( (100 <i) && (i<200));

		
	}
}
