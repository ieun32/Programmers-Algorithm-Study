const fs = require('fs').readFileSync('/dev/stdin')
const [N, M] = fs.toString().trim().split(' ').map(Number)

function BFS() {
  const queue = [N]
  const visited = Array.from({ lenght: 100000 }, () => false)
  let count = 0;
  while (true) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const num = queue.shift()
      visited[num] = true;
      if (num === M) {
        console.log(count)
        return;
      }

      for (const value of [num + 1, num - 1, num * 2]) {
        if (!visited[value] && value >= 0 && value <= 100000) {
          visited[value] = true
          queue.push(value)
        }
      }
    }
    count++;
  }
}

BFS()