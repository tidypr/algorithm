// https://school.programmers.co.kr/learn/courses/30/lessons/181889

function solution(num_list: number[], n: number) {
  return num_list.slice(0, n);
}

const result1 = solution([2, 1, 6], 1);
const result2 = solution([5, 2, 1, 7, 5], 3);
console.log(result1);
console.log(result2);
