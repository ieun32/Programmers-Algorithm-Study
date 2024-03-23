const fs = require('fs')
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const testcase = input.map((v, i) => v.split(' ').map(Number))

// 팩토리얼 구현 (재귀 함수)
function factorial(num){
   if(num === 0){
       return 1; 
   }
   return num * factorial(num - 1);
}
// 정답 배열
let answer = [];

// 테스트 케이스별로 조합 이용해서 풀기(nPr = (n!-r!)
testcase.map((arr, i) => {
    const N = arr[0]
    const M = arr[1]
    answer.push(Math.round(factorial(M)/(factorial(M - N) * factorial(N))))
})

// 정답 출력
console.log(answer.join('\n'))
