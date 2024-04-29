const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dx = [0, 0, -1, 1, -1, 1, -1, 1];
const dy = [-1, 1, 0, 0, -1, 1, 1, -1];

let answer = [];

for (let idx = 0; idx < input.length - 1;) {
  const wh = input[idx];
  const [w, h] = wh.split(' ').map(Number);
  let graph = input.slice(idx + 1, idx + 1 + h).map((v) => v.split(' ').map(Number));
  let visited = Array.from({ length: h }, () => new Array(w).fill(false));
  let result = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        result += BFS(graph, visited, i, j, w, h);
      }
    }
  }
  answer.push(result);
  idx += h + 1; // 인덱스 이동
}

function BFS(graph, visited, i, j, w, h) {
  let queue = [[i, j]];
  let count = 0;

  while (queue.length) {
    const [x, y] = queue.shift();
    visited[x][y] = true;
    graph[x][y] = 0;
    count++;

    for (let k = 0; k < 8; k++) {
      const X = x + dx[k];
      const Y = y + dy[k];
      if (X < 0 || Y < 0 || X >= h || Y >= w) continue;
      if (graph[X][Y] === 1 && !visited[X][Y]) {
        queue.push([X, Y]);
        visited[X][Y] = true;
      }
    }
  }

  return count > 0 ? 1 : 0;
}

console.log(answer.join('\n'));