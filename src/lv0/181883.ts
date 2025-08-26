// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr: number[], queries: number[][]) {
  for (const innerArr of queries) {
    for (let i = innerArr[0]; i <= innerArr[1]; i++) {
      arr[i]++;
    }
  }

  return arr;
}

// const result = solution(
//   [0, 1, 2, 3, 4],
//   [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//   ]
// );
const result = solution(
  [0, 1, 2, 3, 4],
  [
    [0, 4],
    [0, 4],
  ]
);

console.log(result);
