const fs = require('fs').readFileSync('/dev/stdin')
const X = +fs;

let stick = [64]
let count = 0;

while(true){
    let sum = stick.reduce((p, c) => p + c)
    if(sum > X){
        let half = stick[stick.length - 1] / 2
        stick.pop()
        stick.push(half)
    } else if (sum < X) {
        stick.push(stick[stick.length - 1] / 2)
    } else {
        console.log(stick.length)
        break;
    }
}

