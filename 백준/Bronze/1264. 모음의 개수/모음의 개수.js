const fs = require("fs").readFileSync("/dev/stdin");
const testcases = fs.toString().trim().split("\n");

const regExp = /[aeiouAEIOU]/g;
const answer = [];

testcases.forEach((string) => {
    if(string === '#'){
        return
    }
    if(string.match(regExp)){
        answer.push(string.match(regExp).length)
    } else {
        answer.push(0)
    }
})

console.log(answer.join("\n"));