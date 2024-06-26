const N = +require("fs").readFileSync("/dev/stdin")

const dp = Array(N + 1).fill(0);
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for(let i = 4; i <= N; i++){
    const divideTwo = i % 2 === 0 ? dp[i / 2] + 1 : Infinity;
    const divideThree = i % 3 === 0 ? dp[i / 3] + 1 : Infinity;
    const minusOne = dp[i - 1] + 1;
    dp[i] = Math.min(divideTwo, divideThree, minusOne);
}

console.log(dp[N])