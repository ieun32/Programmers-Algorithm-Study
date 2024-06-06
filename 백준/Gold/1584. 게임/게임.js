class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 삽입
  insert(key, value) {
    this.heap.push({ key, value })
    this.heapifyUp();
  }

  // 삭제: 최솟값 반환
  remove() {
    const rootNode = this.heap[0];
    const length = this.heap.length
    if (length === 0) return undefined
    if (length === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }
    return rootNode;
  }

  // 삽입 연산 재정렬
  heapifyUp() {
    let lastIdx = this.heap.length - 1;
    const insertNode = this.heap[lastIdx];
    while (lastIdx > 0) {
      const parentIdx = this.getParentIdx(lastIdx);
      if (this.heap[parentIdx].key > insertNode.key) {
        this.heap[lastIdx] = this.heap[parentIdx];
        lastIdx = parentIdx;
      } else {
        break;
      }
    }
    this.heap[lastIdx] = insertNode;
  }

  // 삭제 연산 재정렬
  heapifyDown() {
    const length = this.heap.length
    const parentNode = this.heap[0];
    let parentIdx = 0;
    while (this.getLeftChildIdx(parentIdx) < length) {
      const leftChildIdx = this.getLeftChildIdx(parentIdx)
      const rightChildIdx = this.getRightChildIdx(parentIdx)
      const smallerIdx = rightChildIdx < length && this.heap[rightChildIdx].key < this.heap[leftChildIdx].key
        ? rightChildIdx
        : leftChildIdx

      if (parentNode.key > this.heap[smallerIdx].key) {
        this.heap[parentIdx] = this.heap[smallerIdx];
        parentIdx = smallerIdx;
      } else {
        break;
      }
    }
    this.heap[parentIdx] = parentNode;
  }

  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  getLeftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }

  getRightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const danger = [];
for (let i = 0; i < N; i++) {
  danger.push(input.shift().split(" ").map(Number));
}
const M = +input.shift();
const death = [];
for (let i = 0; i < M; i++) {
  death.push(input.shift().split(" ").map(Number));
}

const map = Array.from({ length: 501 }, () => Array(501).fill(0));

// 위험 구역을 1로 초기화
danger.forEach((coordi) => {
  const [x1, y1, x2, y2] = coordi;
  const [top, bottom, left, right] = [Math.min(x1, x2), Math.max(x1, x2), Math.min(y1, y2), Math.max(y1, y2)];
  for (let i = top; i <= bottom; i++) {
    for (let j = left; j <= right; j++) {
      map[i][j] = 1;
    }
  }
})
// 죽음의 구역 2로 초기화
death.forEach((coordi) => {
  const [x1, y1, x2, y2] = coordi;
  const [top, bottom, left, right] = [Math.min(x1, x2), Math.max(x1, x2), Math.min(y1, y2), Math.max(y1, y2)];
  for (let i = top; i <= bottom; i++) {
    for (let j = left; j <= right; j++) {
      map[i][j] = 2;
    }
  }
})

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
// 최대한 가중치가 양수가 되도록 움직여야함. 다익스트라
function BFS() {
  const queue = new MinHeap();
  queue.insert(0, [0, 0])
  while (true) {
    if (queue.isEmpty()) {
      console.log(-1)
      return
    }

    const { key, value } = queue.remove();
    const [x, y] = value;
    map[x][y] = 2;
    if (x === 500 && y === 500) {
      console.log(Math.abs(key))
      return
    }

    for (let i = 0; i < 4; i++) {
      const [X, Y] = [x + dx[i], y + dy[i]];
      if (X < 0 || Y < 0 || X >= 501 || Y >= 501) continue
      // 방문했던 곳, 죽음의 구역만 아니면 진입하기
      if (map[X][Y] !== 2) {
        if (map[X][Y] === 1) {
          queue.insert(key + 1, [X, Y]);
          map[X][Y] = 2;
        } else {
          queue.insert(key, [X, Y]);
          map[X][Y] = 2;
        }
      }
    }
  }
}

BFS();