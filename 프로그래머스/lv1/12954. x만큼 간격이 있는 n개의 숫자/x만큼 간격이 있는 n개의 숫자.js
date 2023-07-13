function solution(x, n) {
    let arr = [x];
    
    for (let i = 1; i < n; i++){
        arr[i] = arr[i - 1] + (x)     
    }
    var answer = arr;
    return answer;
}