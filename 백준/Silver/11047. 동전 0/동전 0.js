const fs = require('fs').readFileSync('/dev/stdin')
const [input, ...coins] = fs.toString().trim().split('\n')
let [N, K] = input.split(' ').map(Number)
let count = 0;
for(let i = N; i > 0; i--){
    if(K / coins[i - 1] >= 1){
        count += Math.trunc(K / coins[i - 1])
    }
    K = K % coins[i - 1];
}

console.log(count)