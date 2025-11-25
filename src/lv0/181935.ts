// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n: number) {
  if (n % 2 === 0) {
    const newArr = Array.from({ length: n + 1 }, (_, i) => {
      return i;
    });
    const result = newArr
      .filter((x) => x % 2 === 0)
      .map((x) => x ** 2)
      .reduce((acc, cur) => acc + cur, 0);
    return result;
  } else if (n % 2 === 1) {
    const newArr = Array.from({ length: n + 1 }, (_, i) => {
      return i;
    });
    const result = newArr
      .filter((x) => x % 2 === 1)
      .reduce((acc, cur) => acc + cur, 0);
    return result;
  }
}

const result1 = solution(7);
const result2 = solution(10);

console.log(result1);
console.log(result2);
