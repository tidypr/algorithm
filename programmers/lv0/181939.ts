// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a: number, b: number) {
  return +`${a}${b}` >= +`${b}${a}` ? +`${a}${b}` : +`${b}${a}`;
}
