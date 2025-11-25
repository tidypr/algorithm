// https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x: number, n: number) {
  const result: number[] = [];
  for (let i = 1; i < n + 1; i++) {
    result.push(x * i);
  }
  return result
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2))