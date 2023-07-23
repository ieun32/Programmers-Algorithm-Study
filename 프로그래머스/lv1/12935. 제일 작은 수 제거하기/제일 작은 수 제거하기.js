function solution(arr) {
    arr.splice(arr.indexOf(arr.reduce((acc, cur)=> Math.min(acc, cur))), 1)
    var answer = arr.length != 0 ? arr : [-1]
    return answer;
}