const string = require("fs").readFileSync("/dev/stdin").toString().trim();
// 100+1+ 이나 01로 시작하고 끝나는 패턴
const regExp = /^(100+1+|01)+$/;

if (string.match(regExp)) {
  console.log("SUBMARINE");
} else {
  console.log("NOISE");
}