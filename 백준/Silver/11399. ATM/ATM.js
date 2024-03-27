const fs = require('fs').readFileSync('/dev/stdin')
const [n, input] = fs.toString().trim().split('\n')

const num = Number(n)

const p = input.split(' ').map(Number)
let count = 0;
let arr = [];

p.sort((a, b) => a - b)

for(let i = 0; i < num; i++){
    count += p[i]
    arr.push(count)
}

const result = arr.reduce((p, c) => p + c, 0)

console.log(result)