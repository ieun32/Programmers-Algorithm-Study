const fs = require('fs').readFileSync('/dev/stdin')
const [n, xy, m, ...input] = fs.toString().trim().split('\n')
const [x, y] = xy.split(' ').map(Number)
let graph = Array.from({ length: +n + 1 }, () => [])

input.map((v) => {
  const [i, j] = v.split(' ').map(Number)
  graph[i] = graph[i].concat([j])
  graph[j] = graph[j].concat([i])
})

let stack = []
let visited = Array(+n + 1).fill(false);
let count = 0;

function DFS(node) {
  visited[node] = true;
  stack.push(node)
  if (node === y) {
    console.log(count)
    return
  }
  graph[node].map((v) => {
    if (!visited[v]) {
      count++;
      DFS(v)
      count--;
    }
  })
}

DFS(x)
if(!stack.includes(y)){
  console.log(-1)
}

