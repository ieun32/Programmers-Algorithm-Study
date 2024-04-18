const fs = require('fs').readFileSync('/dev/stdin')
const [N, ...input] = fs.toString().trim().split('\n')

let answer = [0, 0];
let counter = [0, 0];
const graph = input.map((v) => v.split(''))

for (let i = 0; i < +N; i++) {
  for (let j = 0; j < +N; j++) {
    if (graph[i][j] === '.') counter[0]++;
    if (graph[j][i] === '.') counter[1]++;
    if (graph[i][j] === 'X') {
      if (counter[0] >= 2) {
        answer[0]++
      }
      counter[0] = 0;
    }
    if (graph[j][i] === 'X') {
      if (counter[1] >= 2) {
        answer[1]++
      }
      counter[1] = 0;
    }
  }
  if (counter[0] >= 2) {
    answer[0]++
  }
  if (counter[1] >= 2) {
    answer[1]++
  }
  counter = [0, 0]
}

console.log(answer.join(' '))