const fs = require('fs').readFileSync('/dev/stdin');
const N = fs.toString().trim();
const target = Number(N);

let current = 0;
const answer = [];
while(current < target){
    current++;
    answer.push(current);
}

console.log(answer.join('\n'));