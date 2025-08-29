// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n: number) {
  return `${n}`.split("").reduce((acc, cur) => +acc + +cur, 0);
}

const result1 = solution(123);
const result2 = solution(987);

console.log(result1);
console.log(result2);
