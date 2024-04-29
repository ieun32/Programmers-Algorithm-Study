const fs = require('fs').readFileSync('/dev/stdin')
const [N, M] = fs.toString().trim().split(' ').map(Number)

let answer = []
let stack = []
function BackTrac(num){
    if(stack.length === M){
        answer.push(stack.join(' '))
        stack.pop()
        return
    }
    for(let i = 0; i < N; i++){
        stack.push(i + 1)
        BackTrac(i)
    }
    stack.pop()
}
BackTrac(0)
console.log(answer.join('\n'))