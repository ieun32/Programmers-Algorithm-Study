const N = +require("fs").readFileSync("/dev/stdin");

const list = Array.from({ length: 10 }, (_, i) => i);
let arr = Array.from({ length: 10 }, (_, i) => i);
let buffer = [];
let depth = 0;
while (true) {
  if (depth >= 10){
    console.log(-1);
    return
  }
  if (N < list.length) {
    console.log(list[N])
    return
  }
  const arrLength = arr.length;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < arrLength; j++) {
      const firstNum = parseInt(arr[j].toString().charAt(0), 10)
      if (firstNum < i) {
        const newNum = parseInt(`${i}${arr[j]}`, 10);
        list.push(newNum);
        buffer.push(newNum);
      }
    }

  }
  arr = [...buffer];
  buffer = [];
  depth++;
}