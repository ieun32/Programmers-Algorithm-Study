const [A, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const sum = Number(A) + Number(B);
console.log(sum);