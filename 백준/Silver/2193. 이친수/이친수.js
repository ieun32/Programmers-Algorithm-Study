const N = +require("fs").readFileSync('/dev/stdin')

let dp = Array(N + 1).fill(0n)
dp[1] = 1
dp[2] = 1
dp[3] = 2

for(let i = 4; i <= N; i++){
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[N].toString())