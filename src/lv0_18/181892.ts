// https://school.programmers.co.kr/learn/courses/30/lessons/181892

function solution(num_list: number[], n: number) {
  return num_list.splice(n - 1);
}

const result1 = solution([2, 1, 6], 3);
console.log(result1);
const result2 = solution([5, 2, 1, 7, 5], 2);
console.log(result2);
