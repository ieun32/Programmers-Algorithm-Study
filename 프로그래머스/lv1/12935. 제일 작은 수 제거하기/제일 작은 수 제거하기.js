function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    var answer = arr.length != 0 ? arr : [-1]
    return answer;
}