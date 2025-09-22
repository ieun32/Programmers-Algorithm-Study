const fs = require('fs').readFileSync('/dev/stdin');
const N = Number(fs.toString());
// 2개를 남겨야 이김
// 3으로 나눈 몫이 홀수 & 나머지가 짝수
// 3으로 나눈 몫이 짝수 & 나머지가 홀수면 상근이가 이김
// 그니까 3으로 나눈 몫 + 나머지 = 홀수면 상근이가 이김

if((Math.floor(N / 3) + N % 3) % 2 !== 0){
    console.log('SK')
} else {
    console.log('CY')
};
