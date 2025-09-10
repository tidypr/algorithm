// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a: number[], b: number[]) {
  const newArr = a.map((x, idx) => x * b[idx]);
  return newArr.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
