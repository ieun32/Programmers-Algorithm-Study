const fs = require('fs').readFileSync('/dev/stdin');
const [P, ...testcases] = fs.toString().split('\n');
const TESTS = testcases.map((test) => test.split(' ').map(Number));

// 키 작은 순으로 번호 부여
// 반 총원 20명, 중복 키 없음
// 줄 서기 순서 정해짐
// insert(삽입)이 일어난 횟수 출력
const answer = [];

for(let i = 0; i < Number(P); i++){
    const [T, ...heights] = TESTS[i];
    const count = countInsert(heights);
    answer.push(`${T} ${count}`);
}

console.log(answer.join('\n'));

function countInsert(arr) {
    let count = 0;
    const line = [];

    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        let insertIdx = line.findIndex(v => v > cur);

        if (insertIdx === -1) {
            line.push(cur); // 그냥 맨 뒤에 추가
        } else {
            // 끼어드는 경우
            line.splice(insertIdx, 0, cur);
            count += (line.length - (insertIdx + 1));
        }
    }

    return count;
}
