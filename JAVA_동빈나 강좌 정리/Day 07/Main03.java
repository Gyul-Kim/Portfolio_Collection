import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
// 파일입출력

public class Main03 {
	public static void main(String[] args) {
		
		File file = new File("input.txt");
		try {
			Scanner sc = new Scanner(file);
			while(sc.hasNextInt()) {
				System.out.println(sc.nextInt() * 100);
			}
			sc.close();
		} catch (FileNotFoundException e) {
			System.out.println("파일을 읽어오는 도중에 오류가 발생했습니다.");
		}

	}
	
}
