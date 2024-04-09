const fs = require('fs').readFileSync('/dev/stdin')
let [T, ...testcase] = fs.toString().trim().split('\n').map(Number)

let dp = [[1, 0], [0, 1]];
const max = Math.max(...testcase)

for(let i = 2; i <= max; i++){
    dp[i] = [dp[i - 1][0] + dp[i - 2][0],  dp[i - 1][1] + dp[i - 2][1]]
}

let answer = [];
testcase.map((N) => {
    answer.push(`${dp[N][0]} ${dp[N][1]}`)
})

console.log(answer.join('\n'))
