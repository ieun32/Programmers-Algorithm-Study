const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
const num = parseInt(input)

let numer;
let denom;
let i;
let count = 1;

for(i = 1; i < num; i = i + count){
    count++;
}

if(count % 2 === 0){
  numer = Array.from({ length: count }, (_, i) => i + 1)
  denom = Array.from({ length: count }, (_, i) => i + 1).reverse()
} else {
  numer = Array.from({ length: count }, (_, i) => i + 1).reverse()
  denom = Array.from({ length: count }, (_, i) => i + 1)
}

const index = num - (i - count) - 1

console.log(`${numer[index]}/${denom[index]}`)