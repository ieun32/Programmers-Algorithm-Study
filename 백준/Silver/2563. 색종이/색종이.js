const fs = require('fs')
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const num = Number(n);
const cordi = input.map((v, i) => v.split(' ').map(Number));

//2차원 배열 (도화지)
const max_x = Math.max.apply(null, cordi.map((v, i) => v[0] + 10))
const max_y = Math.max.apply(null, cordi.map((v, i) => v[1] + 10))
const white_paper = Array.from({length: max_x + 1}, () => Array.from({length: max_y + 1}, () => 0));

let answer = 0;
cordi.forEach((arr, i) => {
    for(let x = arr[0]; x < arr[0] + 10; x++){
        for(let y = arr[1]; y < arr[1] + 10; y++){
            if(++white_paper[x][y] === 1) answer++
        }
    }
})

console.log(answer)
                              