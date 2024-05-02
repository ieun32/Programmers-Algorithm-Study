const fs = require('fs').readFileSync('/dev/stdin')
const [NM, input] = fs.toString().split('\n')
const [N, M] = NM.split(' ').map(Number)
const numbers = input.split(' ').map(Number).sort((a, b) => a - b)
const visited = new Array(N).fill(false)

let stack = [];
let answer = [];
function BackTrac(num) {
  if (stack.length === M) {
    answer.push(stack.join(' '))
    stack.pop()
    return
  }
  for (let i = 0; i < N; i++) {
    if(visited[i]) continue
    visited[i] = true
    stack.push(numbers[i])
    BackTrac(i + 1)
    visited[i] = false
  }
  stack.pop()
}

BackTrac(0)
console.log(answer.join('\n'))