// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1: number[][], arr2: number[][]) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const row = [];

    for (let j = 0; j < arr1[0].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }

    answer.push(row);
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

console.log(solution([[1], [2]], [[3], [4]]));
