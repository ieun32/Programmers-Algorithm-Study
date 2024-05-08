const fs = require("fs").readFileSync("/dev/stdin");
const [T, ...testcase] = fs.toString().trim().split("\n");

const regExp = /^(100+1+|01)+$/;
const answer = [];
testcase.forEach((string) => {
    if(string.match(regExp)){
        answer.push("YES");
    } else {
        answer.push("NO");
    }
})

console.log(answer.join("\n"));