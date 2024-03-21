const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
let num = parseInt(input)
let i = 665;

//for문 풀이
//for(i = 1; num > 0; i++){
//    if(i.toString().includes('666')) num--
//}
//
//console.log(i - 1)

//while문 풀이
while(num > 0){
    i++
    if(i.toString().includes('666')) num--
}

console.log(i)