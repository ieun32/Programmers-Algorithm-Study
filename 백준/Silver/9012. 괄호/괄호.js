const fs = require('fs').readFileSync('/dev/stdin')
const [num, ...input] = fs.toString().trim().split('\n')

let arr = [];

input.map((str, i) => {
    while(true){
        if(str.includes('()')){
          str = str.replaceAll('()', '')
        } else {
          break;
        }
    }
    arr.push(str.trim().length > 0 ? 'NO' : 'YES')
})

console.log(arr.join('\n'))