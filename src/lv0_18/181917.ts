// https://school.programmers.co.kr/learn/courses/30/lessons/181917

function solution(x1: boolean, x2: boolean, x3: boolean, x4: boolean) {
  return (x1 || x2) && (x3 || x4);
}

const result1 = solution(false, true, true, true);
const result2 = solution(true, false, false, false);

console.log(result1);
console.log(result2);
