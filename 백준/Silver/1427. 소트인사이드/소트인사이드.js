const fs = require('fs')
const [...input] = fs.readFileSync('/dev/stdin').toString().trim()

input.sort((a, b) => {
    if(a > b) return -1
    if(a < b) return 1
    if(a === b) return 0
})

console.log(input.join(''))