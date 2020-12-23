
public class Main04 {

	public static void main(String[] args) {
		
		int a = 50;
		int b = 50;
		
		System.out.println("a와 b는 같은가요?" + ( a == b));
		System.out.println("a가 b보다 큰가요?" + ( a > b));
		System.out.println("a가 b보다 작은가요?" + ( a < b));
		System.out.println("a가 b와 같으면서 a가 30보다 큰가요" + (( a == b)&& (a > b)));
		System.out.println("a가 50이 아닌가요?" +! (a == 50));
	}

}
