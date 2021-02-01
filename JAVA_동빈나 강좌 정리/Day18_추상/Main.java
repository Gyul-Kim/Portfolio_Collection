
public class Main extends Player {	// 추상 객체지향

	public static void main(String[] args) {
		Main main = new Main();
		main.play("BTS - Dynamite");
		main.pause();
		main.stop();

	}

	@Override
	void play(String songName) {

		System.out.println(songName + "을 재생합니다.");
		
	}

	@Override
	void pause() {
		System.out.println("곡을 일시정지합니다.");
		
	}

	@Override
	void stop() {
		System.out.println("곡을 정지합니다.");
		
	}

}
