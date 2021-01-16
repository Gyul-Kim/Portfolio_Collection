package work05;

import java.util.Scanner;

public class mainClass {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		/*
			baseball
			
			1 ~ 10		7 3 5	
						1 2 3 <-			1 ball		
						2 3 7 <- 1 strike 	1 ball
						7 3 6 <- 2 strike
			
			랜덤 숫자 3개 달라야 한다.
						7 3 3 <- 2 strike 1 ball
			유저 숫자 3개 달라야 한다.
			
			10번의 기회
		*/
		
		// 선언
		int r_num[] = null;		// random number 저장 배열
	//	int r_num[] = { 1, 2, 3, 4, 5,  6, 7, 8, 9, 10 };	// 2번쨰 방법
		int u_num[] = null;		// user number 저장 배열
		boolean clear;
		int strike, ball;
		int gameloop;
		
		boolean swit[] = new boolean[10];
		
		// TODO:초기화
		r_num = new int[3];	
		u_num = new int[3];
		clear = false;
		gameloop = 0;
				
		for (int i = 0; i < swit.length; i++) {			
			swit[i] = false;	// 스위치를 off	
		}
		
				
		// 1. random 3개 취득
		// 1번째 방법
		/*
		while(true) {
			for (int i = 0; i < r_num.length; i++) {
				r_num[i] = (int)(Math.random() * 10) + 1;
			}
			
			if(r_num[0] != r_num[1] 
				&& r_num[0] != r_num[2]
					&& r_num[1] != r_num[2]) {
				break;
			}
		}*/
		
		// 2번째 방법
		/*
		int r1, r2;
		for (int i = 0; i < 1000; i++) {
			r1 = (int)(Math.random() * 10);	// 0 ~ 9
			r2 = (int)(Math.random() * 10);	// 0 ~ 9
			
			int temp = r_num[r1]; 			
			r_num[r1] = r_num[r2];
			r_num[r2] = temp;			
		}
		
		// r_num[0] ~ r_num[2]		
		for (int i = 0; i < r_num.length; i++) {
			System.out.println("r_num[" + i + "] = " + r_num[i]);
		}
		*/
		
		// debug 
		
		// 3번째 방법
		int r, w;
		w = 0;
			
		while(w < r_num.length) {
			r = (int)(Math.random() * 10);	// 0 ~ 9
			if(swit[r] == false) {
				swit[r] = true;
				r_num[w] = r + 1;			// 1 ~ 10
				w++;
			}			
		}
		
		for (int i = 0; i < r_num.length; i++) {
			System.out.println("r_num[" + i + "] = " + r_num[i]);
		}
		
		
		// ------------------------- loop
		while(gameloop < 10) {
		
			// 2. TODO:user input 3개 취득		
			while(true) {
				w = 0;
				while(w < 3) {
					System.out.print((w + 1) + "번째 수 = ");
					u_num[w] = sc.nextInt();
					w++;
				}
				
				if(u_num[0] == u_num[1] || 
						u_num[0] == u_num[2] || 
						u_num[1] == u_num[2]) {
					System.out.println("같은 숫자가 있습니다. 다시 입력하세요");
					continue;
				}
				break;
			}
					
			// 3. finding (판정)
			strike = ball = 0;
			// ball
			for (int i = 0; i < r_num.length; i++) {
				for (int j = 0; j < r_num.length; j++) {
					if(u_num[i] == r_num[j] && i != j) {
						ball++;
					}
				}
			}
			
			// strike
			for (int i = 0; i < r_num.length; i++) {
				if(u_num[i] == r_num[i]) {
					strike++;
				}
			}		
			
			// loop 탈출
			if(strike == 3) {
				clear = true;
				break;
			}
			
			// 4. message
			System.out.println(strike + "스트라이크 " + ball + "볼 입니다");
			
			gameloop++;
		}
		
		// --------------------------
		
		// 5. result
		if(clear) {
			System.out.println("Game Clear!!!");
		}else {
			System.out.println("Game Over~");
		}
		
		
		
		

	}

}





