const num = require('fs').readFileSync('/dev/stdin').toString().trim()
const arr = Array.from({ length: +num }, (_, i) => i + 1)
let answer = [];
while(arr.length > 1){
    answer.push(arr.shift())
    arr.push(arr.shift())
}

console.log(answer.concat(arr).join(' '))