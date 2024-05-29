const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, B] = input.shift().split(" ").map(Number);
const [N, M] = input.shift().split(" ").map(Number);
const ground = Array.from({ length: B }, () => new Array(A).fill(0))

// 방향 정보: 상(N), 우(E), 하(S), 좌(W)
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const getDirection = Object.freeze({
  N: 0,
  E: 1,
  S: 2,
  W: 3
})

// 로봇 좌표와 방향 정보 초기화
const robots = new Array(N + 1)
for (let i = 0; i < N; i++) {
  const [x, y, d] = input[i].trim().split(" ");
  ground[y - 1][x - 1] = i + 1;
  robots[i + 1] = [x - 1, y - 1, getDirection[d]];
}

// 명령 개수만큼 명령 수행
let isCreashed = false;
for (let i = 0; i < M; i++) {
  let [robotNum, cmd, repeat] = input[N + i].trim().split(" ");
  const result = executeCommand(robotNum, cmd, repeat);
  if (result === -1) {
    isCreashed = true;
    return
  }
}

if (!isCreashed) {
  console.log("OK")
}

// 명령별로 방향을 바꾸거나 이동하는 함수
function executeCommand(robotNum, cmd, repeat) {
  while (repeat > 0) {
    let x, y, d;
    switch (cmd) {
      case 'L':
        [x, y, d] = robots[robotNum];
        d === 0 ? d = 3 : d = d - 1;
        robots[robotNum] = [x, y, d];
        break;
      case 'R':
        [x, y, d] = robots[robotNum];
        d === 3 ? d = 0 : d = d + 1;
        robots[robotNum] = [x, y, d];
        break;
      case 'F':
        [x, y, d] = robots[robotNum];
        const [X, Y] = [+x + dx[d], +y + dy[d]];
        if (X < 0 || Y < 0 || X >= A || Y >= B) {
          console.log(`Robot ${robotNum} crashes into the wall`);
          return -1
        }
        if (ground[Y][X] !== 0) {
          console.log(`Robot ${robotNum} crashes into robot ${ground[Y][X]}`);
          return -1
        }
        ground[+y][+x] = 0;
        ground[Y][X] = +robotNum;
        robots[robotNum] = [X, Y, +d];
        break;
    }
    repeat--;
  }
  return 1;
}