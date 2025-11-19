// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a: number, b: number) {
  return parseInt(`${a}${b}`) >= 2 * a * b ? parseInt(`${a}${b}`) : 2 * a * b;
}
