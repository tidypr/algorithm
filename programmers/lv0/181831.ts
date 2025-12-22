// https://school.programmers.co.kr/learn/courses/30/lessons/181831

function solution(arr: number[][]) {
  // 대칭 행렬

  const all: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      all.push([i, j]);
    }
  }

  const vector = all.filter((x) => x[0] !== x[1]);
  const checkVector = vector.map((x) => arr[x[0]][x[1]] === arr[x[1]][x[0]]);

  return checkVector.some((x) => !x) ? 0 : 1;
}

console.log(
  solution([
    [5, 192, 33],
    [192, 72, 95],
    [33, 95, 999],
  ])
);

console.log(
  solution([
    [19, 498, 258, 587],
    [63, 93, 7, 754],
    [258, 7, 1000, 723],
    [587, 754, 723, 81],
  ])
);
