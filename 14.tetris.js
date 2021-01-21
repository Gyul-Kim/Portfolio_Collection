var tetris = document.querySelector('#tetris');
var tetrisData = [];
var blockArr = [
    
    
    
];
var blockDict = {
    1 : [ 'red', 'true', [
        [1, 1],
        [1, 1]
    ] ],
    2: [ 'blue', 'true', [
        [1, 1, 0],
        [0, 1, 1]
    ] ],
    3 : [ 'orange', 'true', [
        [1, 1, 0],
        [0, 1, 1]
    ] ],
    4 : [ '#0080FF', 'true', [
        [0, 1, 1],
        [1, 1, 0]
    ] ],
    5 : [ '#A5DF00', 'true', [
        [1, 1, 1],
        [1, 0, 0]
    ] ],
    6 : [ '#DF01A5', 'true', [
        [1, 1, 1],
        [0, 0, 1]
    ] ],
    7 : [ '#FFFF00', 'true', [
        [1, 1, 1, 1]
    ] ],
    10 : [ 'red', 'true', [] ],
    20 : [ 'red', 'true', [] ],
    30 : [ 'red', 'true', [] ],
    40 : [ 'red', 'true', [] ],
    50 : [ 'red', 'true', [] ],
    60 : [ 'red', 'true', [] ],
    70 : [ 'red', 'true', [] ],
}

function 칸만들기() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 20; i++) {
        var tr = document.createElement('tr');
        var arr = [];
        tetrisData.push();
        fragment.appendChild(tr);
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            arr.push(0);
        }
    }
    console.log(tetris, fragment);
    tetris.appendChild(fragment);
}

function 화면그리기() {
    tetrisData.forEach(function (tr, i) {
       tr.forEach(function(td, j) {
           tetris.children[i].children[j].className = blockDict[td][0];
       }); 
    });
}

function 블록생성기() {
    var 블록 = blockArr[Math.floor(Math.random() * 7)][2];
    console.log(블록);
    블록.forEach(function(tr, i) {
       tr.forEach(function(td, j) {
           // TODO : 블록 생성할 때 이미 다 차있으면 게임오버임
           if (tetrisData[i+1]) {
            tetrisData[i + 1][j] = td;
            tetrisData[i][j] = 0;
           } else { // 끝에 도달
               tetrisData[i][j] = td * 10;
           }
       }); 
    });
    화면그리기();
}

function 블록내리기() {
    for (var i = tetrisData.length - 1; i >= 0; i--) {
        tetrisData[i].forEach(function(td, j) {
           if(td > 0 && td < 10) {
               tetrisData[i + 1][j] =td;
               tetrisData[i][j] = 0;
           } 
        });
    }
    화면그리기();
}

window.addEventListener('keydown', function(e) {
    switch (e.code) {
        case 'ArrowRight' :
            console.log('ArrowRight');
            break;
        case 'ArrowLeft' :
            console.log('ArrowLeft');
            break;
        case 'ArrowDown' :
            console.log('ArrowDown');
            break;
        default :
            break;
    }
});


window.addEventListener('keyup', function(e) {
    console.log(e);
    switch (e.code === 'space') {
        case 'Space' : // 한방에 내리기
            console.log('Space');
            break;
        case 'ArrowRight' :   // 오른쪽 이동
            onsole.log('ArrowRight');
            break;
        case 'ArrowLeft' :  // 오른쪽 이동
            onsole.log('ArrowLeft');
            break;
        case 'ArrowDown' : // 오른쪽 이동
            onsole.log('ArrowDown');
            break;
        case 'ArrowUp' :// 오른쪽 이동
            onsole.log('ArrowUp');
            break;
    }
});

칸만들기();
블록생성기();
setInterval(블록내리기, 1000);