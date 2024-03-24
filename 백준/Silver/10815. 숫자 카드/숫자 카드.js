const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const num_N = new Set(input[1].split(' '))
const num_M = input[3].split(' ')

let answer = []

num_M.map((m, i) => {
    if(num_N.has(m)) answer.push(1)
    else answer.push(0)
})

console.log(answer.join(' '))