function solution(a, b) {
    if(a > b){ 
        let c
        c = a
        a = b
        b = c
    }
    
    for(let i = a + 1; i <= b; i++){
        a += i
    }
    
    return a;
}