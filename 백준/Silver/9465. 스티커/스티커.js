const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input.shift();
const answer = [];

for (let i = 0; i < input.length;) {
  const N = +input[i];
  const array = [];
  for (let j = 1; j <= 2; j++) {
    array.push(input[i + j].split(" ").map(Number))
  }
  let dp = [];
  for (let i = 0; i <= N; i++) {
    dp.push([0, 0]);
  }
  dp[1][0] = array[0][0];
  dp[1][1] = array[1][0];
  for (let i = 2; i <= N; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]) + array[0][i - 1] * 1;
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][0]) + array[1][i - 1] * 1;
  }
  answer.push(Math.max(...dp[N]));
  i = i + 3;
}

console.log(answer.join("\n"))