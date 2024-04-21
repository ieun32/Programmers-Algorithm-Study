const fs = require('fs');
const [table, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [C,R] = table.split(' ').map(v=>+v);
let tomato = arr.map(v=>v.split(' ').map(w=>+w));
tomato.unshift(new Array(C).fill(-1))
tomato.push(new Array(C).fill(-1))
tomato.forEach((_,i)=>{
  tomato[i].unshift(-1);
  tomato[i].push(-1);
})
class Node{
  constructor(item){
    this.item = item;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item){
    const node = new Node(item)
    if(this.head==null){
      this.head= node;
    }else{
      this.tail.next = node;
    }

    this.tail = node;
    this.length +=1;
  }

  pop(){
    const popItem = this.head;
    this.head = this.head.next;
    this.length -=1;
    return popItem.item;
  }

  size(){
    return this.length;
  }

  empty(){
    if(this.length==0){
      return 1;
    }else{
      return 0;
    }
  }

  front(){
    if(this.empty()==1) return -1;
    return this.head.item; 
  }

  back(){
    if(this.empty()==1) return -1;
    return this.tail.item; 
  }
}

let q = new Queue();
let unripe = 0; 
let days = 0; 
tomato.forEach((v,y)=>{
  v.forEach((v2,x)=>{
    if(v2==1){
      q.push([y,x,0]);
    }
    if(v2==0){
      unripe++;
    }
  })
})
while(!q.empty()){


  let [y,x,c] = q.pop();
  if(c>days) days = c;

  if(tomato[y-1][x]==0){
    tomato[y-1][x]=1;
    q.push([y-1,x,c+1])
    unripe--;
  }
  if(tomato[y+1][x]==0){
    tomato[y+1][x]=1;
    q.push([y+1,x,c+1])
    unripe--;
  }
  if(tomato[y][x-1]==0){
    tomato[y][x-1]=1;
    q.push([y,x-1,c+1])
    unripe--;
  }
  if(tomato[y][x+1]==0){
    tomato[y][x+1]=1;
    q.push([y,x+1,c+1])
    unripe--;
  }
}


if(unripe!=0){
  console.log(-1);
}else{
  console.log(days)
}