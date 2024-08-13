const input = require('fs').readFileSync('/dev/stdin').toString();
const N = Number(input);

const answer = [];
for(let i = 1; i <= 9; i++){
    answer.push(`${N} * ${i} = ${N * i}`);
}
console.log(answer.join('\n'));