function solution(phone_number) {
    
    var answer = phone_number.slice(0, (phone_number.length - 4)).replace(/[0-9]/g, '*') + phone_number.slice(-4, phone_number.length)
    return answer;
}