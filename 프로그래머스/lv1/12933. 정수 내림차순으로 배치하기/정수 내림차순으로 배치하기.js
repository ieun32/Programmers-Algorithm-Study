function solution(n) {
    let arr = (n+'').split('')
    arr.map((num)=>Number(num))
    arr.sort((a, b)=> b - a)
    var answer = ''
    arr.map((num)=> { answer += num})
    
    return parseInt(answer);
}