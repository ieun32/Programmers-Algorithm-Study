const fs = require('fs').readFileSync('/dev/stdin');
const [NMV, ...input] = fs.toString().trim().split('\n');
const [N, M, V] = NMV.split(' ').map(Number);
INPUT = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: N + 1}, () => [])
for(let i = 0; i < INPUT.length; i++){
    const v1 = INPUT[i][0];
    const v2 = INPUT[i][1];
    graph[v1].push(v2);
    graph[v2].push(v1);
}

graph.map((v) => v.sort((a, b) => a - b));

const visited = Array.from({ length: N + 1 }, () => false);
const answer_dfs = [];

function DFS(num){
    visited[num] = true;
    answer_dfs.push(num)

    for(const cur of graph[num]){
        if(!visited[cur]){
            DFS(cur)
        }
    }
}

let answer_bfs = [];

function BFS(num){
    let queue = [num];
    let visited = Array.from({ length: N + 1 }, () => false)
    
    while(true){
        if(queue.length === 0){
            return 
        }
        
        const cur = queue.shift()
        visited[cur] = true;
        answer_bfs.push(cur);
        
        for(const v of graph[cur]){
            if(!visited[v]){
                queue.push(v)
                visited[v] = true;
            }
        }
        
    }
}

DFS(V)
BFS(V)
console.log(answer_dfs.join(' '))
console.log(answer_bfs.join(' '))