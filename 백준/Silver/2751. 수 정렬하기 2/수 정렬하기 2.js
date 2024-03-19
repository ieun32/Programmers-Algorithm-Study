const fs = require('fs')
const [N, ...Arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = Arr.map(Number)

const result = arr.sort((a, b) => a - b)

console.log(result.join('\n'))