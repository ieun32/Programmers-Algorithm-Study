const fs = require('fs').readFileSync('/dev/stdin');
const [N, P] = fs.toString().trim().split("\n");
// 각 사람이 돈을 인출하는데 필요한 시간, 오름차순 정렬
const times = P.split(" ").map(Number).sort((a, b) => a - b);
let cache = times[0];
let answer = cache;

for (let i = 1; i < Number(N); i++) {
  cache += times[i];
  answer += cache;
}

console.log(answer);
