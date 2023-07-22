function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((num, idx, arr) => {
        signs[idx] === true ? answer += num : answer -= num;
    })
   
    return answer;
}