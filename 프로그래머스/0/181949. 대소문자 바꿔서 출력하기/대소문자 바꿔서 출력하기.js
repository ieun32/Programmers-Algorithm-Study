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
    let answer = Array.from(str).map((v, i) => {
        //아스키코드표 65~90 대문자일 경우
        if (65 <= v.charCodeAt() && v.charCodeAt() <= 90){
            return v.toLowerCase()
        //아스키코드표 97~122 소문자일 경우
        } else if (97 <= v.charCodeAt() && v.charCodeAt() <= 122) {
            return v.toUpperCase()
        }
    }).join('')
    
    console.log(answer)
});