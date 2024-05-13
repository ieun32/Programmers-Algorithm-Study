const fs = require("fs").readFileSync("/dev/stdin");
const [NM, ...input] = fs.toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
const map = input.map((row) => row.split("").map(Number));

// 상하좌우 이동좌표
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function BFS() {
  let queue = [[0, 0]]; // (1,1)에서 탐색 시작
  let visited = Array.from({ length: N }, () => new Array(M).fill(false)) // 방문 배열
  let count = 1;

  while (true) {
    if (queue.length === 0) {
      console.log(count);
      break;
    }
    const length = queue.length;
    for (let j = 0; j < length; j++) {
      const [x, y] = queue.shift();
      visited[x][y] = true;
      map[x][y] = 0;
      if (x === N - 1 && y === M - 1) {
        console.log(count);
        return;
      }
      for (let i = 0; i < 4; i++) {
        const X = x + dx[i];
        const Y = y + dy[i];

        if (X < 0 || Y < 0 || X >= N || Y >= M) continue
        if (!visited[X][Y] && map[X][Y] === 1) {
          queue.push([X, Y]);
          visited[X][Y] = true;
          map[X][Y] = 0;
        }
      }
    }
    count++;
  }
}

BFS();