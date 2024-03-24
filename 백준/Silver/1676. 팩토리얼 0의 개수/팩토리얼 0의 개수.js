const fs = require('fs')
const num = fs.readFileSync('/dev/stdin')

function factorial(num){
    return num ? BigInt(BigInt(num) * BigInt(factorial(num - 1))) : 1
}

const arr = [...(factorial(Number(num))).toString()]
let answer = 0;

while(true){
    const cur = arr.pop()
    if(cur !== '0') break
    else answer++
}

console.log(answer)