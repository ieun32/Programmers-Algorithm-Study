function solution(a, b) {
    var answer = 0;
    a.forEach((num, idx)=>{
        answer += num * b[idx];
    })
    
    return answer;
}