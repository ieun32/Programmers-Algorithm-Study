const fs = require('fs').readFileSync('/dev/stdin');
let N = Number(fs.toString());

const answer = [];
while(N > 0){
    answer.push(N);
    N--;
}

console.log(answer.join('\n'));