const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    // 첫번째 문제풀이
    // let answer = [...new Array(n)].map((_, i) => str).join('')
    
    // 두번째 문제풀이
    let answer = str.repeat(n)
    console.log(answer)
});