const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim()

const regex = new RegExp(/([a-z]-)|([a-z]=)|(lj)|(nj)|(dz=)/g)
const result = input.replace(regex, '#') //일치하는 단어를 하나의 문자로 변경

console.log(result.length)