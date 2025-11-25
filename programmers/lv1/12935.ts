// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr: number[]) {
  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  return arr.length === 0 ? [-1] : arr;
}

console.log(solution([4, 3, 2, 1]));
