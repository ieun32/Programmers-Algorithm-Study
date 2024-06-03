const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
// dp[N][0] = min(dp[N - 1][1], dp[N - 1][2])
// dp[N][1] = min(dp[N - 1][0], dp[N - 1][2])
// dp[N][2] = min(dp[N - 1][0], dp[N - 1][1])
const dp = Array.from({length: N + 1}, () => new Array(3).fill(0));

const [sR, sG, sB] = input.shift().split(" ").map(Number);
dp[1][0] = sR;
dp[1][1] = sG;
dp[1][2] = sB;

for(let i = 2; i <= N; i++){
    const [R, G, B] = input.shift().split(" ").map(Number);
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + R;
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + G;
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + B;
}

console.log(Math.min(dp[N][0], dp[N][1], dp[N][2]))