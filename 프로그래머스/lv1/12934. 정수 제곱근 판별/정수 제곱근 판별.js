function solution(n) {
    var answer = Math.sqrt(n) % 1 === 0 && n > 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1
    return answer;
}