// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers: number[]) {
  const sort = [...numbers.sort((a, b) => b - a)];

  return sort[0] * sort[1];
}
