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

  isEmpty() {
    return this.heap.length === 0;
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
}

const fs = require("fs").readFileSync("/dev/stdin").toString().trim()
const [N, K] = fs.split(" ").map(Number);

function BFS() {
  const queue = new MinHeap();
  const visited = Array.from({ length: 100_001 }, () => false)
  queue.insert(0, N);

  while (!queue.isEmpty()) {
    const { key, value } = queue.remove();
    visited[value] = true;
    if (value === K) {
      console.log(key)
      return
    }

    for (const [nK, nV] of [[key + 1, value + 1], [key + 1, value - 1], [key, value * 2]]) {
      if (!visited[nV] && nV >= 0 && nV <= 100_000) {
        queue.insert(nK, nV);
      }
    }
  }
}

BFS()