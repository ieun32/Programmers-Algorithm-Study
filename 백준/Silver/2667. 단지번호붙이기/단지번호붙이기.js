const fs = require('fs').readFileSync('/dev/stdin')
const [n, ...input] = fs.toString().trim().split('\n')
const N = +n;
const graph = input.map((v) => v.split('').map(Number))

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function getStartPoint(){
    for(let i = 0; i < N; i++){
        let target = graph[i].indexOf(1)
        if(target !== -1){
            return [i, target]
        }
    }
    return -1
}

let group = [];

function getOneGroup(){
    let queue = [];
    let counter = [];
    let visited = Array.from({length : N}, () => new Array(N).fill(false))
    let target = getStartPoint()
    if(target === -1) return -1
    else queue.push(target)
    
    while(queue.length > 0){
        let [x, y] = queue.shift()
        counter.push([x, y])
        visited[x][y] = true;
        graph[x][y] = '+'
        for(let i = 0; i < 4; i++){
            let X = x + dx[i]
            let Y = y + dy[i]
            if(X < 0 || Y < 0 || X >= N || Y >= N) continue;
            if(graph[X][Y] === 1 && !visited[X][Y]){
                queue.push([X, Y])
                graph[X][Y] = '+'
            }
        }
    }
    group.push(counter.length)
    return 1;
}

while(true){
  let result = getOneGroup()
  if(result === -1) break;
}

console.log(group.length)
console.log(group.sort((a, b) => a - b).join('\n'))