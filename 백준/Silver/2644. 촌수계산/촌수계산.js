const fs = require('fs').readFileSync('/dev/stdin')
const [n, xy, m, ...input] = fs.toString().trim().split('\n')
const [x, y] = xy.split(' ').map(Number)
let graph = Array.from({ length: +n + 1 }, () => [])

input.map((v) => {
  const [i, j] = v.split(' ').map(Number)
  graph[i] = graph[i].concat([j])
  graph[j] = graph[j].concat([i])
})

let queue = [x]
let visited = [];
let count = 0;

while (true) {
  let length = queue.length
  if (length === 0) {
    console.log(-1)
    break;
  }
  for (let i = 0; i < length; i++) {
    const shifted = queue.shift()
    visited.push(shifted)
    if (shifted === y) {
      console.log(count)
      return;
    }
    graph[shifted].map((v, i) => {
      if (!visited.includes(v)) {
        queue.push(v)
      }
    })
  }
  count++;
}

