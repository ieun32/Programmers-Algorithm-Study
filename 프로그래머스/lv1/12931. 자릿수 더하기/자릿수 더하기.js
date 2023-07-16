function solution(n)
{
    var answer = 0;
    let arr = String(n).split('')
    arr.map((num)=>{
        answer += parseInt(num)
    })

    return answer;
}