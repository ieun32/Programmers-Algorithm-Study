const fs = require('fs')
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = input.map((e, i) => e.split(' '))

const result = arr.sort((a, b) => {
  if(a[0] === b[0]){
      return a[1] - b[1]  
  } else {
      return a[0] - b[0]
  }
})

console.log(result.map(e => e.join(' ')).join('\n'))