// https://school.programmers.co.kr/learn/courses/30/lessons/120809

function solution(numbers: number[]) {
  return numbers.map((x) => x * 2);
}

const result1 = solution([1, 2, 3, 4, 5]);
const result2 = solution([1, 2, 100, -99, 1, 2, 3]);

console.log(result1);
console.log(result2);
