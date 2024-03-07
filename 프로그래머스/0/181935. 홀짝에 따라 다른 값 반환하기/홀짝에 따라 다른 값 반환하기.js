function solution(n) {
    var answer = 0;
    
    if(n % 2 != 0){
        answer = [...new Array(n)].reduce((prev, cur, i) => {
            return (i + 2) % 2 != 0 ? prev + (i + 2) : prev
        }, 1)
    } else {
        answer = [...new Array(n)].reduce((prev, cur, i) => {
            return (i + 1) % 2 === 0 ? prev + (i + 1)**2 : prev
        }, 0)
    }
    
    return answer;
}