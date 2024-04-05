const fs = require('fs').readFileSync('/dev/stdin')
let [str, target] = fs.toString().trim().split('\n')
let count = 0;

while(str.includes(target)){
    str = str.replace(target, ' ')
    count++;
}

console.log(count)