const fs = require('fs').readFileSync('/dev/stdin')
let [n, m] = fs.toString().trim().split(' ').map(Number)

function solution(n,m) {
    const seq = [...Array(m)].fill(0);
    const visited = [...Array(n)].fill(false);
    let result = "";
    
    function dfs(k) {
        if (k === m) {
            const arr = [];
            for (let i=0; i<m; i++) {
                arr.push(seq[i]);
            }
            
            result += `${arr.join(' ')}\n`;
            return 
        }
        for (let i=1; i<=n; i++) {
            if (!visited[i]) {
                seq[k] = i;
                visited[i] = true;
                dfs(k+1);
                visited[i] = false;
            }
        }
    }
    
    dfs(0);
    return result;
}

console.log(solution(n,m));

