const fs = require("fs").readFileSync("/dev/stdin");
const [N, M] = fs.toString().trim().split("\n").map(Number);

// N * N 이차원 배열 0으로 초기화
const snail = Array.from({ length: N }, () => new Array(N).fill(0));
// 아래, 오른쪽, 위쪽, 왼쪽 순으로 벽까지 혹은 0이 아닐때까지 이동
// 좌표부터 만들기
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let answer = [];

// 달팽이 수 채우는 함수
function makeSnail(N, target){
    let index = 0;
    let num = N * N;
    let [x, y] = [0, 0];

    while(true){
        // 수를 채운다
        snail[x][y] = num;

        // num이 타겟과 같으면 위치를 저장한다.
        if(num === target){
            answer = [x + 1, y + 1];
        }
        
        // num이 1이면 끝까지 채운 것이므로 종료한다
        if(num === 1){
            return
        }
        
        // 이동할 좌표 구하기
        const i = index % 4;
        let [X, Y] = [x + dx[i], y + dy[i]];
        // 범위에 벗어나는 지 확인한다, 벗어나면 dx, dy를 한 칸 옮기기
        if(X < 0 || Y < 0 || X >= N || Y >= N || snail[X][Y] !== 0){
            index++
            const i = index % 4;
            [X, Y] = [x + dx[i], y + dy[i]]
        }
        [x, y] = [X, Y];
        num--;
    }
}
makeSnail(N, M)
const print = snail.map((row) => row.join(" "))
console.log(print.join("\n"))
console.log(answer.join(" "))