const fs = require('fs').readFileSync('/dev/stdin')
const input = fs.toString().trim()

let arr = [];
[...input].map((v, i) => {
    if(input[i] !== input[i + 1]){
        arr.push(+v)
    }
})

let count0 = 0;
let count1 = 0;
arr.map((v, i) => {
    if(v === 0) count0++;
    if(v === 1) count1++;
})

console.log(Math.min(count0, count1))