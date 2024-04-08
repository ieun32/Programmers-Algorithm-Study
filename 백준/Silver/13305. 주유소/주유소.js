const fs = require('fs').readFileSync('/dev/stdin')
const [N, ...input] = fs.toString().trim().split('\n')

let weights = input[0].split(' ').map(Number)
let prices = input[1].split(' ').map(Number)
prices = prices.splice(0, prices.length - 1)
let count = 0;

while (true) {
  let min = Math.min(...prices)
  const index = prices.indexOf(min)
  if (index === 0) {
    count += min * weights.reduce((p, c) => p + c)
    break;
  } else {
    count += min * weights.splice(index, weights.length).reduce((p,c) => p + c)
    prices = prices.splice(0, index)
    weights = weights.splice(0, index)
  }
}

console.log(count)

