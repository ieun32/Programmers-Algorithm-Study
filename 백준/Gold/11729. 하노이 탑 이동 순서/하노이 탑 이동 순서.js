const N = +require("fs").readFileSync("/dev/stdin");

let answer = [];

function hanoi(N, start, to, via){
  if(N === 1){
    answer.push([start, to])
  } else {
    hanoi(N - 1, start, via, to);
    answer.push([start, to])
    hanoi(N - 1, via, to, start);
  }
}

hanoi(N, 1, 3, 2);
console.log(answer.length)
console.log(answer.map((info) => info.join(" ")).join("\n"));