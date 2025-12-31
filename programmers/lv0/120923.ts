// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num: number, total: number) {
  let result = Array.from({ length: num }, (_, i) => i + 1);
  let sum = result.reduce((acc, cur) => acc + cur, 0);

  while (sum !== total) {
    if (sum < total) {
      result = result.map((x) => x + 1);
      sum = result.reduce((acc, cur) => acc + cur, 0);
    } else {
      result = result.map((x) => x - 1);
      sum = result.reduce((acc, cur) => acc + cur, 0);
    }
  }

  return result;
}

console.log(solution(3, 12));
console.log(solution(5, 5));
