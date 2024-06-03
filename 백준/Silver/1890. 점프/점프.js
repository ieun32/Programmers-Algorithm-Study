const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: N }, () => new Array(N).fill(BigInt(0)));

dp[0][0] = BigInt(1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const cur = board[i][j];

        if (i === N - 1 && j === N - 1) {
            break;
        }

        if (cur === 0) {
            dp[i][j] = BigInt(0);
            continue;
        }

        if (j + cur < N) {
            dp[i][j + cur] += dp[i][j];
        }

        if (i + cur < N) {
            dp[i + cur][j] += dp[i][j];
        }
    }
}

console.log(dp[N - 1][N - 1].toString());