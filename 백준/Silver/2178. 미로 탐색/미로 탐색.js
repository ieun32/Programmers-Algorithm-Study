const fs = require('fs').readFileSync('/dev/stdin');
const [NM, ...rows] = fs.toString().trim().split('\n');
const [N, M] = NM.split(' ').map(Number); // 세로 N, 가로 M
const maze = rows.map((row) => row.split('').map(Number));

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function BFS() {
  const queue = [[0, 0, 1]];
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));

  while (queue.length) {
    const [x, y, d] = queue.shift();
    visited[x][y] = true;

    // [N, M]에 도착한 경우 d 반환
    if (x === N - 1 && y === M - 1) {
      return d;
    }

    // 도착하지 않은 경우 이동할 수 있는 좌표 모두 queue에 삽입
    for (let i = 0; i < 4; i++) {
      const X = x + dx[i];
      const Y = y + dy[i];
      const D = d + 1;

      if (X < 0 || Y < 0 || X >= N || Y >= M) continue;
      if (!visited[X][Y] && maze[X][Y] !== 0) {
        queue.push([X, Y, D]);
        visited[X][Y] = true;
      }
    }
  }
}

console.log(BFS());