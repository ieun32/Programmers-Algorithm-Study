const fs = require('fs').readFileSync('/dev/stdin')
let [N, ...input] = fs.toString().trim().split('\n')

N = parseInt(N)
const INPUT = input.map((v) => v.split(' ').map(Number))

let graph = Array.from({ length : N + 1 }, () => [])
//인접 리스트
for(let i = 0; i < N - 1; i++){
    const x = INPUT[i][0]
    const y = INPUT[i][1]
    graph[x] = graph[x].concat([y])
    graph[y] = graph[y].concat([x])
}

const parent = new Array(N + 1).fill(0)

function BFS(){
    let queue = [1];
    let visited = new Array(N + 1).fill(false)
    
    
    while(true){
        if(queue.length === 0){
            return
        }
        
        let shifted = queue.shift()
        visited[shifted] = true;
        
        for(let i = 0; i < graph[shifted].length; i++){
            let cur = graph[shifted][i]
            if(!visited[cur]){
                queue.push(cur)
                parent[cur] = shifted;
            }
        }
    }
}

BFS()
let answer = parent.slice(2, N + 2)
console.log(answer.join('\n'))