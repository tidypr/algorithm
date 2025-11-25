// https://school.programmers.co.kr/learn/courses/30/lessons/181936

function solution(number: number, n: number, m: number) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

const result1 = solution(60, 2, 3);
const result2 = solution(55, 10, 5);

console.log(result1);
console.log(result2);
