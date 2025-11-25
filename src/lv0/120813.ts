// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n: number) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((x) => x % 2 === 1);
}

const result1 = solution(10);
console.log(result1);

const result2 = solution(15);
console.log(result2);
