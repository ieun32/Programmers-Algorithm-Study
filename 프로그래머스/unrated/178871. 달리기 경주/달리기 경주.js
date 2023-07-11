function solution(players, callings) {
    const obj = {}
    
    for (let i in players){
        obj[players[i]] = i
    }
    
    for (const name of callings) {

        let index = obj[name]
        let front = players[index - 1]
        let back = players[index]
        players[index] = players[index - 1]
        players[index - 1] = name
        
        obj[back]--;
        obj[front]++;
    }
    
    var answer = players
    return answer;
}