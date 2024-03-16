const fs = require('fs')
const [answer, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let Answer = parseInt(answer)

inputs.map((str, i) => {
  let arr = [];
  const spread = [...str];

  spread.map((s, j) => {
    if (j === 0) arr.push(s)
    else if (spread[j - 1] !== spread[j]) arr.push(s)
  })
  
  const is_not_group = arr.some((e, i) => arr.indexOf(e) != arr.lastIndexOf(e))
  if (is_not_group) Answer--
})

console.log(Answer)