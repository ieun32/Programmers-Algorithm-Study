const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const inputs = input[0].split(" ").map(Number);

// dp[N] = max(누적값+현재선택, 이전값+현재선택, 현재선택)
// 해서 dp중에 가장 큰 값을 출력하면 될까?
const dp = [];
dp[0] = inputs[0];

for(let i = 1; i < inputs.length; i++){
    dp[i] = Math.max(dp[i - 1] + inputs[i], inputs[i - 1] + inputs[i], inputs[i]);
}

console.log(Math.max(...dp));
