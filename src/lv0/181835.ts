// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr: number[], k: number) {
  return k % 2 === 0 ? arr.map((x) => x + k) : arr.map((x) => x * k);
}
