const fs = require('fs').readFileSync('/dev/stdin');
const expression = fs.toString().trim();

const split_with_minus = expression.split('-');
let count = 0;
for(let i = 0; i < split_with_minus.length; i++){
    const split_with_plus = split_with_minus[i].split('+').map(Number);
    if(i === 0){
        count += split_with_plus.reduce((res, acc) => res + acc);
    } else {
        count -= split_with_plus.reduce((res, acc) => res + acc);
    };
};

console.log(count);