const N = +require("fs").readFileSync('/dev/stdin')

let dp = new Array(N).fill(0)
dp[1] = 1;
dp[2] = 3;

for(let i = 3; i <= N; i++){
    dp[i] = dp[i - 1] + (dp[i - 2] * 2)
    dp[i] %= 10007
}

console.log(dp[N])
