function solution(t, p) {
    const repeatNum = t.length - p.length + 1
    let arr = [];
    let count = 0;
    
    for (let i = 0; i < repeatNum; i++){
        arr[i] = t.slice(i, p.length + i);
        
        if(Number(arr[i]) <= Number(p)){
            count++;
        }
    }
    
    var answer = count;
    return answer;
}