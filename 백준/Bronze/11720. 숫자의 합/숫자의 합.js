const fs = require('fs').readFileSync('/dev/stdin');
const [T, inputs] = fs.toString().trim().split('\n');

let answer = 0;
const numbers = inputs.split('');
numbers.forEach((num) => {
    answer += Number(num);
})
console.log(answer);