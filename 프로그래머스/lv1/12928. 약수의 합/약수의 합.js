function solution(n) {
    let arr = [];
    
    for (let i = 1; i <= n; i++){
        if(n % i === 0){ arr.push(i) } 
    }
    
    var answer = arr.reduce((prev, cur)=>{return prev += cur},0)
    return answer;
}