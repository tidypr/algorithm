// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n: number) {
  const div2 = Math.floor(n / 2);
  return n % 2 === 0 ? "수박".repeat(div2) : "수박".repeat(div2) + "수";
}
