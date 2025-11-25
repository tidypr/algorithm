// https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr: (0 | 1)[], idx: number) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && i >= idx) {
      return count;
    }
    count++;
  }
  return -1;
}

const result1 = solution([0, 0, 0, 1], 1);
console.log(result1);
const result2 = solution([1, 0, 0, 1, 0, 0], 4);
console.log(result2);
const result3 = solution([1, 1, 1, 1, 0], 3);
console.log(result3);
