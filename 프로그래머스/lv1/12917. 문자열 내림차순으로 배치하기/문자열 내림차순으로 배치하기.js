function solution(s) {
    const S = [...s].sort((a, b) => {
    if(a < b) return 1;
    if(a === b) return 0;
    if(a > b) return -1;
    })
    
    return S.join('')
}