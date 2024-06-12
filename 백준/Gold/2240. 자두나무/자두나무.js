const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [T, W] = input.shift().split(" ").map(Number);
const trees = input.map((tree) => Number(tree));

// dp[tree][t][r] = t초에 tree 나무에 서있고 남은 이동 횟수가 r일 때 받아먹는 자두 개수
const dp = Array.from({ length: 3 }, () => Array.from({ length: T + 1 }, () => Array(W + 1).fill(0)));

// 초기 조건: 0초에 1번 나무 아래에 있는 경우로 시작
if (trees[0] === 1) {
    dp[1][1][0] = 1;
} else {
    dp[2][1][1] = 1;
}

for (let t = 2; t <= T; t++) {
    for (let r = 0; r <= W; r++) {
        if (trees[t - 1] === 1) {
            dp[1][t][r] = dp[1][t - 1][r] + 1;
            if (r > 0) {
                dp[1][t][r] = Math.max(dp[1][t][r], dp[2][t - 1][r - 1] + 1);
            }
            dp[2][t][r] = dp[2][t - 1][r];
            if (r > 0) {
                dp[2][t][r] = Math.max(dp[2][t][r], dp[1][t - 1][r - 1]);
            }
        } else {
            dp[2][t][r] = dp[2][t - 1][r] + 1;
            if (r > 0) {
                dp[2][t][r] = Math.max(dp[2][t][r], dp[1][t - 1][r - 1] + 1);
            }
            dp[1][t][r] = dp[1][t - 1][r];
            if (r > 0) {
                dp[1][t][r] = Math.max(dp[1][t][r], dp[2][t - 1][r - 1]);
            }
        }
    }
}

let answer = 0;
for (let i = 0; i <= W; i++) {
    answer = Math.max(answer, dp[1][T][i], dp[2][T][i]);
}

console.log(answer);