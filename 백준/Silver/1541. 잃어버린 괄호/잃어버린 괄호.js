const fs = require('fs').readFileSync('/dev/stdin')
const input = fs.toString().trim()

const groups = input.split('-');
let answer = 0;
for(let i = 0; i < groups.length; i++){
   let sum = groups[i].split('+').map(Number).reduce((a, b) => a + b)
   if(i === 0){
       answer += sum; 
   } else {
       answer -= sum; 
   }
} 

console.log(answer)