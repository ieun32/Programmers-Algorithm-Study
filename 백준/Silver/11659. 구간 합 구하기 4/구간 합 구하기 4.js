const fs = require('fs').readFileSync('/dev/stdin')
const [NM, NUM, ...input] = fs.toString().trim().split("\n")

const [N, M] = NM.split(' ').map(Number)
const arr = NUM.split(' ').map(Number)
const count = input.map((v) => v.split(' ').map(Number))

let answer = [];
let sum = [0]

for(let i = 0; i < N; i++){
    sum[i + 1] = sum[i] + arr[i]
}
for(let j = 0; j < M; j++){
    answer.push(sum[count[j][1]] - sum[count[j][0] - 1])
}

console.log(answer.join('\n'))