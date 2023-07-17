function solution(s){
    var answer = true;
    let countP = 0;
    let countY = 0;
    
    s.toLowerCase().split('').forEach((element)=>{
        if(element === 'p') countP ++
        else if(element === 'y') countY++
    })
    
    if(countP === countY) answer = true;
    else if(countP != countY) answer = false;

    return answer;
}