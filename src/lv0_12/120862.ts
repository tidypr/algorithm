// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers: number[]) {
  numbers.sort((a, b) => b - a);

  const minMax = numbers[0] * numbers[1];
  const maxMax = numbers[numbers.length - 2] * numbers[numbers.length - 1];
  return minMax > maxMax ? minMax : maxMax;
}
