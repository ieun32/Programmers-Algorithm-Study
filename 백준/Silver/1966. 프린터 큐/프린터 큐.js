const fs = require('fs').readFileSync('/dev/stdin')
const [testcase, ...input] = fs.toString().trim().split('\n')
let answer = [];

for (let i = 0; i < parseInt(testcase) * 2; i += 2) {
  let count = 0;
  const [length, num] = input[i].split(' ').map(Number)
  let weight = input[i + 1].split(' ').map(Number)
  let queue = Array.from({ length: length }, (_, i) => i)
  const target = queue[num]

  while (true) {
        if(Math.max(...weight) === weight[0]){
          count++;
          weight.shift()
          let printed = queue.shift()

          if(printed === target){
            break;
          }
        } else {
          weight.push(weight.shift())
          queue.push(queue.shift())
        }
      }

      answer.push(count)
    }

console.log(answer.join(' '))