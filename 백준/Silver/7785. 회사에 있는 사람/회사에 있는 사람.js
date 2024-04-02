const fs = require('fs').readFileSync('/dev/stdin')
const [num, ...input] = fs.toString().trim().split('\n')

let obj = {};
input.map((v, i)=>{
    arr = v.split(' ')
    obj[arr[0]] = arr[1];
})

let answer = [];
for(const v in obj){
    if(obj[v] === 'enter') answer.push(v)
}

answer.sort((a, b) => a > b ? -1 : 1);
console.log(answer.join('\n'))