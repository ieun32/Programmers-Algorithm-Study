const fs = require('fs').readFileSync('/dev/stdin')
const [N, M] = fs.toString().trim().split(' ').map(Number)

let stack = [];
let answer = [];
function BackTracking(num) {
  if (stack.length === M) {
    answer.push(stack.join(" "))
    stack.pop()
    return
  }
  for (let i = num; i <= N; i++) {
    stack.push(i)
    BackTracking(i + 1)
  }
  stack.pop()
}

BackTracking(1)
console.log(answer.join('\n'))