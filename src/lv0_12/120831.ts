// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n: number) {
  const numArr = Array.from({ length: n }, (_, i) => i + 1);
  return numArr.filter((x) => x % 2 === 0).reduce((acc, cur) => acc + cur, 0);
}
