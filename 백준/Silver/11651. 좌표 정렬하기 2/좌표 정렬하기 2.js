const fs = require('fs').readFileSync('/dev/stdin')
const [n, ...input] = fs.toString().trim().split('\n')
let answer ='';

const coordi = input.map((v, i) => v.split(' ').map(Number))
const result = coordi.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]).forEach((v, i) =>{
answer += `${v[0]} ${v[1]}\n`
})

console.log(answer)