const fs = require('fs')
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const info = input.map((e, i) => e.split(' ').map(Number))
const count = Array.from({ length: n }, () => 1)

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(info[i][0] < info[j][0] && info[i][1] < info[j][1]){
            count[i]++
        }
    }
}

console.log(count.join(' '))