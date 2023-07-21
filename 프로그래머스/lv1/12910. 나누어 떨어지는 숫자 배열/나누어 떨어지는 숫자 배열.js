function solution(arr, divisor) {
    var answer = [];
    arr.forEach((num)=>{
        if(num % divisor === 0) answer.push(num)
    })
    
    answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b)
    
    return answer
}