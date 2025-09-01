// https://school.programmers.co.kr/learn/courses/30/lessons/181895

function solution(arr: number[], intervals: number[][]) {
  const [first, second] = intervals;

  const firstArr = arr.slice(first[0], first[1] + 1);
  const secondArr = arr.slice(second[0], second[1] + 1);

  return [...firstArr, ...secondArr];
}

const result = solution(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [0, 4],
  ]
);
console.log(result);
