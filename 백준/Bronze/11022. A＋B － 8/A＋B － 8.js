const fs = require("fs").readFileSync("/dev/stdin");
const [T, ...inputs] = fs.toString().trim().split("\n");

const answer = [];
inputs.forEach((str, idx) => {
    const [A, B] = str.split(" ");
    const sum = Number(A) + Number(B);
    answer.push(`Case #${idx + 1}: ${A} + ${B} = ${sum}`)
})

console.log(answer.join("\n"));