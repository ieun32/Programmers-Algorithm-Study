const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const boxes = input[0].split(" ").map(Number);

const dp = new Array(N).fill(1);
dp[0] = 1;

for(let i = 0; i < N; i++){
    for(let j = 0; j < i; j++){
        if(boxes[j] < boxes[i]){
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp))