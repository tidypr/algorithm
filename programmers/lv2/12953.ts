// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr: number[]) {
  let max = Math.max(...arr);
  let divArr = arr.map((x) => x % max === 0);
  let isTrue = divArr.every((x) => x === true);

  while (true) {
    divArr = arr.map((x) => max % x === 0);
    isTrue = divArr.every((x) => x === true);
    if (isTrue) {
      break;
    }
    max++;
  }
  return max;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
