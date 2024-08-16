const fs = require('fs').readFileSync('/dev/stdin');
const [NM, ...rows] = fs.toString().trim().split('\n');
const [N, M] = NM.split(' ').map(Number);
const ground = rows.map((row) => row.split(' ').map(Number));

function findTarget() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (ground[i][j] === 2) {
        ground[i][j] = 0;
        return [i, j];
      }
    }
  }
}

function replaceGround(visited) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && ground[i][j] === 1) {
        ground[i][j] = -1;
      }
    }
  }
}

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function BFS() {
  const [tx, ty] = findTarget();
  const queue = [[tx, ty, 0]];
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));

  while (queue.length) {
    const [x, y, d] = queue.shift();
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const X = x + dx[i];
      const Y = y + dy[i];
      const D = d + 1;

      if (X < 0 || Y < 0 || X >= N || Y >= M) continue;
      if (!visited[X][Y] && ground[X][Y] === 1) {
        queue.push([X, Y, D]);
        visited[X][Y] = true;
        ground[X][Y] = D;
      }
    }
  }

  replaceGround(visited);
}

BFS();

ground.map((row) => {
  console.log(row.join(' '));
});