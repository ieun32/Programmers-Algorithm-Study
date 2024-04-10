const fs = require('fs').readFileSync('/dev/stdin')
let [N, M] = fs.toString().trim().split(' ').map(Number)

let answer = Array.from({ length: N }, (_, i) => i + 1)
while(M > 1){
    let update = [];
    for(let i = 1; i <= answer.length; i++){
        for(let j = 1; j <= N; j++){
            if(!answer[i - 1].toString().includes(j)){
                update.push(`${answer[i - 1]} ${j}`)
            }
        }
    }
    answer = [...update];
    M--;
}

console.log(answer.join('\n'))

