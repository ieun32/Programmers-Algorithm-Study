const fs = require('fs').readFileSync('/dev/stdin')
const [N, ...input] = fs.toString().trim().split('\n')

let answer = [];

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        let newNode = new Node('head');
        this.head = newNode;
        this.length = 0;
    }
    
    push(value){
        let temp = this.head;
        let newNode = new Node(value)
        while(temp.next !== null){
            temp = temp.next;
        }
        temp.next = newNode;
        this.length++;
    }
    
    pop(){
        let temp = this.head;
        let temp2;
        while(temp.next !== null){
            temp2 = temp;
            temp = temp.next;
        }
        if(temp.value === 'head'){
          answer.push(-1)
          return
        }
        answer.push(temp.value)
        temp2.next = null;
        this.length--;
    }
    
    empty(){
        if(this.head.next === null){
            answer.push(1)
        } else {
            answer.push(0)
        }
    }
    
    top(){
        let temp = this.head;
        while(temp.next !== null){
            temp = temp.next;
        }
        if(temp.value === 'head'){
          answer.push(-1)
          return
        }
        answer.push(temp.value)
    }
    
    size(){
      answer.push(this.length)
    }
}

const stack = new Stack()


for(let i = 0; i < input.length; i++){
    const method = input[i].split(' ')

    switch(method[0]){
        case 'push':
            let num = parseInt(method[1])
            stack.push(num)
            break;
        case 'pop':
            stack.pop()
            break;
        case 'size':
            stack.size()
            break;
        case 'empty':
            stack.empty()
            break;
        case 'top':
            stack.top()
            break;
    }
}

console.log(answer.join('\n'))