const fs = require("fs").readFileSync('/dev/stdin')
let str = fs.toString().trim()

str = str.replaceAll('XXXX', 'AAAA')
str = str.replaceAll('XX', 'BB')

console.log(str.includes('X') ? -1 : str)
