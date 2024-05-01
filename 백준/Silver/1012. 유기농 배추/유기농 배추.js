const fs = require('fs').readFileSync('/dev/stdin')
const input = fs.toString().trim().split('\n')
const T = parseInt(input[0])
const answer = [];

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

// 테스트 케이스 개수 만큼 반복
for(let i = 0; i < input.length - 1;){
    const [M, N, K] = input[i + 1].split(' ').map(Number)
    const graph = Array.from({ length: N }, () => new Array(M).fill(0))
    const visited = Array.from({ length: 50 }, () => new Array(50).fill(false))
    let count = 0;
    // 인접리스트 생성
    for(let j = i + 2; j < i + 2 + K; j++){
        const [x, y] = input[j].split(' ').map(Number)
        graph[y][x] = 1;
    }

    // BFS
    for(let n = 0; n < N; n++){
        for(let m = 0; m < M; m++){
            if(graph[n][m] === 1 && !visited[n][m]) {
                count += BFS(n, m, M, N, graph, visited)
            }
        }
    }
    
    answer.push(count)
    i = i + K + 1;
}

console.log(answer.join('\n'))


function BFS(x, y, M, N, graph, visited){
   const queue = [[x, y]]
   
   while(true){
       if(queue.length === 0){
           return 1
       }
       
       const shifted = queue.shift()
       const [x, y] = shifted
       visited[x][y] = true
       graph[x][y] = 0
       
       for(let i = 0; i < 4; i++){
           const X = x + dx[i]
           const Y = y + dy[i]
           if(X < 0 || Y < 0 || X >= N || Y >= M) continue
           if(graph[X][Y] === 1 && !visited[X][Y]){
               queue.push([X, Y])
               graph[X][Y] = 0
           }
       }
   }
}



