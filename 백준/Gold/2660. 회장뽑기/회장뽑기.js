const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift() // 회원의 수
input.pop() // -1, -1 좌표 제거
const edges = input.map((edge) => edge.split(" ").map(Number));

// 인접 리스트 만들기
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < edges.length; i++) {
  const [v1, v2] = edges[i];
  graph[v1].push(v2);
  graph[v2].push(v1);
}

// 모든 정점에서 출발해 최대 깊이 저장
const depths = [];
for (let i = 1; i <= N; i++) {
  const depth = BFS(i);
  depths.push(depth);
}

const presidents = [];
const minDepth = Math.min(...depths)
depths.forEach((depth, i) => {
  if (depth === minDepth) {
    presidents.push(i + 1)
  }
})
console.log(`${minDepth} ${presidents.length}`)
console.log(presidents.join(" "))

function BFS(num) {
  const queue = [num];
  const visited = Array.from({ length: N }, () => false);
  let depth = 0;
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const curV = queue.shift();
      visited[curV] = true;
      for (let j = 0; j < graph[curV].length; j++) {
        const newV = graph[curV][j]
        if (!visited[newV]) {
          queue.push(newV)
          visited[newV] = true;
        }
      }
    }
    depth++;
  }
  return depth - 1;
}