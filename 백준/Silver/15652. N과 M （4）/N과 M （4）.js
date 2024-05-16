const fs = require("fs").readFileSync("/dev/stdin");
const [N, M] = fs.toString().trim().split(" ").map(Number);

const answer = [];
const stack = [];
function BackTrack(num, depth){
    if(depth === M){
        answer.push(stack.join(" "));
        stack.pop();
        return
    }
    for(let i = num; i <= N; i++){
        stack.push(i);
        BackTrack(i, depth + 1);
    }
    stack.pop();
}

BackTrack(1, 0);
console.log(answer.join("\n"));