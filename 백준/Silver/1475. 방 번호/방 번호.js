const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(Number)
const arr = Array.from({ length: 11 }, () => 0)

input.map((v, i) => {
  if (v === 9 || v === 6) {
    arr[10]++
  } else {
    arr[Number(v)]++
  }
})

let answer = 0;

//가장 많은 숫자 기준으로 세트 개수 세기
arr.filter((v, i) => {
  if (i === 10){
    if(answer < v / 2) answer = Math.round(v / 2); 
  } else if (answer < v) answer = v
})

console.log(answer)