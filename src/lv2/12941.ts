// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A: number[], B: number[]) {
  const a = A.sort((a, b) => a - b);
  const b = B.sort((a, b) => b - a);

  const sumArr = [];

  for (let i = 0; i < A.length; i++) {
    sumArr.push(a[i] * b[i]);
  }

  return sumArr.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
