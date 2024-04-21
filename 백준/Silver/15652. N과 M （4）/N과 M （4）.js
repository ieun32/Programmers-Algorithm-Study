const fs = require('fs').readFileSync('/dev/stdin')
const [N, M] = fs.toString().trim().split(' ').map(Number)

let answer = [];
let stack = [];
function BackTrack(num) {
  if (stack.length >= M) {
    answer.push(stack.join(' '))
    stack.pop()
    return
  }

  for (let i = num; i < N; i++) {
      stack.push(i + 1)
      BackTrack(i)
  }
  stack.pop()
}

BackTrack(0)
console.log(answer.join('\n'))