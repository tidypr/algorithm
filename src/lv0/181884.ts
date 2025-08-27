// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers: number[], n: number) {
  let sum = 0;

  for (const num of numbers) {
    if (sum <= n) {
      sum += num;
    } else {
      return sum;
    }
  }

  return sum;
}

const result1 = solution([34, 5, 71, 29, 100, 34], 123);
console.log(result1);
const result2 = solution([58, 44, 27, 10, 100], 139);
console.log(result2);
