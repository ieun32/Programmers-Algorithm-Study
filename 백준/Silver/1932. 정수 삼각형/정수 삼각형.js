const fs = require("fs").readFileSync("/dev/stdin");
const input = fs.toString().trim().split("\n");
const N = +input.shift();
const triangle = input.map((num) => num.split(" ").map(Number));
const dp = new Array(N).fill(0);
for(let i = N - 1; i > 0; i--){
  for(let j = 0; j < triangle[i - 1].length; j++){
    const max = Math.max(triangle[i - 1][j] + triangle[i][j], triangle[i - 1][j] + triangle[i][j + 1])
    triangle[i - 1][j] = max;
  }
}

console.log(triangle[0][0]);