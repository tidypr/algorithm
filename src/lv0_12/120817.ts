// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers: number[]) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}
