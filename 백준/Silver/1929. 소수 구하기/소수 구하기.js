const fs = require("fs").readFileSync("/dev/stdin");
const [M, N] = fs.toString().trim().split(" ").map(Number);

function getPrimes(M, N) {
  const isPrime = new Array(N + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.map((value, index) => value ? index : null).filter((value) => value && value >= M)
}

console.log(getPrimes(M, N).join("\n"))