const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
let [T, ...Tnums] = input.shift().split(" ").map(Number);
const party = input.map((party) => party.split(" ").map(Number));
const visited = Array(M).fill(false)

if (T === 0) {
  console.log(M)
} else {
  while (true) {
    const [count, arr] = howManyT(Tnums)
    if(count === 0){
      const lying = visited.filter((arr) => arr === false);
      console.log(lying.length);
      return  
    }
    Tnums = [...arr];
  }
}


function howManyT(Tnums) {
  let arr = [...Tnums];
  let count = 0;
  for (let i = 0; i < party.length; i++) {
    if (visited[i]) {
      continue
    }
    const curParty = [...party[i]];
    curParty.shift();
    for (let j = 0; j < Tnums.length; j++) {
      if (curParty.includes(Tnums[j])) {
        count++;
        const merged = arr.concat(curParty);
        arr = merged.filter((item, i) => merged.indexOf(item) === i);
        visited[i] = true;
        break;
      }
    }
  }

  return [count, arr]
}