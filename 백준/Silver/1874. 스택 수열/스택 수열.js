const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));

const iter = input.shift();
let ans = [];
let stack = [];
let stackNum = 1

// 수열 개수만큼 반복 
for(let i = 0; i < iter; i++){
    let num = input[i]; //현재 수열
    
    // counter가 현재 수열값보다 작거나 같으면
    // stack에 counter값을 push하고 counter값을 1++
    // 그리고 answer배열에 +를 할당
    while(stackNum <= num){
        stack.push(stackNum);
        stackNum++;
        ans.push("+");
    }
    
    // counter가 현재 수열값보다 크면 스택에서 pop연산 수행 후 answer배열에 - 할당
    let stackPop = stack.pop();
    ans.push("-");

    // 만약 counter값이 현재 수열값과 같지 않다면 (수열은 4인데 counter는 )
    if(stackPop !== num){
        ans = ["NO"];
        break;
    }
}

console.log(ans.join("\n"));