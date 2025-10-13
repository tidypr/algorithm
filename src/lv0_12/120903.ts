// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1: string[], s2: string[]) {
  let count = 0;

  for (const s of s1) {
    s2.includes(s) ? count++ : "";
  }
  return count;
}
