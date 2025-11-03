// https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr: number[], queries: number[][]) {
  for (let i = 0; i < queries.length; i++) {
    const x = arr[queries[i][0]];
    const y = arr[queries[i][1]];

    arr[queries[i][0]] = y;
    arr[queries[i][1]] = x;
  }
  return arr;
}

const result = solution(
  [0, 1, 2, 3, 4],
  [
    [0, 3],
    [1, 2],
    [1, 4],
  ]
);

console.log(result);
