const [F, S, G, U, D] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function BFS() {
  let cur = S;
  let push = 0;

  if (S < G) {
    const distance = G - S;
    const up = Math.floor(distance / U);
    cur = up * U + S;
    push = up;
  }
  if (S > G) {
    const distance = S - G;
    const down = Math.floor(distance / D);
    cur = S - down * D;
    push = down;
  }
  const queue = [[cur, push]];
  const visited = Array.from({ length: F + 1 }, () => false)
  while (true) {
    if (queue.length === 0) {
      console.log("use the stairs")
      return
    }

    const [cur, push] = queue.shift();
    visited[cur] = true;
    if (cur === G) {
      console.log(push)
      return
    }
    const up = cur + U;
    const down = cur - D;
    if (!visited[up] && up > 0 && up <= F) {
      queue.push([up, push + 1])
      visited[up] = true;
    }
    if (!visited[down] && down > 0 && down <= F) {
      queue.push([down, push + 1])
      visited[down] = true;
    }
  }
}

BFS();