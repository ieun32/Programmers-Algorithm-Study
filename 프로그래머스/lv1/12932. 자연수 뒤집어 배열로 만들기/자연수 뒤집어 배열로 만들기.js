function solution(n) {
    var answer = (n+'').split('').map((element)=> element = parseInt(element)).reverse()
    return answer;
}