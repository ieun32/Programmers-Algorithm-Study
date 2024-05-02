const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const k = parseInt(input[1]);

let dr = [1, 0, -1, 0]; // 하, 우, 상, 좌
let dc = [0, 1, 0, -1];
let map = new Array(n).fill().map(() => new Array(n).fill(0));

function makeMap() {
    let r = 0;
    let c = 0;
    let count = n * n;
    let d = 0; // 방향

    while (true) {
        if (count === 0) {
            break;
        }
        map[r][c] = count--;
        let nr = r + dr[d];
        let nc = c + dc[d];
        let nd = setDirection(d, nr, nc);
        // 방향이 바뀌면 다음 방향을 기준으로 r,c를 업데이트.
        if (nd !== d) {
            r = r + dr[nd];
            c = c + dc[nd];
            d = nd;
        } else {
            r = nr;
            c = nc;
        }
    }
}

function setDirection(d, nr, nc) {
    // 범위를 벗어났거나 이후 있을 자리에 이미 값이 있거나
    if (nr >= n || nc >= n || nr < 0 || nc < 0 || map[nr][nc] !== 0) {
        d = (d + 1) % 4;
    }
    return d;
}

makeMap();

for (let i = 0; i < map.length; i++) {
    console.log(map[i].join(' '));
}

let kr, kc;
for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
        if (map[i][j] === k) {
            kr = i + 1;
            kc = j + 1;
            break;
        }
    }
}
console.log(kr, kc);
