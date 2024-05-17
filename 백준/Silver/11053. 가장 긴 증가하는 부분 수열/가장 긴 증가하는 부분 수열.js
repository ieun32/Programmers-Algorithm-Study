const fs = require("fs").readFileSync("/dev/stdin")
const input = fs.toString().trim().split("\n");
const N = +input.shift();
const list = input[0].split(" ").map(Number);

const dp = new Array(N).fill(1);

for(let i = 0; i < N - 1; i++){
    for(let j = i + 1; j <= N; j++){
        if(list[i] < list[j]){
            const max = Math.max(dp[i] + 1, dp[j]);
            dp[j] = max;
        }
    }
}

const answer = Math.max(...dp);
console.log(answer);