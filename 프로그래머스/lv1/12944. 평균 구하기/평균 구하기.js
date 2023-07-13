function solution(arr) {
    
    const sum = arr.reduce((prev, cur) => {
        return prev += (cur);
    }, 0)
    
    var answer = sum / arr.length
    return answer;
}