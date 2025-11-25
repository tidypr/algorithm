// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots: number[][]) {
  let maxX = dots[0][0];
  let minX = dots[0][0];
  let maxY = dots[0][1];
  let minY = dots[0][1];

  for (const dot of dots) {
    maxX = Math.max(maxX, dot[0]);
    minX = Math.min(minX, dot[0]);

    maxY = Math.max(maxY, dot[1]);
    minY = Math.min(minY, dot[1]);

  }

  return (maxX - minX) * (maxY - minY);
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
