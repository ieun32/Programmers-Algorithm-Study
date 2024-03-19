const fs = require('fs')
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const set = new Set(input) // 중복 제거
const arr = [...set]

// 문자열 길이와 사전순서에 따라 정렬
arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

console.log(arr.join('\n'))