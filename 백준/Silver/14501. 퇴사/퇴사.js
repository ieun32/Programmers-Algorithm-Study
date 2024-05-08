const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')
const N = +input.shift();
const T = input.map((info) => info.split(' ').map(Number)[0]);
const P = input.map((info) => info.split(' ').map(Number)[1]);

const dp = new Array(N + 1).fill(0);
for(let i = N - 1; i >= 0; i--){
    if(i + T[i] > N){
        dp[i] = dp[i + 1];
        continue;
    }
  
  dp[i] = Math.max(P[i] + dp[i + T[i]], dp[i + 1]);
}

console.log(dp[0])