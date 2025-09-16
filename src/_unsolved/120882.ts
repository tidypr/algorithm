// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score: number[][]) {
  const newArr = score.map((x) => x.reduce((acc, cur) => acc + cur, 0) / 2);
  console.log(newArr);

  const rankArr = Array.from({ length: score.length }, (x) => 0);
  console.log(rankArr);
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);

// 객체
// key - value => find key
// rank = sum(value)

const test = {
  "100": 1,
  "95": 2,
};

// 루프
// 최대값 찾기 => 같은 수 찾기 => 있으면 rank++
const maxNum = [];
for (let i = 0; i < 7; i++) {
  Math.max(...[2, 7, 6, 6, 7]);
}
