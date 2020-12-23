var word = '백년초'
while (true) {
    var newWord = prompt(word);
    if (word[word.length - 1] === newWord [0]) {
     word = newWord;
    } else {
    alert('끝말잇기란 말이에요!')
    }
}

//////
var word = '백년초초'
var answer = prompt(word)
if (word[word.length - 1] === answer[0]) {
    // 맞았을 떄
} else {
    // 틀렸을 때
}

// 끝말잇기 기본형
var word = '백년초초'

while (true) {
    var answer = prompt(word)
    if (word[word.length - 1] === answer[0]) {
    // 맞았을 때
    alert('딩동댕')
    word = answer
    }  else {
    // 틀렸을 때
    alert('땡')
    }    
}

// 별 찍기 ****
for(var star = 1; star <= 5; star+=1) {
    console.log('*')
}

for(var star = 1; star <= 5; star+=1) {
    console.log('*'.repeat(star))
}

for (var star = 5; star <= 1; star = star -= 1) {
    console.log('*'.repeat(star))
}

/*
답 

*****
****
***
**

*/

// 등차수열
for (var star = 10; star >= 2; star = star -2) {
    console.log("*".repeat(star))
}

/*

**********
********
******
****
**

*/

for (var star = 1; star <= 16; star *= 2) {
    console.log('*'.repeat(star))
}

/*

*
**
****
********
****************

*/

for(var star =5; star >= 1; star -= 1) {
    console.log(' '.repeat( 5 - star) + "*".repeat(star))
}

/*
답

*****
 ****
  ***
   **
    *

*/

for (var star = 9; star >= 1; star -= 2) {
    console.log(' '.repeat( (9 - star)/ 2 )  + '*'.repeat(star))
}

/*

*********
 *******
  *****
   ***

*/



