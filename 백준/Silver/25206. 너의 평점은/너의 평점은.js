const fs = require('fs').readFileSync('/dev/stdin')
const input = fs.toString().trim().split('\n')

const grade_score = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0,
}

let score = 0;
let count = 0;

input.map((v, i) => {
    let arr = v.split(' ')
    let credit = +arr[1]
    let grade = arr[2]
    if(grade !== 'P') {
      score += credit * (grade_score[grade.trim()])
      count += credit;
    }
})

console.log(score / count)
