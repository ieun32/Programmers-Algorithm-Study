const fs = require('fs').readFileSync('/dev/stdin');
const input = fs.toString().trim().split('\n');

for(let i = 0; i < input.length - 1; i++){
    const arr = input[i].split(' ').map(Number);
        if(isTriangle(arr)){
            if(isEquilateral(arr)){
                console.log('Equilateral');
            }
            if(isIsosceles(arr)){
                console.log('Isosceles');
            }
            if(isScalene(arr)){
                console.log('Scalene');
            }
        } else {
            console.log('Invalid');
        }
}

function isTriangle(arr){
    const sorted = arr.sort((a, b) => b - a);
    if(sorted[0] < sorted[1] + sorted[2]){
        return true;
    } else {
        return false;
    }; 
};
            
function isEquilateral(arr){
    const [a, b, c] = arr;
    if(a == b && b == c && a == c){
        return true;
    } else {
        return false;
    }
}
            
function isIsosceles(arr){
    const [a, b, c] = arr;
    if(a == b && a !== c || b == c && a !== b || a == c && a !== b){
        return true;
    } else {
        return false;
    }
};

function isScalene(arr){
    const [a, b, c] = arr;
    if(a !== b && b !== c && a !== c){
        return true;
    } else {
        return false;
    }
}