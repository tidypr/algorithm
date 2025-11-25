// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n: number) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => +acc + +cur, 0);
}
