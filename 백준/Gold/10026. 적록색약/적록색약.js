const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const N = +input.shift()
const map = input.map((row) => row.split(""));
const visited = Array.from({length: N}, () => new Array(N).fill(false))
const visited_RG = Array.from({length: N}, () => new Array(N).fill(false))

let count = 0;
let count_RG = 0;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(!visited[i][j]){
           count += BFS([i, j], map[i][j], false)
        }
        if(!visited_RG[i][j]){
           count_RG += BFS([i, j], map[i][j], true)
        }
    }
}

console.log(`${count} ${count_RG}`);

function BFS([x, y], color, is_RG_same){
    const queue = [[x, y]]
    const startColor = color
    let endColor;
    if(is_RG_same){
      switch(color){
        case "R":
          endColor = "G"
          break;
        case "G":
          endColor = "R"
          break;
        case "B":
          endColor = null
          break;
      }
    } else {
      endColor = null;
    }
    while(true){
        if(queue.length === 0){
            return 1
        }
        
        const [curX, curY] = queue.shift();
        if(is_RG_same){
            visited_RG[curX][curY] = true;
            for(let i = 0; i < 4; i++){
                const [newX, newY] = [curX + dx[i], curY + dy[i]];
                if(newX < 0 || newY < 0 || newX >= N || newY >= N) continue
                if(!visited_RG[newX][newY] && (map[newX][newY] === startColor || map[newX][newY] === endColor)){
                    queue.push([newX, newY]);
                    visited_RG[newX][newY] = true;
                }
            }
        } else {
            visited[curX][curY] = true;
            for(let i = 0; i < 4; i++){
                const [newX, newY] = [curX + dx[i], curY + dy[i]];
                if(newX < 0 || newY < 0 || newX >= N || newY >= N) continue
                if(!visited[newX][newY] && (map[newX][newY] === startColor || map[newX][newY] === endColor)){
                    queue.push([newX, newY]);
                    visited[newX][newY] = true;
                }
            }
        }
    }
}