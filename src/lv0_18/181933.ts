// https://school.programmers.co.kr/learn/courses/30/lessons/181933

function solution(a: number, b: number, flag: boolean) {
  return flag ? a + b : a - b;
}

const result1 = solution(-4, 7, true);
const result2 = solution(-4, 7, false);

console.log(result1);
console.log(result2);
