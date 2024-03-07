function solution(rny_string) {
    // 첫번째 풀이 (순회)
    // var arr = [...rny_string]
    // arr.map((v, i) => {
    //     if(v === 'm') arr[i] = 'rn'
    // })
    // return arr.join('');
    
    // 두번째 풀이 (내장 메서드)
    return rny_string.replaceAll('m', 'rn')
}