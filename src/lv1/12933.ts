// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n: number) {
  let arr = `${n}`.split("");
  arr.sort((a, b) => +b - +a);
  return +arr.join('')
}
