const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [M, N, H] = input.shift().split(" ").map(Number);

// 이동 좌표
const dn = [-1, 0, 1, 0, 0, 0];
const dm = [0, -1, 0, 1, 0, 0];
const dh = [0, 0, 0, 0, -1, 1];

// 초기화
const boxes = Array.from(Array(H), () => Array.from(Array(N), () => Array(M).fill(0)));
for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    boxes[h][n] = input.shift().split(" ").map(Number);
  }
}

// 시작 좌표들 초기화
const queue = [];
let unripe = 0;
for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (boxes[h][n][m] === 1) {
        queue.push([h, n, m, 0]); // 높이, 세로, 가로, 탐색 깊이
      }
      if (boxes[h][n][m] === 0) {
        unripe++;
      }
    }
  }
}

let depth = 0;
let index = 0;
while (index < queue.length) {
  const [h, n, m, d] = queue[index++];
  for (let i = 0; i < 6; i++) {
    const [nH, nN, nM] = [h + dh[i], n + dn[i], m + dm[i]];
    if (nH < 0 || nN < 0 || nM < 0 || nH >= H || nN >= N || nM >= M) continue;
    if (boxes[nH][nN][nM] === 0) {
      boxes[nH][nN][nM] = 1;
      queue.push([nH, nN, nM, d + 1]);
      unripe--;
      depth = d + 1;
    }
  }
}

console.log(unripe === 0 ? depth : -1);