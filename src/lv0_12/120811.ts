// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array: number[]) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
