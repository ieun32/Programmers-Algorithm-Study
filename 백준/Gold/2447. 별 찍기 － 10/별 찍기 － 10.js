const N = +require("fs").readFileSync("/dev/stdin").toString().trim()

function makeSquareWithStar(num) {
  if (num === 1) {
    return ["*"];
  }

  let subSquare = makeSquareWithStar(num / 3);
  let newSquare = [];
	// num 만큼 반복, num*num 배열 만듦
  for (let i = 0; i < num; i++) {
    if (Math.floor(i / (num / 3)) % 3 === 1) {
      newSquare.push(
        subSquare[i % (num / 3)] +
        " ".repeat(num / 3) +
        subSquare[i % (num / 3)]
      );
    } else {
      newSquare.push(
        subSquare[i % (num / 3)].repeat(3)
      );
    }
  }

  return newSquare;
}

function printSquare(square) {
  console.log(square.join("\n"));
}

let square = makeSquareWithStar(N);
printSquare(square);