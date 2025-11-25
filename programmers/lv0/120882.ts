// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score: number[][]) {
  const arr = [];
  const rank = [];

  for (const s of score) {
    const avg = s.reduce((acc, cur) => acc + cur, 0) / 2;
    arr.push(avg);
  }

  for (const [i, a] of arr.entries()) {
    const filter = arr.filter((x) => x > a);
    rank[i] = filter.length + 1;
  }

  return rank;
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
