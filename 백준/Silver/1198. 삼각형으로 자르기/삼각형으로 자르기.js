const fs = require('fs').readFileSync('/dev/stdin')
let [N, ...input] = fs.toString().trim().split('\n')
N = parseInt(N)
input = input.map((v) => v.split(' ').map(Number))

function getArea(current){
  const [x1, y1, x2, y2, x3, y3] = current;
  const area = (Math.abs((x1 * y2 + x2 * y3 + x3 * y1) - (x2 * y1 + x3 * y2 + x1 * y3)) / 2)
  return area;
}

let areas = [];
let stack = [];
function BackTracking(num) {
  if (stack.length === 3) {
    let current = []
    stack.map((v) => current.push(...input[v - 1]))
    areas.push(getArea(current))
    stack.pop()
    return
  }
  for (let i = num; i <= N; i++) {
    stack.push(i)
    BackTracking(i + 1)
  }
  stack.pop()
}

BackTracking(1)
const MAX_area = Math.max(...areas)
console.log(MAX_area.toFixed(1))
