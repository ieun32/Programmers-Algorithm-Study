const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    // 첫번째 풀이 (아스키코드)
    // let answer = [...str].map((v, i) => {
    //     if (65 <= v.charCodeAt() && v.charCodeAt() <= 90){
    //         return v.toLowerCase()
    //     } else if (97 <= v.charCodeAt() && v.charCodeAt() <= 122) {
    //         return v.toUpperCase()
    //     }
    // }).join('')
    
    // 두번째 풀이 (toLowerCase(), toUpperCase())
    let answer = [...str].map((v, i) => {
        if(v === v.toLowerCase()) return v.toUpperCase()
        if(v === v.toUpperCase()) return v.toLowerCase()
        throw new Error('there is no lower, upper string')
    }).join('')
    
    console.log(answer)
});