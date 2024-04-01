const fs = require('fs').readFileSync('/dev/stdin')
const [T, ...input] = fs.toString().trim().split('\n')

let dp = [];
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

let answer = [];

input.map((v, i) => {
    let num = +v;
    for(let i = 4; i <= num; i++){
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }
    answer.push(dp[num])
})

console.log(answer.join('\n'))