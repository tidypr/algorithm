// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array: number[], n: number) {
  array.sort((a, b) => a - b);
  let subArr = array.map((x) => Math.abs(x - n));

  let min = subArr[0];
  let idx = 0;

  for (const [i, s] of subArr.entries()) {
    if (min > s) {
      min = Math.min(min, s);
      idx = i;
    }
  }

  return array[idx];
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
console.log(solution([10, 11, 14, 12], 13));
