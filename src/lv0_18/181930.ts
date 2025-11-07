// https://school.programmers.co.kr/learn/courses/30/lessons/181930

const sum = (a: number, b: number, c: number) => a + b + c;
const pow = (a: number, b: number, c: number, pow: number) =>
  a ** pow + b ** pow + c ** pow;

function solution(a: number, b: number, c: number) {
  if (a === b && b === c && a === c) {
    return sum(a, b, c) * pow(a, b, c, 2) * pow(a, b, c, 3);
  } else if (a !== b && b !== c && a !== c) {
    return sum(a, b, c);
  } else {
    return sum(a, b, c) * pow(a, b, c, 2);
  }
}

const result1 = solution(2, 6, 1);
const result2 = solution(5, 3, 3);
const result3 = solution(4, 4, 4);

console.log(result1);
console.log(result2);
console.log(result3);
