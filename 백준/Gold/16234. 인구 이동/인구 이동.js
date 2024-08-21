const fs = require('fs').readFileSync('/dev/stdin');
const [NLR, ...rows] = fs.toString().trim().split('\n');
const [N, L, R] = NLR.split(' ').map(Number);
const map = rows.map((row) => row.split(' ').map(Number));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let days = 0;

while (true) {
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  let isUpdated = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        if (BFS(i, j, visited)) {
          isUpdated = true;
        }
      }
    }
  }

  if (!isUpdated) {
    console.log(days);
    break;
  }

  days++;
}

function BFS(x, y, visited) {
  let index = 0;
  let population = map[x][y];
  const queue = [[x, y]];
  visited[x][y] = true;

  while (index < queue.length) {
    const [cx, cy] = queue[index++];

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
        const gap = Math.abs(map[cx][cy] - map[nx][ny]);
        if (gap >= L && gap <= R) {
          queue.push([nx, ny]);
          population += map[nx][ny];
          visited[nx][ny] = true;
        }
      }
    }
  }

  if (queue.length > 1) {
    const newPopulation = Math.floor(population / queue.length);
    for (const [qx, qy] of queue) {
      map[qx][qy] = newPopulation;
    }
    return true;
  }

  return false;
}