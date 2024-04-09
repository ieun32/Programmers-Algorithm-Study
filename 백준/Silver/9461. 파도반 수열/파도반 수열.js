const fs = require('fs').readFileSync('/dev/stdin')
let [T, ...testcase] = fs.toString().trim().split('\n')
testcase = testcase.map(Number)

let arr = [0, 1, 1, 1, 2, 2]
let answer = [];

const max = Math.max(...testcase)

for (let i = 6; i <= max; i++) {
  arr[i] = arr[i - 5] + arr[i - 1]
}

testcase.map((N) => answer.push(arr[N]))

console.log(answer.join(' '))