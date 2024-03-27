const fs = require('fs').readFileSync('/dev/stdin')
const [N, K] = fs.toString().trim().split(' ')
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;
  }

  dequeue() {
    if (!this.size) return null;
    let current = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = current.next;
    }

    current.next = null;

    this.size -= 1;
    return current.value;
  }

  print(){
    let current = this.first;
    let arr = [];
    if(current === null) return
    while(current !== this.last){
      arr.push(current.value)
      current = current.next;
    }
    arr.push(current.value)
    console.log(arr.join(' > '))
  }
}

const queue = new Queue();

for (let i = 0; i < N; i++) {
  queue.enqueue(i + 1)
}

let arr = [];

while(queue.size > 1){
  for(let i = 0; i < K - 1; i++){
    queue.enqueue(queue.dequeue())
  }

  arr.push(queue.dequeue())
}

arr.push(queue.dequeue())

console.log(`<${arr.join(', ')}>`)