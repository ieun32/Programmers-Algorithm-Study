const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input.shift();

// dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + top[i];
// dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + bottom[i];
// answer = Math.max(dp[0][N - 1], dp[1][N - 1]);
const answer = [];
for (let i = 0; i < T * 3;) {
  const N = +input[i];
  const top = input[i + 1].split(" ").map(Number);
  const bottom = input[i + 2].split(" ").map(Number);
  const dp = Array.from({ length: 2 }, () => Array(N).fill(0));

  dp[0][0] = top[0];
  dp[1][0] = bottom[0];
  dp[0][1] = bottom[0] + top[1];
  dp[1][1] = top[0] + bottom[1];

  for (let i = 2; i < N; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + top[i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + bottom[i];
  }

  answer.push(Math.max(dp[0][N - 1], dp[1][N - 1]));
  i += 3;
}

console.log(answer.join("\n"));