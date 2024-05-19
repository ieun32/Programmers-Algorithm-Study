const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const inputs = input[0].split(" ").map(Number);

// dp[N] = max(누적값+현재선택, 이전값+현재선택, 현재선택)
// 해서 dp중에 가장 큰 값을 출력하면 될까?
const dp = [];

function TopDown(num) {
  if (num === 0) {
    dp[num] = inputs[num];
    return dp[num];
  }
  dp[num] = Math.max(TopDown(num - 1) + inputs[num], inputs[num]);
  return dp[num];
}

TopDown(N - 1);
console.log(Math.max(...dp))