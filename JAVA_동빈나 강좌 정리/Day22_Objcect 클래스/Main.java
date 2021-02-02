
public class Main {

	public static void main(String[] args) {
		
		Archer archer1 = new Archer("±Ã»ç1", "»ó");
		Archer archer2 = new Archer("Á¶¼±È­¶û", "ÃÖ»ó");
		System.out.println(archer1== archer2);
		System.out.println(archer1.equals(archer2));
	}

}
