const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const solutions = input[0].split(" ").map(Number);

function findSolution(){
    let p1 = 0;
    let p2 = solutions.length - 1;
    let min = Number.MAX_SAFE_INTEGER;
    let answer = [];
    while(p1 < p2){
        const left = solutions[p1]
        const right = solutions[p2]
        
        if(Math.abs(left + right) < min){
            answer = [left, right];
            min = Math.abs(left + right);
        }
        if(left + right < 0){
            p1 = p1 + 1;
        }
        if(left + right > 0){
            p2 = p2 - 1;
        }
        if(left + right === 0){
            console.log(answer.join(" "))
            return
        }
    }
    console.log(answer.join(" "))
}

findSolution();