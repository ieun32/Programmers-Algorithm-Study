const fs = require("fs").readFileSync("/dev/stdin");
const [...testcases] = fs.toString().trim().split("\n");

const answer = [];
testcases.forEach((str) => {
    const [A, B] = str.split(" ");
    const sum = Number(A) + Number(B);
    answer.push(sum);
})

console.log(answer.join("\n"));