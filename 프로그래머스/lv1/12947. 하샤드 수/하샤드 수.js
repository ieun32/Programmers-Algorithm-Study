function solution(x) {
    var answer = 
        x % (String(x).split('')
        .map(( num )=> Number( num ))
        .reduce(( per, cur ) => { return per + cur }, 0)) === 0
    return answer;
}