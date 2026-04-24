// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array: number[]) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
