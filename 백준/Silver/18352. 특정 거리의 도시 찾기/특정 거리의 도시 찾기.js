const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, K, X] = input.shift().split(" ").map(Number);
const Edges = input.map((edge) => edge.split(" ").map(Number));

// 단방향 인접 리스트 생성
const graph = Array.from({length: N + 1}, () => []);
for(let [v1, v2] of Edges){
    graph[v1].push(v2);
}

function Dijcstra(start){
    const queue = [start];
    const visited = new Array(N + 1).fill(false);
    const distance = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    distance[start] = 0;
    let index = 0;
    
    while(index < queue.length){
        const curV = queue[index];
        visited[curV] = true;
        for(let i = 0; i < graph[curV].length; i++){
            const nextV = graph[curV][i];
            if(visited[nextV]) continue;
            if(distance[curV] + 1 < distance[nextV]){
                distance[nextV] = distance[curV] + 1;
                queue.push(nextV);
            }
        }
        index++;
    }
    
    const answer = [];
    distance.forEach((num, i) => {
        if(num === K){
          answer.push(i)
        }
    })
    
    console.log(answer.length > 0 ? answer.join("\n") : -1)
}

Dijcstra(X);