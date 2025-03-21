const fs = require('fs').readFileSync('/dev/stdin');
const [time, plus_minute] = fs.toString().split('\n');
let [H, M] = time.split(' ').map(Number);

M = M + Number(plus_minute);
if (M > 59) {
    H = H + parseInt(M / 60);
    M = M % 60;
    if(H > 23){
        H -= 24;
    }
};

console.log(`${H} ${M}`)
