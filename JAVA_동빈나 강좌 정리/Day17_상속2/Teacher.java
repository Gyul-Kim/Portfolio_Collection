
public class Teacher extends Person{

	private String teacehrID;
	private int monthSalary;
	private int worekdYear;
	public String getteacehrID() {
		return teacehrID;
	}
	public void setTeacehrID(String teacehrID) {
		this.teacehrID = teacehrID;
	}
	public int getMonthSalary() {
		return monthSalary;
	}
	public void setMonthSalary(int monthSalary) {
		this.monthSalary = monthSalary;
	}
	public int getWorekdYear() {
		return worekdYear;
	}
	public void setWorekdYear(int worekdYear) {
		this.worekdYear = worekdYear;
	}
	public Teacher(String name, int age, int height, int weight, String teacehrID, int monthSalary, int worekdYear) {
		super(name, age, height, weight);
		this.teacehrID = teacehrID;
		this.monthSalary = monthSalary;
		this.worekdYear = worekdYear;
	}
	
	public void show() {
		System.out.println("-------------------------------------------------------------------");
		System.out.println("교사 이름 : " + getName());
		System.out.println("교사 나이 : " + getAge());
		System.out.println("교사 키 : " + getHeight());
		System.out.println("교사 몸무게 : " + getWeight());
		System.out.println("교사 번호 : " + getteacehrID());
		System.out.println("교사 월급: " + getMonthSalary());
		System.out.println("교사 연차: " + getWorekdYear());	
	}
}
