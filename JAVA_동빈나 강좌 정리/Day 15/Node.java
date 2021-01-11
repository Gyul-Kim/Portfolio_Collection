
public class Node {	// 클래스 
	
	private int x;
	private int y;
	
	public int getX() {
		return x;
	}
	
	public void setX(int x) {
		this.x =x;
	}
	
	public int getY() {
		return y;
	}
	
	public void setY(int y) {
		this.y =y;
	}
	
	public Node(int x, int y) {	// 생성자 -> 객체를 넣을 때 자동으로 값을 초기화
		this.x = x;
		this.y = y;
	}
	
	public Node getCenter(Node other) {
		return new Node((this.x + other.getX()) / 2,(this.y + other.getY()) / 2);
	}
}
