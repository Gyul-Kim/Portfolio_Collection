// 생성자와 new

var prototype = {
    type : '카드',
}
function 카드공장(name, att, hp) {
    var 카드 = Object.create(prototype);
    카드.name = name;
    카드.att = att;
    카드.hp = hp;
    return 카드;
}

function Card(name, att, hp) {
    this.name = name;
    this.att = att;
    this.hp = hp;
}
Card.prototype = prototype;
// {type : "카드"}

var 백년초 = new Card('백년초', 5, 10)
// undefined

백년초 
// Card {name : "백년초", 5, 10}

var 무지 = new Card('무지', 1, 2);
//undefined, console에서 사용할 시 위와 똑같이 나옴