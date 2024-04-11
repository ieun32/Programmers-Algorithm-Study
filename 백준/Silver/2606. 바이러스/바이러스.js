const fs = require('fs').readFileSync("/dev/stdin")
const [N, M, ...graphs] = fs.toString().trim().split('\n')
let graph = Array.from({length: +N + 1}, () => [])
graphs.map((arr, i) => {
  let pair = arr.split(' ').map(Number)
  graph[pair[0]].push(pair[1])
  graph[pair[1]].push(pair[0])
})


function DFS(graph, visited, node){
    visited[node] = true;
    graph[node].map((v, i) => {
        if(!visited[v]){
          DFS(graph, visited, v)
        }
    })
}

let visited = new Array(+M + 1).fill(false)
DFS(graph, visited, 1)

const answer = visited.filter((v) => v).length - 1
console.log(answer)