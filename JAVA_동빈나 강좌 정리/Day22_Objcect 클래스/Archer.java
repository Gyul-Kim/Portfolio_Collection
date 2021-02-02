
public class Archer {	// object °´Ã¼
	
	String name;
	String power;
	
	public Archer(String name, String power) {
		this.name = name;
		this.power = power;
	}
	
	public boolean equals(Object obj) {
		Archer temp = (Archer) obj;
		if(name == temp.name && power == temp.power) {
			
		} else {
			
		}
		return false;
	}

}
