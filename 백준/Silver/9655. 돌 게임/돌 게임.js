const fs = require('fs').readFileSync('/dev/stdin')
const input = +fs;

if(input % 2 === 0){
    console.log('CY')
} else {
    console.log('SK')
}