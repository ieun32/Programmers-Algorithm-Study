const fs = require('fs').readFileSync('/dev/stdin')
const [N, ...input] = fs.toString().trim().split('\n')

let bridge = new Array(+N).fill(0)
bridge = [0, ...input[0].split(' ').map(Number)]
let [start, end] = input[1].split(' ').map(Number)

let result = -1;
let isVisited = [];


function BFS(start) {
  const queue = [];
  queue.push([start, 0]);
  isVisited[start] = true;

  while (queue.length > 0) {
      const [cur, time] = queue.shift();
      const interval = bridge[cur];

      if (cur === end) {
          result = time;
          return;
      }

      // 오른쪽으로 진행하는 방법
      for (let i = 1; cur + (interval * i) <= N; ++i) {
          const next = cur + (interval * i);
          if (!isVisited[next]) {
              isVisited[next] = true;
              queue.push([next, time + 1]);
          }
      }
      // 왼쪽으로 진행하는 방법
      for (let i = 1; cur - (interval * i) >= 1; ++i) {
          const next = cur - (interval * i);
          if (!isVisited[next]) {
              isVisited[next] = true;
              queue.push([next, time + 1]);
          }
      }
  }
}


BFS(start)
console.log(result)