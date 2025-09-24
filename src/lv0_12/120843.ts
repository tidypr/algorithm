// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers: number[], k: number) {
  let idx = k * 2 - 2;
  return numbers[idx % numbers.length]
}