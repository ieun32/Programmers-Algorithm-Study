function solution(left, right) {
    let count = 0;
    let sum = 0;
    
    for(let i = left; i <= right; i++){
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                count++;
            }
        }
        if(count % 2 === 0){
            sum += i;
            count = 0;
        } else {
            sum -= i;
            count = 0;
        }
    }
    
    return sum;
}