// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr: number[], divisor: number) {
  const result = arr.filter((x) => x % divisor === 0).sort((a, b) => a - b);
  return result.length === 0 ? [-1] : result;
}

solution([5, 9, 7, 10], 5);
