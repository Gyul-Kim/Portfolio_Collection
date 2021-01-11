
public class Main01 {	// 클래스 객체지향의 기본

	public static void main(String[] args) {
		
		Node one = new Node(10, 20);
		Node two = new Node(30, 40);
		Node result = one.getCenter(two);
		System.out.println("x : " + result.getX() + " y :" + result.getY());
	}

}
