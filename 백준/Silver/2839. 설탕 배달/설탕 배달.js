const fs = require('fs').readFileSync('/dev/stdin')
let input = +fs
let answer = 0;

while(true){
    if(input % 5 === 0 || input === 0){
        console.log((input / 5) + answer)
        break;
    } else if(input < 0){
        console.log(-1)
        break;
    }
    
    answer++;
    input -= 3;
}