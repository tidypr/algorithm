// https://school.programmers.co.kr/learn/courses/30/lessons/181922

function solution(arr: number[], queries: number[][]) {
  // s부터 e범위 사이의 k배수
  const ar = arr;

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];

    for (let j = s; j < e + 1; j++) {
      if (j % k === 0) {
        ar[j] += 1;
      }
    }
    // console.log(ar);
  }

  return ar;
}

const result = solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 1],
    [0, 3, 2],
    [0, 3, 3],
  ]
);

console.log(result);
