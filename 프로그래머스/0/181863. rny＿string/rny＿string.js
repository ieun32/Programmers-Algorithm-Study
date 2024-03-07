function solution(rny_string) {
    var arr = [...rny_string]
    arr.map((v, i) => {
        if(v === 'm') arr[i] = 'rn'
    })
    return arr.join('');
}