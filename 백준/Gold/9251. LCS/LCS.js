const fs = require("fs").readFileSync("/dev/stdin")
let [str1, str2] = fs.toString().trim().split("\n");

// dp[i][j] = str1의 i번째 문자까지와 str2의 j번째 문자까지 비교했을 때 최장공통부분수열 값
// if(str1[i] === str2[j]) dp[i][j] = dp[i - 1][j - 1] + 1;
// if(str1[i] !== str2[j]) dp[i][j] = MAX(dp[i - 1][j], dp[i][j - 1])

const dp = Array.from({ length: str1.length }, () => Array(str2.length).fill(0));
// dp 테이블 초기화
dp[0][0] = str1[0] === str2[0] ? 1 : 0;
for (let i = 1; i < str1.length; i++) {
  dp[i][0] = str1[i] === str2[0] ? 1 : dp[i - 1][0];
}
for (let j = 1; j < str2.length; j++) {
  dp[0][j] = str1[0] === str2[j] ? 1 : dp[0][j - 1];
}
for (let i = 1; i < str1.length; i++) {
  for (let j = 1; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
}

console.log(dp[str1.length - 1][str2.length - 1]);