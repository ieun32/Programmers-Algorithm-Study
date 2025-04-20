function solution(number, k) {
    stack = [];
    
    for(let i = 0; i < number.length; i++){
        while(k > 0 && Number(number[i]) > stack[stack.length - 1]){
            stack.pop();
            k--;
        };
        stack.push(Number(number[i]));
    };
    
    if(k > 0){
        stack.splice(-1, k);
    }
    
    return stack.join('');
}