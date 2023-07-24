function solution(s) {
    s.length % 2 === 0
    ? s = s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s = s[(s.length - 1) / 2]

    return s
}