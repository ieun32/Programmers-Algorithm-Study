const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, B] = input.shift().split(" ").map(Number); // A가로 B세로
const [N, M] = input.shift().split(" ").map(Number); // N로봇 M명령

// 방향 정보 문자열 매칭
const direction = {
  N: 0,
  E: 1,
  S: 2,
  W: 3
}
// 방향 정보 초기화 N > E > S > W
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

// 위치 정보 초기화
// 위치 (x: 가로, y: 세로, d: 방향)
const location = [0];
const map = Array.from({ length: B + 1 }, () => Array(A + 1).fill(0));
for (let i = 1; i <= N; i++) {
  const [x, y, d] = input.shift().trim().split(" ");
  location.push([+x, +y, direction[d]]); // i번 로봇의 위치 정보 저장 (1부터)
  map[+y][+x] = i;
}

// 명령 수행
// 명령 (n: 로봇, m: 명령, r: 반복)
function work() {
  let isSuccess = true;
  for (let i = 0; i < M; i++) {
    const [n, m, r] = input.shift().trim().split(" ");
    const repeat = Number(r);

    // 명령 r만큼 반복 수행
    for (let j = 0; j < repeat; j++) {
      let [x, y, d] = location[+n];
      switch (m) {
        case "R":
          location[+n] = [x, y, (d + 1) % 4];
          break;
        case "L":
          location[+n] = [x, y, (d + 3) % 4];
          break;
        case "F":
          const [X, Y] = [x + dx[d], y + dy[d]];
          if (X < 1 || Y < 1 || X > A || Y > B) {
            console.log(`Robot ${n} crashes into the wall`);
            isSuccess = false;
            return;
          } else if (map[Y][X] !== 0) {
            console.log(`Robot ${n} crashes into robot ${map[Y][X]}`);
            isSuccess = false;
            return;
          } else {
            location[+n] = [X, Y, d];
            map[y][x] = 0;
            map[Y][X] = +n;
          }
          break;
      }
    }
  }
  if (isSuccess) {
    console.log("OK");
  }
}

work();