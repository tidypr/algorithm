// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr: number[], queries: number[][]) {
  const ar = arr;
  let answer: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    let range = arr.map((x, index) => {
      return index >= s && index <= e && x > k ? x : -1;
    });
    range = range.filter((x) => x !== -1);

    const isnum = Math.min(...range);
    answer.push(isnum);
    answer = answer.map((x) => (x === Infinity ? -1 : x));
  }

  return answer;
}

const result = solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
);

console.log(result);
