const fs = require("fs").readFileSync("/dev/stdin");
const input = fs.toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const uv = input.map((uv) => uv.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);

uv.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
})

let count = 0;
for(let i = 1; i < visited.length; i++){
    if(!visited[i]){
        count += BFS(i);
    }
}

console.log(count);

function BFS(num){
    let queue = [num];
    while(true){
        const length = queue.length;
        if(length === 0){
            return 1;
        }
        
        const cur = queue.shift();
        visited[cur] = true;
        graph[cur].forEach((v) => {
            if(!visited[v]){
                queue.push(v);
                visited[v] = true;
            }
        })
    }
}