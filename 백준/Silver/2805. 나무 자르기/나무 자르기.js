const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const Trees = input[0].split(" ").map(Number);
let [left, mid, right] = [0, 0, Math.max(...Trees)];
mid = Math.floor((left + right) / 2)
let sum = 0;
while (true) {
  sum = 0;
  for (let i = 0; i < N; i++) {
    if (Trees[i] - mid > 0) {
      sum += Trees[i] - mid;
    }
  }
  if (sum === M || left === mid || mid === right) {
    console.log(mid)
    return
  }
  if (M < sum) {
    left = mid;
    mid = Math.floor((left + right) / 2);
  }
  if (M > sum) {
    right = mid;
    mid = Math.floor((left + right) / 2);
  }
}