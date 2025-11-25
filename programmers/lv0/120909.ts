// https://school.programmers.co.kr/learn/courses/30/lessons/120909

function solution(n: number) {
  const sqrt = Math.sqrt(n);
  return n % sqrt === 0 ? 1 : 2;
}
