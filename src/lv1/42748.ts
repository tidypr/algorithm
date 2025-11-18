// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array: number[], commands: number[][]) {
  const result: number[] = [];

  for (const arr of commands) {
    const sliced = array.slice(arr[0] - 1, arr[1]);
    // console.log(sliced);
    const sorted = [...sliced].sort((a, b) => a - b);
    // console.log(sorted);
    const targetNum = sorted[arr[2] - 1];

    result.push(targetNum);
  }

  return result;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
