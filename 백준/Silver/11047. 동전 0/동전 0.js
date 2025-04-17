const fs = require('fs').readFileSync('/dev/stdin');
const [input, ...coins] = fs.toString().trim().split('\n');
let [N, K] = input.split(' ').map(Number);
let count = 0;

// coins 배열을 숫자 배열로 변환
const coinValues = coins.map(Number);

let index = coinValues.length - 1;

while (K > 0 && index >= 0) {
    const coin = coinValues[index];
    if (coin <= K) {
        // 현재 동전으로 가능한 개수 계산
        count += Math.floor(K / coin);
        K %= coin;
    }
    index--;
}

console.info(count);
