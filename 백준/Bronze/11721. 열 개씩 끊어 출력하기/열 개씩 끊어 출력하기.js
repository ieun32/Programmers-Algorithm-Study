const fs = require('fs').readFileSync('/dev/stdin');
const str = fs.toString().trim().split('');

const answer = [];

while (str.length > 10) {
  const sliced = str.splice(0, 10).join('');
  answer.push(sliced);
}
answer.push(str.join(''));

console.log(answer.join('\n'));