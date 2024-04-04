const fs = require('fs').readFileSync('/dev/stdin')
const input = fs.toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const K = parseInt(input.slice(N + 1, N + 2))

const arr = input.slice(1, N + 1).map((v, i) => v.split(' ').map(Number))
const coordi = input.slice(N + 2, input.length).map((v) => v.split(' ').map(Number))
let answer = [];

coordi.map((coor) => {
  let count = 0;
  let [i, j, x, y] = coor
  for(let I = i - 1; I <= x - 1; I++){
    for(let J = j - 1; J <= y - 1; J++){
        count += arr[I][J];
    }
  }
  answer.push(count)
})

console.log(answer.join('\n'))
