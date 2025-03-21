const fs = require('fs').readFileSync('/dev/stdin');
const [H, M] = fs.toString().trim().split(' ').map(Number);

// 45분 빼고 출력하기
// 60분이고, M - 45 < 0 이면 H에서 -1 하고 60 - 뺀 값

function setAlam(H, M){
    let newH = H;
    let newM = M - 45;
    if(newM < 0){
        newM = 60 + newM;
        newH -= 1;
        if(newH < 0){
            newH = 23;
        };
    };
    
    console.log(`${newH} ${newM}`)
}

setAlam(H, M);