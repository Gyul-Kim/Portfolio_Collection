
public class Main implements Dog, Cat {	// extends를 사용하지 않는다.
// 또한 두 가지 class를 받을 수 있는 장점이 있다. (extends는 오류 발생)
	
	public static void main(String[] args) {
		Main main = new Main();
		main.crying();
		main.one();
		main.two();
		
	}


	@Override
	public void two() {
		System.out.println("멍~멍~멍 ^^");
		
	}

	@Override
	public void one() {
		System.out.println("카핡!!!!! -_-+");
		
	}


	@Override
	public void crying() {
		System.out.println("HELLO FXCK");
		
	}

}
