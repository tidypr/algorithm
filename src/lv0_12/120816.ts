// https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(slice: number, n: number) {
  let count = 1;

  while (slice * count < n) {
    count++;
  }

  return count;
}

const result1 = solution(7, 10);
const result2 = solution(4, 12);

console.log(result1);
console.log(result2);
