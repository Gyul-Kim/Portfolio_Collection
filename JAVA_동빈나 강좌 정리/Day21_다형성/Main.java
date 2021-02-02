import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Æ÷µµ : 1, µþ±â : 2 ?");
		int input = scanner.nextInt();
		
		Fruit fruit;
		if(input == 1) {
			fruit = new Grape();
			fruit.show();
		}
		else if(input == 2) {
			fruit = new Strawberry();
			fruit.show();
		}
		
		//Fruit fruit = new Grape();
		//fruit.show();
		
	}

}
