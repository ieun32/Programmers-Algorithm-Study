const input = require('fs').readFileSync('/dev/stdin')
const num = +input;
const dp = new Array(1000001).fill(0)

dp[1] = 1;
dp[2] = 2;

for(let i = 3; i <= num; i++){
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746
}

console.log(dp[num])
