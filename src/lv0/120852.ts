// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n: number) {
  let num = n;
  let count = 2;
  const result = [];

  while (num > 1) {
    if (num % count === 0) {
      result.push(count);
      num = num / count;

      count = 2;
    } else {
      count++;
    }
  }

  return [...new Set(result)];
}

console.log(solution(12));
