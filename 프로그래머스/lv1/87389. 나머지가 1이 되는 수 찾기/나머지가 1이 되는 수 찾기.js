function solution(n) {
    let i = 0;
    var answer = 0;
    
    while(true){
        if(n % i === 1){
            return answer = i;
        }else{
            i++;
        }
    }
    
    return answer;
}